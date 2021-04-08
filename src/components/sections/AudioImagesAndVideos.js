import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import AudioPlayer from "../AudioPlayer";
import ImagesGallery from "../ImagesGallery";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import TwitchVideos from "../TwitchVideos";

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

  const twitchHeader = {
    title: "El que juega tranquilo es el lobo",
    paragraph:
      "CS GO tilt moments (Te movés de video con las flechitas negras)",
  };

  return (
    <>
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses} style={{ alignContent: "center" }}>
              {/* <AudioPlayer /> */}
            </div>
          </div>
        </div>
      </section>

      <ImagesGallery />

      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={twitchHeader} className="center-content" />
            <div className={splitClasses} style={{ alignContent: "center" }}>
              <TwitchVideos />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

AudioImagesAndVideos.propTypes = propTypes;
AudioImagesAndVideos.defaultProps = defaultProps;

export default AudioImagesAndVideos;
