import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import AudioPlayer from "../AudioPlayer";
import ImagesGallery from "../ImagesGallery";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import TwitchVideos from "../TwitchVideos";
import Center from "react-center";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const AudioImagesAndVideos = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Risas y locuras",
    paragraph: "Poné play y mirá estas locuras",
  };

  return (
    <>
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses} style={{ alignContent: "center" }}>
              <AudioPlayer />
            </div>
          </div>
        </div>
      </section>

      <ImagesGallery />

      <Center>
        <div style={{ marginTop: "4rem" }}>
          <img
            src="https://res.cloudinary.com/sebanoe/image/upload/v1617901806/MatiRios/terecibis_dyjrph.png"
            alt="lobo"
          ></img>
        </div>
      </Center>

      <TwitchVideos />
    </>
  );
};

AudioImagesAndVideos.propTypes = propTypes;
AudioImagesAndVideos.defaultProps = defaultProps;

export default AudioImagesAndVideos;
