import React from "react";
import "./ImagesGallery.scss";
import Gallery from "react-grid-gallery";
import Center from "react-center";

const IMAGES = [
  {
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847806/MatiRios/1_gm1swi.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847806/MatiRios/1_gm1swi.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/2_q7bkiy.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/2_q7bkiy.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 185,
  },

  {
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/3_ttbhp6.jpg",
    // thumbnail:
    //   "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    // thumbnailWidth: 320,
    // thumbnailHeight: 212,
  },
];
const data = [
  {
    id: 2,
    name: "2",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/2_q7bkiy.jpg",
  },
  {
    id: 3,
    name: "3",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/3_ttbhp6.jpg",
  },
  {
    id: 4,
    name: "4",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847796/MatiRios/4_p5raty.jpg",
  },
  {
    id: 5,
    name: "5",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/5_qxf8k3.jpg",
  },
  {
    id: 6,
    name: "6",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847794/MatiRios/6_tg6mpp.jpg",
  },
  {
    id: 7,
    name: "7",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/7_fwuazp.jpg",
  },
  {
    id: 8,
    name: "8",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/8_kqh4ni.jpg",
  },
  {
    id: 9,
    name: "9",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/9_xdopnf.jpg",
  },
  {
    id: 10,
    name: "10",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849480/MatiRios/10_gkxh2t.jpg",
  },
  {
    id: 11,
    name: "11",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/11_q6efri.jpg",
  },
  {
    id: 12,
    name: "12",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/12_y3ph6o.jpg",
  },
  {
    id: 13,
    name: "13",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849482/MatiRios/13_dokvtk.jpg",
  },
  {
    id: 14,
    name: "14",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/14_btjoar.jpg",
  },
  {
    id: 15,
    name: "15",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849482/MatiRios/15_mw5vks.jpg",
  },
  {
    id: 16,
    name: "16",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/16_rnndbr.jpg",
  },
  {
    id: 17,
    name: "17",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/17_j1ksqm.jpg",
  },
  {
    id: 18,
    name: "18",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849482/MatiRios/18_zqvaqt.jpg",
  },
  {
    id: 19,
    name: "19",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849482/MatiRios/19_vidsul.jpg",
  },
  {
    id: 20,
    name: "20",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/20_zt1mfr.jpg",
  },
  {
    id: 21,
    name: "21",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849484/MatiRios/22_easkrz.jpg",
  },
  {
    id: 22,
    name: "22",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849484/MatiRios/23_dcfve8.jpg",
  },
  {
    id: 23,
    name: "23",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849484/MatiRios/24_r2piqw.jpg",
  },
  {
    id: 24,
    name: "24",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849485/MatiRios/25_ojyyzp.jpg",
  },
  {
    id: 25,
    name: "25",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/21_fldwqv.jpg",
  },
  {
    id: 26,
    name: "26",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/26_kbql7r.jpg",
  },
  {
    id: 27,
    name: "27",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/27_nobh5e.jpg",
  },
  {
    id: 28,
    name: "28",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/28_rwkiml.jpg",
  },
  {
    id: 29,
    name: "29",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/29_vwkrpw.jpg",
  },
  {
    id: 30,
    name: "30",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/30_u2c5zk.jpg",
  },
  {
    id: 31,
    name: "31",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/31_feqsub.jpg",
  },
  {
    id: 32,
    name: "32",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851731/MatiRios/32_jnnc8o.jpg",
  },
  {
    id: 33,
    name: "33",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/33_wgvtkg.jpg",
  },
  {
    id: 34,
    name: "34",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851734/MatiRios/34_ekqd46.jpg",
  },
  {
    id: 35,
    name: "35",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/35_phlrbk.jpg",
  },
  {
    id: 36,
    name: "36",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/36_go7bfy.jpg",
  },
  {
    id: 37,
    name: "37",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/37_v16weq.jpg",
  },
  {
    id: 38,
    name: "38",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851733/MatiRios/38_gauvbg.jpg",
  },
  {
    id: 39,
    name: "39",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851734/MatiRios/39_gcrti2.jpg",
  },
  {
    id: 40,
    name: "40",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/40_dbldrx.jpg",
  },
  {
    id: 41,
    name: "41",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617854610/MatiRios/41_yoeu6d.jpg",
  },
  {
    id: 42,
    name: "42",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617854616/MatiRios/42_cl8dge.jpg",
  },
  {
    id: 43,
    name: "43",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855273/MatiRios/43_iexgkv.jpg",
  },
  {
    id: 44,
    name: "44",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855273/MatiRios/44_q0em2f.jpg",
  },
  {
    id: 45,
    name: "45",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/45_dcembb.jpg",
  },
  {
    id: 46,
    name: "46",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/46_hpdsfw.jpg",
  },
  {
    id: 47,
    name: "47",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/47_bnjajs.jpg",
  },
  {
    id: 48,
    name: "48",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/48_i4xxdj.jpg",
  },
  {
    id: 49,
    name: "49",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/49_qs4hws.jpg",
  },
  {
    id: 50,
    name: "50",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/50_lfdhcm.jpg",
  },
  {
    id: 51,
    name: "51",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/51_y8niz2.jpg",
  },
  {
    id: 52,
    name: "52",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/52_pd1oby.jpg",
  },
  {
    id: 53,
    name: "53",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/53_j8ht3g.jpg",
  },
  {
    id: 54,
    name: "54",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/54_nmr4da.jpg",
  },
  {
    id: 55,
    name: "55",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/55_y4p9tz.jpg",
  },
  {
    id: 56,
    name: "56",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617856274/MatiRios/56_kwxcad.jpg",
  },
  {
    id: 57,
    name: "57",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/57_h3zdcu.jpg",
  },
  {
    id: 58,
    name: "58",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/58_giwdz5.jpg",
  },
  {
    id: 59,
    name: "59",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911168/MatiRios/59_i7jiej.jpg",
  },
  {
    id: 60,
    name: "60",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/60_v1j70y.jpg",
  },
  {
    id: 61,
    name: "61",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/61_bmtxs4.jpg",
  },
  {
    id: 62,
    name: "62",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/62_tbribp.jpg",
  },
  {
    id: 63,
    name: "63",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911168/MatiRios/63_htswtw.jpg",
  },
  {
    id: 64,
    name: "64",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911168/MatiRios/64_wdgrp3.jpg",
  },
  {
    id: 65,
    name: "65",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911170/MatiRios/65_pyvzoa.jpg",
  },
  {
    id: 66,
    name: "66",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/66_ey5gh4.jpg",
  },
  {
    id: 67,
    name: "67",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/67_wvyslu.jpg",
  },
  {
    id: 68,
    name: "68",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/68_pvoxqr.jpg",
  },
  {
    id: 69,
    name: "69",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/69_auwjy3.jpg",
  },
  {
    id: 70,
    name: "70",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/70_iiynil.jpg",
  },
  {
    id: 71,
    name: "71",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/71_vfajhb.jpg",
  },
  {
    id: 72,
    name: "72",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/72_bodhvy.jpg",
  },
  {
    id: 73,
    name: "73",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/73_kbhq3m.jpg",
  },
  {
    id: 74,
    name: "74",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/74_wrnj8d.jpg",
  },
  {
    id: 75,
    name: "75",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/75_axlznl.jpg",
  },
  {
    id: 76,
    name: "76",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/76_ffx89g.jpg",
  },
  {
    id: 77,
    name: "77",
    image:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/77_qlynlu.jpg",
  },
];

