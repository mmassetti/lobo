import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// import horizontalCss from "react-animated-slider/build/horizontal.css";
import horizontalCss from "../utils/customAnimatedSlider.css";
import { Player } from "video-react";

const content = [
  {
    title: "1) SE TE SUBIÓ - SHORT VERSIÓN",
    src:
      "https://res.cloudinary.com/sebanoe/video/upload/v1617857519/MatiRios/videos/clip1_i6fiss.mp4",
  },
  {
    title: "2) NOOOOOOOOOOOOOOOOOOOOO",
    src:
      "https://res.cloudinary.com/sebanoe/video/upload/v1617857490/MatiRios/videos/clip2_jskpgi.mp4",
  },
  {
    title: "3) TIC TIC TIC TIC",
    src:
      "https://res.cloudinary.com/sebanoe/video/upload/v1617857516/MatiRios/videos/clip3_xp2pry.mp4",
  },
  {
    title: "4) El flamers",
    src:
      "https://res.cloudinary.com/sebanoe/video/upload/v1617857503/MatiRios/videos/clip4_vyxtki.mp4",
  },
  {
    title: "5) Cuando ves a la tóxica en el boliche",
    src:
      "https://res.cloudinary.com/sebanoe/video/upload/v1617857472/MatiRios/videos/clip5_x0fmof.mp4",
  },
  {
    title:
      "6) Cuando ya viste a la toxi en la pista y la cruzas en el carrito a la salida",
    src:
      "https://res.cloudinary.com/sebanoe/video/upload/v1617857469/MatiRios/videos/clip6_yp388h.mp4",
  },
  {
    title: "7) ay ay ay ay dale con la lata en la mano0o0o",
    src:
      "https://res.cloudinary.com/sebanoe/video/upload/v1617857518/MatiRios/videos/clip7_tndzgq.mp4",
  },
];

function TwitchVideos() {
  return (
    <Slider classNames={horizontalCss} direction="horizontal">
      {content.map((item, index) => (
        <div key={index}>
          <div className="center">
            <h3 style={{ textAlign: "center", color: "#F7F256" }}>
              {item.title}
            </h3>
            <Player playsInline src={item.src} />
          </div>
        </div>
      ))}
    </Slider>
  );
}
export default TwitchVideos;
