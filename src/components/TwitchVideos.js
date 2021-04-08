import React from "react";
import ReactPlayer from "react-player";
import classNames from "classnames";
import { SectionSplitProps } from "../utils/SectionProps";
import SectionHeader from "../components/sections/partials/SectionHeader";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const TwitchVideos = ({
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

  const twitchHeader = {
    title: "El que juega tranquilo es el lobo",
    paragraph: "CS GO tilt moments",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={twitchHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Clip #1
                </div>
                <h3 className="mt-0 mb-12"> SE TE SUBIÓ - SHORT VERSIÓN</h3>
                <p className="m-0">No te la agarres con Calígula hdp</p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <ReactPlayer
                  controls={true}
                  url="https://res.cloudinary.com/sebanoe/video/upload/v1617857519/MatiRios/videos/clip1_i6fiss.mp4"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <ReactPlayer
                  controls={true}
                  url="https://res.cloudinary.com/sebanoe/video/upload/v1617857490/MatiRios/videos/clip2_jskpgi.mp4"
                />
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  clip #2
                </div>
                <h3 className="mt-0 mb-12">NOOOOOOOOOOOOOOOOOO</h3>
                <p className="m-0">-¿Dónde? </p>
                <p className="m-0">-En calle, había uno...</p>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Clip #3
                </div>
                <h3 className="mt-0 mb-12"> TIC TIC TIC TIC</h3>
                <p className="m-0">SIGUEN LAS RISAS</p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <ReactPlayer
                  controls={true}
                  url="https://res.cloudinary.com/sebanoe/video/upload/v1617857516/MatiRios/videos/clip3_xp2pry.mp4"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <ReactPlayer
                  controls={true}
                  url="https://res.cloudinary.com/sebanoe/video/upload/v1617857503/MatiRios/videos/clip4_vyxtki.mp4"
                />
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  clip #4
                </div>
                <h3 className="mt-0 mb-12">El flamers</h3>
                <p className="m-0">-Te estoy diciendoooo, estúpidooo</p>
                <p className="m-0">(tiraba esa jasdjasdjasd)</p>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Clip #5
                </div>
                <h3 className="mt-0 mb-12">
                  Cuando ves a la tóxica en el boliche{" "}
                </h3>
                <p className="m-0">Me hizo acordar al Tano Pasman</p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <ReactPlayer
                  controls={true}
                  url="https://res.cloudinary.com/sebanoe/video/upload/v1617857472/MatiRios/videos/clip5_x0fmof.mp4"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <ReactPlayer
                  controls={true}
                  url="https://res.cloudinary.com/sebanoe/video/upload/v1617857469/MatiRios/videos/clip6_yp388h.mp4"
                />
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  clip #6
                </div>
                <h3 className="mt-0 mb-12">
                  Cuando ya viste a la toxi en la pista y la cruzas en el
                  carrito a la salida
                </h3>
                <p className="m-0">Este pibe está loco</p>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Clip #7
                </div>
                <h3 className="mt-0 mb-12">
                  ay ay ay ay dale con la lata en la mano0o0o
                </h3>
                <p className="m-0">Ligó el profeta</p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <ReactPlayer
                  controls={true}
                  url="https://res.cloudinary.com/sebanoe/video/upload/v1617857518/MatiRios/videos/clip7_tndzgq.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TwitchVideos.propTypes = propTypes;
TwitchVideos.defaultProps = defaultProps;

export default TwitchVideos;
