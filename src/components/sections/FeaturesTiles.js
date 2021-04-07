import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
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
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Todo su esfuerzo da su fruto",
    paragraph: "Haber llegado hasta acá no es casualidad",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-02.svg")}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">34 materias</h4>
                  <p className="m-0 text-sm">
                    Para llegar a este día, 'Geometric Wolf' tuvo que enfrentar
                    muchos desafios. Desde los comienzos, con álgebra, análisis
                    o física, pasando por materias de programación, electrónica,
                    redes y mucho más. ¿No me crees?
                    <a
                      href="https://cs.uns.edu.ar/~devcs/carreras-de-grado/ing-en-computacion"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Acá esta el plan
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-04.svg")}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">7 AÑOS DE ESFUERZO</h4>
                  <p className="m-0 text-sm">
                    Estudio, trabajo, vicio, actividad física y mucha joda. ¿7
                    años? ¿Dónde firmo?
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-06.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">¿Proyectos?</h4>
                  <p className="m-0 mt-1 text-sm">Muchos. Acá te dejo tres:</p>
                  <div>
                    <a
                      href="https://www.youtube.com/watch?v=AuBwgJXerKc"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#47A5F9 " }}
                    >
                      -Going back home
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.youtube.com/watch?v=jU1Nd6McBcM"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#47A5F9 " }}
                    >
                      -Parilla automática
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.youtube.com/watch?v=Gon-pctdt1g"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#47A5F9 " }}
                    >
                      -Ingeniería de aplicaciones
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
