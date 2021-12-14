import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Sony Turntable - PSLX350H",
      description:
        "Sony Turntable - PSLX350H/ Belt Drive System/ 33-1/3 and 45 RPM Speeds/ Servo Speed Control/ Supplied Moving Magnet Phono Cartridge/ Bonded Diamond Stylus/ Static Balance Tonearm/ Pitch Control",
      price: 450.0,
      image:
        "https://m.media-amazon.com/images/I/41EHC7PQQJL._AC_.jpg",
    },
    {
      id: 2,
      title: "Bose Acoustimass 5 Series III Speaker System - AM53BK	",
      description:
        "Bose Acoustimass 5 Series III Speaker System - AM53BK/ 2 Dual Cube Speakers With Two 2-1/2' Wide-range Drivers In Each Speaker/ Powerful Bass Module With Two 5-1/2' Woofers/ 200 Watts Max Power/ Black Finish",
      price: 399.0,
      image:
        "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/am5_series3/product_silo_image/am5_series3_EC_00.psd/jcr:content/renditions/cq5dam.web.320.320.png",
    },
    {
      id: 3,
      title: "Sony Switcher - SBV40S",
      description:
        "Sony Switcher - SBV40S/ Eliminates Disconnecting And Reconnecting Cables/ Compact Design/ 4 A/V Inputs With S-Video Jacks/ 1 A/V Output With S-Video (Y/C)Jack/ 2 Audio Output",
      price: 49.0,
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3205/3205524_ra.jpg",
      },
      {
        id: 4,
        title: "Sony 5 Disc CD Player - CDPCE375",
        description:
          "Sony 5 Disc CD Player- CDPCE375/ 5 Disc Changer/ Variable Line Output/ CD-R/RW Playback Capability/ 20 Track Music Calendar/ Digital Servo Control/ Remote Commander Remote Control",
        price: 149.0,
        image:
          "https://lh3.googleusercontent.com/proxy/Sgr3ODgD28ovt3aKgUGZynd3SH761dzoBlI6g5bEv5XOAwrNteNTVV9U6h6kThl2iCYGpxAEVh25MycP3q7xfmrZR3760aZQNLF_cI8woEr6U0iqumGD2a1MOgUmAK-vcX_kEo3yy9hGrFLuuFRf1RLebKFkM6rfDnI",
    },
    {
        id: 5,
        title: "Bose 27028 161 Bookshelf Pair Speakers In White - 161WH",
        description:
          "Bose 161 Bookshelf Speakers In White - 161WH/ Articulated Array Speaker Design/ High-Excursion Twiddler Drivers/ Magnetically Shielded/ Priced Per Pair/ White Finish",
        price: 158.0,
        image:
          "https://www.bhphotovideo.com/images/images2500x2500/Bose_27028_161_Speaker_System_White_291869.jpg",
    },
    {
        id: 6,
        title: "Denon Stereo Tuner - TU1500RD",
        description:
          "Denon Stereo Tuner - TU1500RD/ RDS Radio Data System/ AM-FM 40 Station Random Memory/ Rotary Tuning Knob/ Dot Matrix FL Display/ Optional Remote",
        price: 185.0,
        image:
          "https://m.media-amazon.com/images/I/417SPY2GTEL._AC_SX450_.jpg",
    },
    {
        id: 7,
        title: "Sony Vertical-In-The-Ear Stereo Headphones - MDRJ10",
        description:
          "Sony Vertical-In-The-Ear Stereo Headphones - MDRJ10/ Clip On Style/ 13.5 MM Driver Unit/ Blue Finish",
        price: 49.0,
        image:
          "https://m.media-amazon.com/images/I/41YH9+cIoZL._AC_SS450_.jpg",
    },
    {
        id: 8,
        title: "Panasonic 2-Line Integrated Telephone - KXTSC14W",
        description:
          "Panasonic 2-Line Integrated Telephone - KXTSC14W/ Call Waiting/ 50-Station Caller ID/ Voice Mail Message-Waiting Indicator/ Speakerphone/ 3-Line LCD Display/ White Finish",
        price: 55.0,
        image:
          "https://headsetplus.com/images/KX-TSC14B.jpg",
    },
    {
        id: 9,
        title: "Sony 300 Disc CD Changer - CDPCX355",
        description:
          "Sony 300 Disc CD Changer - CDPCX355/ MegaStorage Control/ CD-R/CD-RW Playback/ 32 Step Program Play/ Control A1 II/ Custom File Memo/ CD Text/ Keyboard Input/ 2 Jog Dials/ Remote Control/ Black Finish",
        price: 155.0,
        image:
          "https://cdn11.bigcommerce.com/s-ry2cfqo/images/stencil/1280x1280/products/7572/7106/CDP-CX355_Front__15013.1557272130.jpg?c=2",
    },
    {
        id: 10,
        title: "Sony 400 Disc MegaStorage CD Changer - CDPCX455",
        description:
          "Sony 400 Disc MegaStorage CD Changer - CDPCX455/ MP3 Playback Capability/ CD-R/CD-RW Playback/ Twin Jog Dial For Easy Disc Access/ MegaChanger Control/ Optical Digital Output/ Keyboard Input/ Remote Commander® Remote Control",
        price: 155.0,
        image:
          "https://content.etilize.com/Large/1025204794.jpg",
    },
    {
        id: 11,
        title: "Panasonic Hands-Free Headset - KXTCA86",
        description:
          "Panasonic Hands-Free Headset - KXTCA86/ Comfort Fit And Fold Design/ Noise Cancelling Microphone/ Standard 2.5mm Connection",
        price: 35.0,
        image:
          "http://www.panafonic.com/b2c/images/kxtca89.jpg",
    },
    {
        id: 12,
        title: "Denon Semi-Automatic Turntable - Black Finish - DP29F",
        description:
          "Denon Semi-Automatic Turntable - DP29F/ Metal Platter/ Built-In RIAA Equalizer/ DC Servo Motor/ 2 Speed 33 + 45 RPM/ Built-In Phono PreAmp",
        price: 195.0,
        image:
          "https://cdn.shopify.com/s/files/1/0278/4696/7399/products/denon-dp-29f-fully-automatic_700x700.jpg?v=1591189845",
    },
    {
        id: 13,
        title: "Sony Compact Disc Player/Recorder - RCDW500C",
        description:
          "Sony Compact Disc Player/Recorder - RCDW500C/ 5-CD/Dual Deck With 4x High Speed Dubbing/ CD, CD-R, CD-RW, MP3 Playback Capable/ Super Bit Mapping Recording/ High Speed Finalizing",
        price: 115.0,
        image:
          "https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2003/158/x158RCDW500-f.jpeg",
    },
    {
        id: 14,
        title: "Sony Stereo Audio Receiver - STRDE197",
        description:
          "Sony Stereo Audio Receiver - STRDE197/ 100 Watts Per Channel x 2/ AM/FM Tuning With 30 Presets/ 5 Function Input Selector/ 8 Ohm Rated Amplifier/ Remote Control",
        price: 145.0,
        image:
          "https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2009/05/158/x158STR197B-f.jpeg",
    },
    {
        id: 15,
        title: "Bose Second Zone Remote - PMC2",
        description:
          "Bose Second Zone Remote - PMC2/ Controls Lifestyle 38 Or 48 Media Center/ TV, VCR, Cable Box, Satellite Receiver/ Accesses Digitally Stored CDs In UMusic System",
        price: 25.0,
        image:
          "https://a1.amlimg.com/YzNjYWE5OGM4ZjhkNDUzN2I0MzA5ZDFlYTc1YTExYmPj_eIOdGbpEx7bnDhDQhjNaHR0cDovL21lZGlhLmFkc2ltZy5jb20vZmNkMjUzYjFmOWYyMzk5MjE1Zjk5NGJmYjBiNzQ2ZWJkNzFjNjJjMWMyOTk0NTk4NDE3MjYyNjIzM2YwNzg2MS5qcGd8fHx8fHwzOTZ4MjYwfGh0dHA6Ly93d3cuYWR2ZXJ0cy5pZS9zdGF0aWMvaS93YXRlcm1hcmsucG5nfHx8.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;