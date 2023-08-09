// dslr
import dslr1 from "./assets/dslr/1.png";
import dslr2 from "./assets/dslr/2.png";
import dslr3 from "./assets/dslr/3.png";
import dslr4 from "./assets/dslr/4.png";
import dslr5 from "./assets/dslr/5.png";
// compact
import compact1 from "./assets/compact/1.png";
import compact2 from "./assets/compact/2.png";
import compact3 from "./assets/compact/3.png";
import compact4 from "./assets/compact/4.png";
import compact5 from "./assets/compact/5.png";
// film camera
import film1 from "./assets/filmcamera/1.png";
import film2 from "./assets/filmcamera/2.png";
import film3 from "./assets/filmcamera/3.png";
import film4 from "./assets/filmcamera/4.png";
import film5 from "./assets/filmcamera/5.png";
//mirrorless
import mirror1 from "./assets/mirrorless/1.png";
import mirror2 from "./assets/mirrorless/2.png";
import mirror3 from "./assets/mirrorless/3.png";
import mirror4 from "./assets/mirrorless/4.png";
import mirror5 from "./assets/mirrorless/5.png";
//professional
import professionals1 from "./assets/professional/1.png";
import CameraImg from "./img/camera.png";
import Mirrorless from "./img/mirrorless.png";
import Compact from "./img/compact.png";

export const productData = [
  {
    id: 1,
    type: "dslr",
    title: "Nikon D850 Camera DSLR 45.7MP CMOS Body",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: dslr1,
    isNew: true,
    price: 67000,
  },
  {
    id: 2,
    type: "dslr",
    title: "Canon EOS 6D Mark II Camera DSLR 26.2MP CMOS Body",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: dslr2,
    isNew: true,
    price: 54000,
  },
  {
    id: 3,
    type: "dslr",
    title: "Nikon D7500 Camera DSLR 20.9MP CMOS 4K Kit 18-140 mm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: dslr3,
    isNew: false,
    price: 43000,
  },
  {
    id: 4,
    type: "dslr",
    title: "Canon EOS 250D Kit with Camera Lens EF-S 18-55mm DC Black DSLR",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: dslr4,
    isNew: true,
    price: 37000,
  },
  {
    id: 5,
    type: "dslr",
    title:
      "Canon EOS 2000D Camera DSLR 24.1MP CMOS Kit with Camera Lens EF-S 18-55mm f/3.5-5.6 III Black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: dslr5,
    isNew: false,
    price: 64000,
  },
  {
    id: 6,
    type: "mirrorless",
    title: "Sony A7 III Body Photo Camera Mirrorless 24MP Full Frame 4K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: mirror1,
    isNew: false,
    price: 99000,
  },
  {
    id: 7,
    type: "mirrorless",
    title: "Canon EOS R6 Photo Camera Mirrorless Full-Frame 20.1 M",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: mirror2,
    isNew: true,
    price: 86000,
  },
  {
    id: 8,
    type: "mirrorless",
    title:
      "Canon EOS M50 II Photo Camera Mirrorless 24MP Kit with Camera Lens EF-M 15-45mm F/3.5-6.3 IS STM Black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: mirror3,
    isNew: false,
    price: 87000,
  },
  {
    id: 9,
    type: "mirrorless",
    title:
      "Canon EOS R6 Mark II Photo Camera Mirrorless Full Frame 24.2MP Body Black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: mirror4,
    isNew: true,
    price: 98000,
  },
  {
    id: 10,
    type: "mirrorless",
    title: "Panasonic LUMIX S5 II Photo Camera Mirrorless Full Frame 24.2MP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: mirror5,
    isNew: false,
    price: 96000,
  },
  {
    id: 11,
    type: "film",
    title: "Fujifilm Instax Mini 90 Neo Classic Photo Camera Instant Black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: film1,
    isNew: false,
    price: 71000,
  },
  {
    id: 12,
    type: "film",
    title: "Fujifilm Instax Wide 300 Photo Camera Instant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: film2,
    isNew: true,
    price: 73000,
  },
  {
    id: 13,
    type: "film",
    title: "Agfaphoto Photo Camera Analog 35mm Reusable Black Film Camera",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: film3,
    isNew: false,
    price: 89000,
  },
  {
    id: 14,
    type: "film",
    title: "Fujifilm Instax Mini 40 Photo Camera Instant Black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: film4,
    isNew: false,
    price: 95000,
  },
  {
    id: 15,
    type: "film",
    title: "Fujifilm Instax Mini Evo Hybrid Photo Camera Instant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: film5,
    isNew: false,
    price: 75000,
  },
  {
    id: 16,
    type: "compact",
    title:
      "Sony Cyber-shot DSC-RX10 IV Photo Camera Compact 20.1MP Wi-Fi Bluetooth Black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: compact1,
    isNew: false,
    price: 55000,
  },
  {
    id: 17,
    type: "compact",
    title:
      "Sony Cyber-Shot DSC-RX100 VA - Photo Camera Compact, 20,1 MP, Zoom Optic, 2.9x, ZEISS Vario-Sonnar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: compact2,
    isNew: true,
    price: 86000,
  },
  {
    id: 18,
    type: "compact",
    title:
      "Panasonic Lumix FZ1000 II Photo Camera Compact Bridge 20.1 MP Zoom 16x 4K Black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: compact3,
    isNew: true,
    price: 47000,
  },
  {
    id: 19,
    type: "compact",
    title: "Nikon Coolpix P1000 Photo Camera Compact Bridge 16MP Black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: compact4,
    isNew: false,
    price: 59000,
  },
  {
    id: 20,
    type: "compact",
    title: "Olympus TG-6 Photo Camera Compact Subacvatic 12MP 4K Black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: compact5,
    isNew: false,
    price: 68000,
  },
  {
    id: 21,
    type: "professional",
    title: "Sigma FP Digital Camera Full Frame 24.6MP Body Professional",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    image: professionals1,
    isNew: false,
    price: 79000,
  },
];

export const category = [
  {
    id: 1,
    type: "dslr",
  },
  {
    id: 2,
    type: "compact",
  },
  {
    id: 3,
    type: "mirrorless",
  },
  {
    id: 4,
    type: "film",
  },
  {
    id: 5,
    type: "professional",
  },
];

export const sliderData = [
  {
    img: CameraImg,
    pretitle: "Special offer",
    title1: "Save 20%",
    title2: "On your",
    title3: "first order",
    btnText: "Shop now",
  },
  {
    img: Mirrorless,
    pretitle: "Special offer",
    title1: "Save 25%",
    title2: "On your",
    title3: "first order",
    btnText: "Shop now",
  },
  {
    img: Compact,
    pretitle: "Special offer",
    title1: "Save 10%",
    title2: "On your",
    title3: "first order",
    btnText: "Shop now",
  },
];