function ImagesGallery() {
  return (
    <Center>
      <div>
        <p style={{ margin: "0px" }}>.</p>
        <Gallery images={IMAGES} />
      </div>
    </Center>
    // <div
    //   style={{
    //     display: "block",
    //     minHeight: "1px",
    //     width: "100%",
    //     border: "1px solid #ddd",
    //     overflow: "auto",
    //     alignContent: "center",
    //     textAlign: "center",
    //   }}
    // >
    //   {" "}
    //   <Gallery images={IMAGES} />
    // </div>
  );

  // return <Tiles data={data} />
}

// class Tiles extends React.Component {
//   render() {
//     // Create tile for each item in data array
//     // Pass data to each tile and assign a key
//     return (
//       <div className="tiles">
//         {this.props.data.map((data) => {
//           return <Tile data={data} key={data.id} />;
//         })}
//       </div>
//     );
//   }
// }

// class Tile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false,
//       mouseOver: false,
//     };
//     // Bind properties to class instance
//     this._clickHandler = this._clickHandler.bind(this);
//     this._mouseEnter = this._mouseEnter.bind(this);
//     this._mouseLeave = this._mouseLeave.bind(this);
//   }
//   // Event handlers to modify state values
//   _mouseEnter(e) {
//     e.preventDefault();
//     if (this.state.mouseOver === false) {
//       this.setState({
//         mouseOver: true,
//       });
//     }
//   }
//   _mouseLeave(e) {
//     e.preventDefault();
//     if (this.state.mouseOver === true) {
//       this.setState({
//         mouseOver: false,
//       });
//     }
//   }
//   _clickHandler(e) {
//     e.preventDefault();
//     if (this.state.open === false) {
//       this.setState({
//         open: true,
//       });
//     } else {
//       this.setState({
//         open: false,
//       });
//     }
//   }

//   render() {
//     // Modify styles based on state values
//     let tileStyle = {};
//     let headerStyle = {};
//     let zoom = {};
//     // When tile clicked
//     if (this.state.open) {
//       tileStyle = {
//         width: "62vw",
//         height: "62vw",
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         margin: "0",
//         marginTop: "-31vw",
//         marginLeft: "-31vw",
//         boxShadow: "0 0 40px 5px rgba(0, 0, 0, 0.3)",
//         transform: "none",
//       };
//     } else {
//       tileStyle = {
//         width: "18vw",
//         height: "18vw",
//       };
//     }

//     return (
//       <div className="tile">
//         <img
//           onMouseEnter={this._mouseEnter}
//           onMouseLeave={this._mouseLeave}
//           onClick={this._clickHandler}
//           src={this.props.data.image}
//           alt={this.props.data.name}
//           style={tileStyle}
//         />
//       </div>
//     );
//   }
// }

export default ImagesGallery;
