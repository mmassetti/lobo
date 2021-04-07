import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "TESTIMONIOS",
    paragraph: "Porque al lobo lo quierooo, lo vengo a alentaaar 🎵",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    —lobizón... a la distancia me pone muy contento que hayas
                    podido terminar una etapa muy importante de tu vida,
                    recibirte y ahora empezar una vida nueva con muchos
                    proyectos. <br /> <br />
                    Demás esta decir que te quiero un montón y sos un groso en
                    todo lo que haces y te propones (menos en el cs)... te digo
                    estas palabras con lágrimas de alegría en los ojos.
                    <br />
                    <span style={{ fontWeight: "bolder", color: "white" }}>
                      {" "}
                      FUA LA RE VIVIA SCUBI
                    </span>
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Lauti
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">Parka</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Querido Ingeniero Geometric: me alegra muchísimo que
                    después de tanto esfuerzo hayas podido concretar este logro
                    que va a significar el inicio de muchas locuras insanas. Si
                    mis cálculos no fallan, y sin ánimos de mufar, creo que la
                    vida después de este título te va a ser más EZ que matar al
                    Profeta en CS GO. <br /> <br />
                    Felicitaciones brodie y muchos exitos para lo que viene.
                    Espero seguir puteando iniciados hasta la eternidad junto a
                    vos. <br />
                    <span style={{ fontWeight: "bolder", color: "white" }}>
                      Te quiero mucho. JC.
                    </span>
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Juan
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Juxy</a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Amigo Matías: me alegra un montón que hayas cumplido tu
                    objetivo. Espero que tengas muchos éxitos en tus proyectos,
                    ya sabes que si necesitas un web dev me mandas un inbox.{" "}
                    <br /> <br /> Te quiero bro. Felicitaciones y .. <br />{" "}
                    <span style={{ fontWeight: "bolder", color: "white" }}>
                      Se vienen cositas pronto{" "}
                    </span>
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Lucas{" "}
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0"> Km21 </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
