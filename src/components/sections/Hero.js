import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import Timer from "../timer/Timer.js";
import lobo from "../../assets/images/lobo.jpg";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
              style={{
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
              }}
            >
              ¡Se recibe
              <span className="text-color-primary"> Mati Rios </span>!
            </h1>
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
              style={{ color: "#F7F256" }}
            >
              ¡Se recibió
              <span className="text-color-primary"> Mati Rios </span>
              <span style={{ color: "#F7F256" }}>!</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Este viernes 9 de abril Argentina{" "}
                <span
                  style={{
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                  }}
                >
                  tendrá
                </span>{" "}
                <span style={{ color: "#F7F256" }}>tiene </span>un nuevo{" "}
                <span style={{ fontWeight: "bolder" }}>
                  Ingeniero en Computación
                </span>{" "}
                🎓🐺
              </p>

              <img src={lobo} alt="logo" style={{ height: "16rem" }} />
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <Timer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
