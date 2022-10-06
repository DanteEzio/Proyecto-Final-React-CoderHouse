const products = [
  {
    id: 1,
    categoria: "laptops",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/LAPTOP-1.webp",
    nombre: "Laptop Lenovo Legion 5 15.6'",
    descripcion:
      "Laptop Lenovo Legion 5 15ARH05H 15.6' Full HD, AMD Ryzen 5 4600H 3GHz, 8GB, 1TB + 128GB SSD, NVIDIA GeForce RTX 2060, Windows 10 Home 64-bit, Español",
    sku: "82B100FHLM",
    pReal: 23839,
    pDescuento: 20839,
    stock: 1,
  },
  {
    id: 2,
    categoria: "laptops",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/LAPTOP-2.webp",
    nombre: "Laptop Gamer MSI GF65",
    descripcion:
      "Laptop Gamer MSI GF65 Thin 15.6' Full HD, Intel Core i5-10500H 2.50GHz, 8GB, 512GB SSD, NVIDIA GeForce RTX 3060, Windows 10 Home 64-bit, Inglés, Negro",
    sku: "10UE-213US",
    pReal: 27699,
    pDescuento: 25119,
    stock: 4,
  },
  {
    id: 3,
    categoria: "laptops",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/LAPTOP-3.jpg",
    nombre: "Laptop Gigabyte G5 15.6'",
    descripcion:
      "Laptop Gigabyte G5 15.6' Full HD, Intel Core i5-10500H 2.50GHz, 16GB, 512GB, NVIDIA GeForce RTX 3060, Windows 10 Home 64-bits, Inglés, Negro procesador rápido",
    sku: "82B100FHLM",
    pReal: 23839,
    pDescuento: 20839,
    stock: 1,
  },
  {
    id: 4,
    categoria: "laptops",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/LAPTOP-4.webp",
    nombre: "Laptop Gamer MSI Sword 15 15.6'",
    descripcion:
      "Laptop Gamer MSI Sword 15 15.6' Full HD, Intel Core i5-11400H 2.70GHz, 16GB, 512GB SSD, NVIDIA GeForce RTX 3060, Windows 10 Home 64-bit, Español, Blanco",
    sku: "A11UE-417MX",
    pReal: 30249,
    pDescuento: 28709,
    stock: 7,
  },
  {
    id: 5,
    categoria: "laptops",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/LAPTOP-5.webp",
    nombre: "Laptop Gamer Acer Nitro 5 15.6'",
    descripcion:
      "Laptop Gamer Acer Nitro 5 15.6' Full HD, Intel Core i7-10750H 2.60GHz, 16GB, 512GB SSD, NVIDIA GeForce RTX 3060, Windows 11 Home 64-bit, Inglés, Negro",
    sku: "NHQB2AA005",
    pReal: 29689,
    pDescuento: 27250,
    stock: 60,
  },
  {
    id: 6,
    categoria: "laptops",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/LAPTOP-6.jpg",
    nombre: "Lenovo Notebook Legion 5 15.6'",
    descripcion:
      "Lenovo Notebook Legion 5 15ACH6H 15.6' Full HD, AMD Ryzen 5 5600H 3.3GHz, 16GB, 512GB SSD, NVIDIA GeForce RTX 3060, Windows 10 Home 64-bits, Español, Negro",
    sku: "82JU000MLM",
    pReal: 31959,
    pDescuento: 33200,
    stock: 39,
  },
  {
    id: 7,
    categoria: "laptops",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/LAPTOP-8.webp",
    nombre: "Gigabyte AERO 5 XE4 15.6'",
    descripcion:
      "Gigabyte AERO 5 XE4 15.6' 4K Ultra HD, Intel Core i7-12700H 2.30GHz, 16GB, 1TB SSD, NVIDIA GeForce RTX 3070 Ti, Windows 11 Home 64-bit, Español, Negro, Procesador rápido ",
    sku: "XE4-73LA614SH",
    pReal: 48159,
    pDescuento: 45500,
    stock: 3,
  },
  {
    id: 8,
    categoria: "laptops",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/LAPTOP-9.webp",
    nombre: "Laptop AORUS 17 YE5 17.3'",
    descripcion:
      "Laptop AORUS 17 YE5 17.3” Full HD, Intel Core i7-12700H 2.30GHz, 32GB, 1TB SSD, NVIDIA GeForce RTX 3080 Ti, Windows 11 Home 64-bit, Español, Negro, Procesador rápido ",
    sku: "YE5-74LA544SH",
    pReal: 65949,
    pDescuento: 61129,
    stock: 5,
  },
  {
    id: 9,
    categoria: "monitores",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/monitor-1.jpg",
    nombre: "LG 27GL650F-B Monitor",
    descripcion:
      "LG 27GL650F-B Monitor de Juegos Compatible con G-Sync Full HD de 27 Pulgadas con frecuencia de actualización de 144Hz y HDR 10",
    sku: "LG27GL650F-B",
    pReal: 8199.0,
    pDescuento: 5022.0,
    stock: 8,
  },
  {
    id: 10,
    categoria: "monitores",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/monitor-2.jpg",
    nombre: "Asus Monitor IPS TUF",
    descripcion:
      "Asus Monitor IPS TUF Gaming VG27AQ, 27', WQHD (2560 x 1440), 165Hz, G-Sync, HDMI, DisplayPort (VG27AQ) ",
    sku: "VG27AQ",
    pReal: 8888.0,
    pDescuento: 7200.0,
    stock: 15,
  },
  {
    id: 11,
    categoria: "monitores",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/monitor-3.jpg",
    nombre: "LG 34GL750-B, Monitor 34'",
    descripcion:
      "LG 34GL750-B, Monitor 34' Gaming UltraGear, UltraWide 21:9, 144Hz ,1ms, IPS, Adaptative Sync, G Sync, AMD Free Sync.",
    sku: "34GL750-B",
    pReal: 14999.0,
    pDescuento: 10699.0,
    stock: 5,
  },
  {
    id: 12,
    categoria: "monitores",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/monitor-4.jpg",
    nombre: "LG 27GP750-B 27” Ultragear",
    descripcion:
      "LG 27GP750-B 27” Ultragear FHD (1920 x 1080) IPS Gaming Monitor w/ 1ms Response Time & 240Hz Refresh Rate, NVIDIA G-Sync",
    sku: "27GP750-B",
    pReal: 6277.71,
    pDescuento: 5987.84,
    stock: 3,
  },
  {
    id: 13,
    categoria: "monitores",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/monitor-5.jpg",
    nombre: "LG 34GN850-B UltraWide Gaming Monitor 34'",
    descripcion:
      "LG 34GN850-B UltraWide Gaming Monitor 34' Nano IPS Curved WQHD 144Hz 1ms G-Sync Compatible, FreeSync DP, HDMI USB3.0 1U/2D, HDR400",
    sku: "34GN850-B",
    pReal: 27999,
    pDescuento: 22679.1,
    stock: 1,
  },
  {
    id: 14,
    categoria: "monitores",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/monitor-6.jpg",
    nombre: "LG Ultragear - Monitor para Videojuegos, 27 Pulgadas",
    descripcion:
      "LG Ultragear - Monitor para Videojuegos, 27 Pulgadas, QHD Nano IPS 1ms, Compatible con NVIDIA G-Sync, 27 Pulgadas Nano IPS...",
    sku: "NE63060019K9-190AD",
    pReal: 9529.0,
    pDescuento: 8577.0,
    stock: 7,
  },
  {
    id: 15,
    categoria: "monitores",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/monitor-7.jpg",
    nombre: "Alienware AW2521H - Monitor",
    descripcion:
      "Alienware AW2521H - Monitor de juegos de 360 Hz FHD de 24.5 pulgadas (Full HD 1920 x 1080p), certificado NVIDIA G-SYNC...",
    sku: "AW2521H",
    pReal: 18189.0,
    pDescuento: 11557.29,
    stock: 18,
  },
  {
    id: 16,
    categoria: "monitores",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/monitor-8.jpg",
    nombre: "Laptop AORUS 17 YE5 17.3'",
    descripcion:
      "Asus Monitor ROG Swift 360Hz PG259QNR Esports NVIDIA G-Sync Gaming Monitor - 24,5 Pulgadas FHD, NVIDIA Reflex, 360 Hz...",
    sku: "PG259QNR",
    pReal: 16529.0,
    pDescuento: 12200.0,
    stock: 2,
  },
  {
    id: 17,
    categoria: "tGraficas",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/3060Ti.webp",
    nombre: "RTX 3060 Ti Twin Edge",
    descripcion:
      "Tarjeta de Video ZOTAC NVIDIA GeForce RTX 3060 Ti Twin Edge, 8GB 256-bit GDDR6, PCI Express x16 4.0",
    sku: "ZT-A30610E-10MLHR",
    pReal: 16069.0,
    pDescuento: 14779.0,
    stock: 1,
  },
  {
    id: 18,
    categoria: "tGraficas",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/3080.webp",
    nombre: "RTX 3080 Trinity LHR",
    descripcion:
      "Tarjeta de Video Zotac NVIDIA GeForce RTX 3080 Trinity LHR, 10GB 320-bit GDDR6X, PCI Express x16 4.0",
    sku: "ZT-A30800D-10PLHR",
    pReal: 34439,
    pDescuento: 28039,
    stock: 8,
  },
  {
    id: 19,
    categoria: "tGraficas",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/3050.webp",
    nombre: "RTX 3050 OC",
    descripcion:
      "Tarjeta de Video ASUS NVIDIA Dual GeForce RTX 3050 OC, 8GB 128-bit GDDR6, PCI Express 4.0",
    sku: "DUAL-RTX3050-O8G",
    pReal: 12279.0,
    pDescuento: 9209.0,
    stock: 30,
  },
  {
    id: 20,
    categoria: "tGraficas",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/3080Ti.jpg",
    nombre: "RTX 3080 Ti Trinity",
    descripcion:
      "Tarjeta de Video Zotac NVIDIA GeForce RTX 3080 Ti Trinity, 12GB 384-bit GDDR6X, PCI Express x16 4.0",
    sku: "ZT-A30810D-10P",
    pReal: 36989,
    pDescuento: 28649,
    stock: 1,
  },
  {
    id: 21,
    categoria: "tGraficas",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/3070Ti.webp",
    nombre: "RTX 3070 Ti OC",
    descripcion:
      "Tarjeta de Video ASUS TUF Gaming NVIDIA GeForce RTX 3070 Ti OC, 8GB 256-bit GDDR6X, PCI Express 4.0",
    sku: "TUF-RTX3070TI-O8G-GAMING",
    pReal: 22099,
    pDescuento: 20489,
    stock: 2,
  },
  {
    id: 22,
    categoria: "tGraficas",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/3060.webp",
    nombre: "RTX 3060 DUAL",
    descripcion:
      "Tarjeta de Video Palit NVIDIA GeForce RTX 3060 DUAL, 12GB 192-bit GDDR6, PCI Express x16 4.0",
    sku: "NE63060019K9-190AD",
    pReal: 12729,
    pDescuento: 11989,
    stock: 17,
  },
  {
    id: 23,
    categoria: "tGraficas",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/3070.webp",
    nombre: "RTX 3070 GamingPro",
    descripcion:
      "Tarjeta de Video Palit NVIDIA GeForce RTX 3070 GamingPro, 8GB 256-bit GDDR6, PCI Express 4.0",
    sku: "NE63070019P2-1041A",
    pReal: 18189.0,
    pDescuento: 17209.0,
    stock: 3,
  },
  {
    id: 24,
    categoria: "tGraficas",
    img: "https://raw.githubusercontent.com/DanteEzio/AJAX-FETCH/master/imagenes/3090.jpg",
    nombre: "RTX 3090 Trinity Gaming",
    descripcion:
      "Tarjeta de Video Zotac NVIDIA GeForce RTX 3090 Trinity Gaming, 24GB 384-bit GDDR6X, PCI Express x16 4.0",
    sku: "ZT-A30900D-10P",
    pReal: 67689.0,
    pDescuento: 45479.0,
    stock: 20,
  },
];

// Para Obtener nuestros productos creamos nuestra funcion Asincrona (Esta función simula nuestra API)
// *** La exportacion la estamos haciendo de manera nombrada, esto quiere decir que cuando importemos la funcion la tenemos que mandar a llamar con el mismo nombre ***
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find(product => product.id === id));
    }, 1500);
  });
};