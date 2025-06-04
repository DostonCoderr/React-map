const express = require('express');
const cors = require('cors');
const locations = require('./locations'); // locations.js faylini import qilish
const app = express();
const port = 4000;

// CORS sozlamalari (React frontend bilan ishlash uchun)
app.use(cors());
app.use(express.json());

// API endpoint: Barcha joylarni markdown formatida qaytarish
app.get('/api/locations', (req, res) => {
  const markdownLocations = locations.map(location => `
### ${location.name}
- **Latitude**: ${location.latitude}
- **Longitude**: ${location.longitude}
- **Tavsif**: ${location.description}
- **Rasm**: ![${location.name}](${location.img})
  `).join('\n');
  
  res.set('Content-Type', 'text/markdown');
  res.send(markdownLocations);
});

// API endpoint: ID bo'yicha bitta joyni markdown formatida qaytarish
app.get('/api/locations/:id', (req, res) => {
  const location = locations.find(loc => loc.id === parseInt(req.params.id));
  if (!location) {
    return res.status(404).json({ error: 'Joy topilmadi' });
  }
  
  const markdownLocation = `
### ${location.name}
- **Latitude**: ${location.latitude}
- **Longitude**: ${location.longitude}
- **Tavsif**: ${location.description}
- **Rasm**: ![${location.name}](${location.img})
  `;
  
  res.set('Content-Type', 'text/markdown');
  res.send(markdownLocation);
});

// Serverni ishga tushirish
app.listen(port, () => {
  console.log(`Server http://localhost:${port} da ishlamoqda`);
});