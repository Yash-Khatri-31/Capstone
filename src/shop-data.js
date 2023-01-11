const SHOP_DATA = [
  {
    title: 'Hats',
    items: [
      {
        "id": 1,
        "name": "Brown Brim",
        "imageUrl": "https://i.pinimg.com/originals/c1/9e/ec/c19eecc6143d85cde4eec572ff6a437e.jpg",
        "price": 25
      },
      {
        "id": 2,
        "name": "Blue Beanie",
        "imageUrl": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0935f32a-f9b9-4e6f-9f16-8172c766108a/golden-state-warriors-nba-beanie-2fghzw.png",
        "price": 18
      },
      {
        "id": 5,
        "name": "Green Beanie",
        "imageUrl": "https://m.media-amazon.com/images/I/81EAQK85p0L._AC_UF1000,1000_QL80_.jpg",
        "price": 18
      },
      {
        "id": 7,
        "name": "Red Beanie",
        "imageUrl": "https://res.cloudinary.com/trendhim/image/upload/f_auto,c_pad,q_auto,w_1000,h_1000/media/catalog/product/p/j/pjouh7yr.jpg",
        "price": 18
      },
      {
        "id": 8,
        "name": "Wolf Cap",
        "imageUrl": "https://m.media-amazon.com/images/I/61SM5EjP7RL._AC_SY580_.jpg",
        "price": 14
      },
      {
        "id": 9,
        "name": "Blue Snapback",
        "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_681841-MCO31060485162_062019-O.jpg",
        "price": 16
      },
    ],
  },
  {
    title: 'Sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://images.complex.com/complex/images/c_crop,h_603,w_917,x_5,y_3/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/it6crsck9ah4t9kbyf22/adidas-nmd-og-r1',
        price: 220,
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/960x540/558270.jpg',
        price: 280,
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://www.converse.com/on/demandware.static/-/Library-Sites-ConverseEU01SharedLibrary/default/dwc1e278b3/firstspirit/converse-uk/media/19_landing_pages/2020_summer_9/black_converse/mob_2/WE_M_BlackConverse_LP_6-2.jpg',
        price: 110,
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1aa3abc4-692e-466b-b985-570a178f25ef/air-force-1-older-shoes-1hqfHl.png',
        price: 160,
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://sneakernews.com/wp-content/uploads/2018/04/air-jordan-1-homage-to-home-release-info-2300-pairs-6.jpg',
        price: 190,
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Image_of_a_pair_of_Tmerberland_boots.png',
        price: 200,
      },
    ],
  },
  {
    title: 'Jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'http://cache.mrporter.com/variants/images/33258524071930946/in/w2000_q60.jpg',
        price: 125,
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://cdn-img.prettylittlething.com/c/9/6/9/c96959d9b8f7458fbc94ca0c54017d2d0b21dbac_cmh4320_5.jpg?imwidth=400',
        price: 90,
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://cdn-img.prettylittlething.com/1/b/a/3/1ba3d9efef4d05d8393e787aa41ddb92ee12c337_cmm9625_5.jpg?imwidth=300',
        price: 90,
      },
    ],
  },
  {
    title: 'Womens',
    items: [
      {
        id: 23,
        name: 'Gothic Top',
        imageUrl: 'https://cdn-images.farfetch-contents.com/16/93/62/29/16936229_33834728_322.jpg',
        price: 25,
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://galerieslafayette.ae/63391-large_default/901020500-muslin-pop-cool-floral-dress.jpg',
        price: 80,
      },
      {
        id: 26,
        name: 'Hoodie Crop Top',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31BTSl-OXmL.jpg',
        price: 80,
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://assets.vogue.com/photos/6321ff7ebee7fa2be1d21c8e/1:1/w_2667,h_2667,c_limit/slide_12.jpg',
        price: 45,
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41W7rMA0K3L.jpg',
        price: 135,
      },
    ],
  },
  {
    title: 'Mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0214/3706/products/001LJH801022_GRN_A_1024x.jpg?v=1631208983',
        price: 325,
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T25_2446M_F4_X_EC_90?$INTL_PDP_TAB$',
        price: 20,
      },
      {
        id: 32,
        name: 'Sweatshirt',
        imageUrl: 'https://www.net-a-porter.com/variants/images/36093695688977534/in/w920_q60.jpg',
        price: 25,
      },
      {
        id: 33,
        name: 'Oversized Tshirt',
        imageUrl: 'https://thesagacity.s3.ap-south-1.amazonaws.com/media/Soul_reaper.webp',
        price: 25,
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://m.media-amazon.com/images/I/71tJ5YIFyPL._AC_UF1000,1000_QL80_.jpg',
        price: 40,
      },
      {
        id: 35,
        name: 'MHA T-shirt',
        imageUrl: 'https://lzd-img-global.slatic.net/g/p/f818b1f011c8bfa99a483bfb4d0185c6.jpg_720x720q80.jpg_.webp',
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
