const locations = [
  {
    id: 1,
    name: "Chorsu bozori",
    latitude: 41.3275,
    longitude: 69.2342,
    description: "Toshkentning eng muhim va qadimiy bozori, O'rta Osiyodagi eng yirik bozorlardan biri. Bu yerda meva-sabzavot, go'sht, ziravorlar va an'anaviy taomlar topiladi.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrkKNISEPquV81-3LF5Nb9K9Q7IVNtQwDVwL5RlfE47yiAma_DfJKIAMEUU3ACSNz7qYDRl2WHFECN1-Szke2d8lwP_x0ngqrYmwnXzAaUh4JifXWvZpcQkbO2K5j1rX21ZZm0=w408-h272-k-no"
  },
  {
    id: 2,
    name: "Alay bozori",
    latitude: 41.3167,
    longitude: 69.2333,
    description: "Toshkentning markaziy va zamonaviy bozorlaridan biri. Bu yerda sifatli mahsulotlar, sharqona shirinliklar va zargarlik buyumlari sotiladi.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npigR1kG2mcfsXIn-vOGcLMTRav3uFCX-IAzGswfNRj13a6i2Gd20TZ2OrJL6gqXNR30GeCMLW3eTDPmUi3oRNY-RPBZHNKd13uwvAlW428iKNr63OaW88H5-IO8LaGVciDp3i_tA=w408-h304-k-no"
  },
  {
    id: 3,
    name: "Amir Temur maydoni (Skver)",
    latitude: 41.3111,
    longitude: 69.2797,
    description: "Toshkentning markaziy maydoni, Amir Temur haykali joylashgan. Bu yerda ko'pincha madaniy tadbirlar o'tkaziladi.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np6ge_rtDhL-muiYKYZtSGgqrsGIzkFpu5NSqmDzFuVdBl51c8KiR2OmsDtIZXYbSiUdB6V1RHf4uSHXEO-lKzgBr9nzulc1_tGLTLFi_ypCBDPYz0XlDdEE-xjn5c6HdX6Hjc=w408-h306-k-no"
  },
  {
    id: 4,
    name: "Yangiabad bozori",
    latitude: 41.2667,
    longitude: 69.3167,
    description: "Toshkentning ikkinchi qo'l buyumlar bozori, antiqa va vintage narsalar topish uchun ideal. Shanba va yakshanba kunlari eng faol.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqpQn5lKbc47pFVv1p9oDmaXYeeWmtTXumSrbKCEHO--sYdQRQsq7N5EKNyRy7_CoBPswjaB7876Y-wN4Ko-kk4K0dJvDgLL-1WrWgo66dQTM8qxOZAcGbY8hWXYCREXw8yZWvJDg=w408-h306-k-no"
  },
  {
    id: 5,
    name: "Farkhad bozori",
    latitude: 41.2833,
    longitude: 69.3167,
    description: "Shahar chekkasidagi dehqon bozori, arzon narxlarda ommaviy mahsulotlar sotiladi.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npTUw03XUgq8JkeOYpTMHA_lqx-DlQcF3gfRXVdRvEZfbmwTIb1v0_jzvkO-cmYtAF9Vzj6OHoi3iRWUzbsJpfLSnsmhIZc973hHwGYdN_JXJroW4ex6vWU7rDwSiUEkGzdmwTS=w408-h306-k-no"
  },
  {
    id: 6,
    name: "Kuylyuk bozori",
    latitude: 41.2667,
    longitude: 69.3333,
    description: "Toshkentdagi yirik oziq-ovqat bozorlaridan biri, dehqonlar tomonidan yangi mahsulotlar sotiladi.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrWtG0jeICoXP1vVSyQrltHnQXbWN980i9evUhx71CoeNYXGLl9K9Xrbjd1WEt8M8YpF9i1iOcZMcTermUTNitXScbGt0K1U7jMcM6fG1GTQZ1ditqLb5qMViCrjxQs-MUG9H09=w426-h240-k-no"
  },
  {
    id: 7,
    name: "Mirabad bozori",
    latitude: 41.2833,
    longitude: 69.2667,
    description: "Gospitalniy bozori sifatida ham tanilgan, yangi mahsulotlar va koreys taomlari sotiladi.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqC5BJdrLyJpxEfpJ8qb0QZRKYE2kYsc70gDcQ3OYfpuGfeD1o0KkYkdzi7Bd_fFFEcDavl8r0eyJdxwNM8GbJjcdio5TuFCJSOeqslRvikPPYWgTOM0CiWEjM0STNVAu9u4pA=w408-h306-k-no"
  },
  {
    id: 8,
    name: "Ippodrom bozori",
    latitude: 41.2667,
    longitude: 69.2833,
    description: "Kiyim-kechak va uy-ro'zg'or buyumlari uchun yirik bozor, asosan arzon Xitoy mahsulotlari.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np0JFLayubmQmEpwinsCE39NNzjUC2V7ofSzoeZAU-QN-Bcxf6Bj25e2NODKGydk5zASTl2bYxUA5SJZD-minvaHnThrqJClm3TzXEP3Z_Nh5vfhUkp8DPLQUq1i5QldIXsJK6L=w408-h306-k-no"
  },
  {
    id: 9,
    name: "Chigatoy bozori",
    latitude: 41.3333,
    longitude: 69.2333,
    description: "Oziq-ovqat bozori sifatida tanilgan, shashlik va an'anaviy taomlar bilan mashhur.",
    img: "https://lh3.googleusercontent.com/p/AF1QipNSzWi18UWh0CHJWHr2vSTXDtkF5zFPd3xamYJJ=w408-h306-k-no"
  },
  {
    id: 10,
    name: "Yunusabad bozori",
    latitude: 41.3667,
    longitude: 69.2833,
    description: "Yunusabad tumanidagi dehqon bozori, yangi meva-sabzavotlar va ziravorlar bilan mashhur.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqVmk66VTRgVnmbS5kbn8d5--KTIvMSW6fTI2nsNipS-PNg84dFwh_iEL0sn7Kq8v6Gi2MjHoZdGd81Rrs8dFWHZMR18TGzhXV5O3PrQTCgAPTM5WvlL_wnLzwNi2Zb8QVJ4jYjMg=w408-h307-k-no"
  },
  {
    id: 11,
    name: "Askia bozori",
    latitude: 41.3167,
    longitude: 69.3167,
    description: "Babur bog'i yaqinidagi dehqon bozori, mahalliy mahsulotlar va an'anaviy taomlar.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqz67JXkF6dyLX4nh0_LFmKw6UguC1WlwSL_3BxX7b0xvQiEhkoYFQj5Dxmu4xcI_PFP-zOXS2_hEWoadIdg4lWrStzxk3bgNY1UIgjdiuWAtGbrGyudH60kpoOpo1nlcFLi4U2=w408-h725-k-no"
  },
  {
    id: 12,
    name: "Bek Baraka bozori",
    latitude: 41.2667,
    longitude: 69.2833,
    description: "Ulgurji kiyim bozori, uy-ro'zg'or buyumlari va matolar sotiladi.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqx1z6A7NXIGgzAN8elIdQmBPst7QDUrlE-19o49O3uCy1fszUM6bwpI4uCSHQwuy0OYTHoEAQUdBoKz7H1rCOxCCQyXHqstWam7R2mm_2a9c5ywp3ffxzY2_DHqRQhkddJo54=w426-h240-k-no"
  },
  {
    id: 13,
    name: "Chilanzar bozori",
    latitude: 41.2833,
    longitude: 69.2167,
    description: "Chilanzar tumanidagi yirik bozor, oziq-ovqat va kiyim-kechak sotiladi.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nob2vnzJHFG81KxriPsJLdcb5Yr_FHLrSPzgY2VonXv1xjFfWSc102o3dJfBYewL_o0AFtG2gvRTZPMpKMH-HCV1lxVjYn6rKyEcuLYl5RzVvapt6R-qBb2OmgcKg3u1BMhZSX3WA=w426-h240-k-no"
  }
];

module.exports = locations;