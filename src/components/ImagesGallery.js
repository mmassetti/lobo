import React from "react";
import "./ImagesGallery.scss";
import Gallery from "react-grid-gallery";
import Center from "react-center";

const IMAGES = [
  {
    id: 1,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847806/MatiRios/1_gm1swi.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847806/MatiRios/1_gm1swi.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 2,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/2_q7bkiy.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/2_q7bkiy.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },

  {
    id: 3,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/3_ttbhp6.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/3_ttbhp6.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 4,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847796/MatiRios/4_p5raty.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847796/MatiRios/4_p5raty.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },

  {
    id: 5,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/5_qxf8k3.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/5_qxf8k3.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 6,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847794/MatiRios/6_tg6mpp.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847794/MatiRios/6_tg6mpp.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 7,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/7_fwuazp.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/7_fwuazp.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 8,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/8_kqh4ni.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/8_kqh4ni.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 9,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/9_xdopnf.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617847795/MatiRios/9_xdopnf.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 10,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849480/MatiRios/10_gkxh2t.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849480/MatiRios/10_gkxh2t.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 11,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/11_q6efri.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/11_q6efri.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 12,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/12_y3ph6o.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/12_y3ph6o.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 13,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849482/MatiRios/13_dokvtk.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849482/MatiRios/13_dokvtk.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 14,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/14_btjoar.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/14_btjoar.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 15,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849482/MatiRios/15_mw5vks.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849482/MatiRios/15_mw5vks.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 16,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/16_rnndbr.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/16_rnndbr.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 17,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/17_j1ksqm.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/17_j1ksqm.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 18,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849482/MatiRios/18_zqvaqt.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849482/MatiRios/18_zqvaqt.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 19,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849482/MatiRios/19_vidsul.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849482/MatiRios/19_vidsul.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 20,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/20_zt1mfr.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/20_zt1mfr.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 21,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849484/MatiRios/22_easkrz.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849484/MatiRios/22_easkrz.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 22,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849484/MatiRios/23_dcfve8.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849484/MatiRios/23_dcfve8.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 23,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849484/MatiRios/24_r2piqw.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849484/MatiRios/24_r2piqw.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 24,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849485/MatiRios/25_ojyyzp.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849485/MatiRios/25_ojyyzp.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 25,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/21_fldwqv.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849483/MatiRios/21_fldwqv.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 26,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/26_kbql7r.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/26_kbql7r.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 27,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/27_nobh5e.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/27_nobh5e.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 28,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/28_rwkiml.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617849481/MatiRios/28_rwkiml.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 29,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/29_vwkrpw.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/29_vwkrpw.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 30,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/30_u2c5zk.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/30_u2c5zk.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 31,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/31_feqsub.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/31_feqsub.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 32,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851731/MatiRios/32_jnnc8o.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851731/MatiRios/32_jnnc8o.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 33,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/33_wgvtkg.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/33_wgvtkg.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 34,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851734/MatiRios/34_ekqd46.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851734/MatiRios/34_ekqd46.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 35,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/35_phlrbk.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/35_phlrbk.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 36,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/36_go7bfy.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/36_go7bfy.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 37,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/37_v16weq.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/37_v16weq.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 38,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851733/MatiRios/38_gauvbg.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851733/MatiRios/38_gauvbg.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 39,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851734/MatiRios/39_gcrti2.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851734/MatiRios/39_gcrti2.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 40,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/40_dbldrx.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617851732/MatiRios/40_dbldrx.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 41,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617854610/MatiRios/41_yoeu6d.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617854610/MatiRios/41_yoeu6d.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 42,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617854616/MatiRios/42_cl8dge.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617854616/MatiRios/42_cl8dge.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 43,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855273/MatiRios/43_iexgkv.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855273/MatiRios/43_iexgkv.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 44,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855273/MatiRios/44_q0em2f.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855273/MatiRios/44_q0em2f.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 45,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/45_dcembb.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/45_dcembb.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 46,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/46_hpdsfw.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/46_hpdsfw.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 47,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/47_bnjajs.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/47_bnjajs.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 48,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/48_i4xxdj.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/48_i4xxdj.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 49,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/49_qs4hws.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/49_qs4hws.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 50,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/50_lfdhcm.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/50_lfdhcm.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 51,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/51_y8niz2.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/51_y8niz2.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 52,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/52_pd1oby.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/52_pd1oby.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 53,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/53_j8ht3g.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/53_j8ht3g.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 54,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/54_nmr4da.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855967/MatiRios/54_nmr4da.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 55,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/55_y4p9tz.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617855966/MatiRios/55_y4p9tz.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 56,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617856274/MatiRios/56_kwxcad.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617856274/MatiRios/56_kwxcad.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 57,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/57_h3zdcu.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/57_h3zdcu.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 58,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/58_giwdz5.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/58_giwdz5.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 59,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911168/MatiRios/59_i7jiej.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911168/MatiRios/59_i7jiej.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 60,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/60_v1j70y.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/60_v1j70y.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 61,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/61_bmtxs4.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/61_bmtxs4.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 62,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/62_tbribp.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/62_tbribp.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 63,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911168/MatiRios/63_htswtw.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911168/MatiRios/63_htswtw.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 64,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911168/MatiRios/64_wdgrp3.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911168/MatiRios/64_wdgrp3.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 65,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911170/MatiRios/65_pyvzoa.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911170/MatiRios/65_pyvzoa.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 66,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/66_ey5gh4.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/66_ey5gh4.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 67,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/67_wvyslu.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/67_wvyslu.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 68,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/68_pvoxqr.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/68_pvoxqr.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 69,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/69_auwjy3.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/69_auwjy3.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 70,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/70_iiynil.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/70_iiynil.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 71,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/71_vfajhb.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911165/MatiRios/71_vfajhb.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 72,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/72_bodhvy.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/72_bodhvy.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 73,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/73_kbhq3m.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/73_kbhq3m.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 74,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/74_wrnj8d.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/74_wrnj8d.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 75,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/75_axlznl.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/75_axlznl.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 76,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/76_ffx89g.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911167/MatiRios/76_ffx89g.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
  {
    id: 77,
    src:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/77_qlynlu.jpg",
    thumbnail:
      "https://res.cloudinary.com/sebanoe/image/upload/v1617911166/MatiRios/77_qlynlu.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 174,
  },
];

function ImagesGallery() {
  return (
    <Center>
      <div style={{ marginLeft: "8rem", marginRight: "8rem" }}>
        <p style={{ margin: "0px", textAlign: "center" }}>
          <span role="img" aria-label="fotos">
            📷
          </span>
        </p>
        <Gallery images={IMAGES} />
      </div>
    </Center>
  );
}

export default ImagesGallery;
