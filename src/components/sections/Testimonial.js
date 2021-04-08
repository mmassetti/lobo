import React from "react";
import "./Testimonial";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import BlurHeader from "./partials/BlurHeader";
let Blur = require("react-blur").default;

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

  const blurHeader = {
    title: "Contenido bloqueado",
    paragraph:
      "¡Esta sección se va a desbloquear cuando termine la presentación de Google Meet!",
  };

  const sectionHeader = {
    title: "TESTIMONIOS",
    paragraph: "Porque al lobo lo quierooo, lo vengo a alentaaar 🎵",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          {/* Cambiar esto entre false y true para mostrar o esconder */}
          {false ? (
            <>
              <BlurHeader data={blurHeader} className="center-content " />
              <div>
                <Blur
                  img="https://res.cloudinary.com/sebanoe/image/upload/v1617826718/blur-image_zposgm.png"
                  blurRadius={25}
                  enableStyles
                  style={{ height: "800px", position: "relative" }}
                >
                  Bloqueado
                </Blur>
              </div>
            </>
          ) : (
            <>
              {" "}
              <SectionHeader data={sectionHeader} className="center-content" />
              <div className={tilesClasses}>
                {/* Testimonios 1,2 y 3 */}

                <div
                  className="tiles-item reveal-from-right"
                  data-reveal-delay="200"
                >
                  <div className="tiles-item-inner">
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">
                        — Lobizón... a la distancia me pone muy contento que
                        hayas podido terminar una etapa muy importante de tu
                        vida, recibirte y ahora empezar una vida nueva con
                        muchos proyectos. <br /> <br />
                        Demás esta decir que te quiero un montón y sos un groso
                        en todo lo que haces y te propones (menos en el cs)...
                        te digo estas palabras con lágrimas de alegría en los
                        ojos.
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
                        después de tanto esfuerzo hayas podido concretar este
                        logro que va a significar el inicio de muchas locuras
                        insanas. Si mis cálculos no fallan, y sin ánimos de
                        mufar, creo que la vida después de este título te va a
                        ser más EZ que matar al Profeta en CS GO. <br /> <br />
                        Felicitaciones brodie y muchos exitos para lo que viene.
                        Espero seguir puteando iniciados hasta la eternidad
                        junto a vos. <br />
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
                      <span className="testimonial-item-link">Juxy</span>
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
                        — Amigo Matías: me alegra un montón que hayas cumplido
                        tu objetivo. Espero que tengas muchos éxitos en tus
                        proyectos, ya sabes que si necesitas un web dev me
                        mandas un inbox. <br /> <br /> Te quiero bro.
                        Felicitaciones y .. <br />{" "}
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
                      <span className="testimonial-item-link">Km21</span>
                    </div>
                  </div>
                </div>

                {/* Testimonios 4,5 y 6 */}

                <div
                  className="tiles-item reveal-from-right"
                  data-reveal-delay="200"
                >
                  <div className="tiles-item-inner">
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">
                        — Felicidades Mati! <br />
                        <br /> Amigo, más que merecido después de tantos años de
                        estudio, y compartir mates, fifas y yugis..ahora no hay
                        excusa para ponerse entrenar y quedar bien toro jaja
                        <br />
                        <br />
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          Te quiero wolf
                        </span>
                      </p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        Maurito
                      </span>
                      <span className="text-color-low"> / </span>
                      <span className="testimonial-item-link">ElSátiro</span>
                    </div>
                  </div>
                </div>

                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">
                        — Después de tanto putear en física 2 al fin lo logramos
                        amigo, quedan muchos recuerdos con esa materia del orto,
                        como cuando tuvimos que caer después de la fiesta del
                        cecom a un labo a las 10 de la matina, cuando tuviste
                        los huevos de decirle a la michelina en pleno examen que
                        el problema 3 era una cagada, o como cuando le pusimos
                        micho tito en el proyector y lo leyó. Que vieja del
                        orte. <br />
                        <br />
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          Gracias por cuidar y hacer tan famosas mis carpetas.
                          Un abrazo grande
                        </span>
                      </p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        Ilan
                      </span>
                      <span className="text-color-low"> / </span>
                      <span className="testimonial-item-link">Hunter</span>
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
                        — Te juro que parece que fue ayer cuando estaba en el
                        patio del Reino con Santi Bruno, él me mira con un
                        Gancia en una mano, un Melbour en la otra y me dice
                        “nosotros dos vamos a ser los primeros en recibirnos,
                        Bola” (Santi de abogado y yo de licenciado en
                        composición, profe de teatro, contrabajista, locutor
                        nacional o alguna mierda de esas). A mí se me llenaron
                        los ojos de lagrimas y asentí con la cabeza (del pedo
                        que tenía no podía hablar bien). <br /> <br />
                        Mirá como nos ganaste. Espero que encares con la misma
                        garra que encaraste la carrera, encares esta parte de la
                        vida que va a estar protagonizada por la actividad más
                        chota del mundo: LABURAR. <br /> <br />
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          Te quiero mucho bonito.
                        </span>
                      </p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        Ema
                      </span>
                    </div>
                  </div>
                </div>

                {/* Testimonios 7,8 y 9 */}

                <div
                  className="tiles-item reveal-from-right"
                  data-reveal-delay="200"
                >
                  <div className="tiles-item-inner">
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">
                        — Matu soy poco inspiradito, solamente decirte que estoy
                        muy contento por esto que lograste, te deseo lo mejor
                        para la nueva etapa que empezas , que sos el capitán del
                        team de inicia2. <br /> <br />
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          Te quiero amigo y no te tiltees con los jefes y los
                          clientes.
                        </span>
                      </p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        Santi
                      </span>
                      <span className="text-color-low"> / </span>
                      <span className="testimonial-item-link">Calígula</span>
                    </div>
                  </div>
                </div>

                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">
                        — Amigo, qué decirte después de tanto tiempo, un tipazo
                        por dónde se lo mire, un tóxico jugando al Counter , lo
                        opuesto a un goleador, un toro en el gimnasio y un GRAN
                        amigo, que ahora se convierte oficialmente en un GRAN
                        ingeniero. <br /> <br />
                        Lo mejor para esta nueva etapa que seguro vamos a
                        compartir juntos. <br /> <br />
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          Un abrazo grande , te quiero mucho.
                        </span>
                      </p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        Eze
                      </span>
                      <span className="text-color-low"> / </span>
                      <span className="testimonial-item-link">El profeta</span>
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
                        — Querido y entrañable amigo Mati! <br /> <br /> Desde
                        que nos conocimos en el quincho de JV un 25 de
                        Septiembre y a partir de que nos hicimos amigos en esas
                        noches de Teke en Ohiggin's, forjamos una amistad
                        riquísima, a veces con reproches por algún huesito
                        perdido, pero siempre con amor bbcito! <br /> <br /> Mis
                        felicitaciones a este esfuerzo enorme que hiciste, y por
                        las ganas que le pones a todo seguramente lo que venga
                        va a ser mejor. Disfruta de trabajar de lo que te gusta
                        que es lo importante. <br /> <br />{" "}
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          Te quiero mucho amigo{" "}
                        </span>{" "}
                        <br /> <br /> PD: perdón por no estar de cuerpo presente
                        pero sabes que a 550 km hay un linfocito que te abraza
                        igual.
                      </p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        Gusty
                      </span>
                      <span className="text-color-low"> / </span>
                      <span className="testimonial-item-link">Teddy</span>
                    </div>
                  </div>
                </div>

                {/* Testimonios 10,11 y 12 */}

                <div
                  className="tiles-item reveal-from-right"
                  data-reveal-delay="200"
                >
                  <div className="tiles-item-inner">
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">
                        — Mati, querido amigo, llegado semejante momento,
                        dificil encontrar las palabras justas. <br /> <br /> El
                        viernes es un momento bisagra, das paso a una nueva
                        etapa con cambios muy importantes para vos. Me alegra
                        mucho haber compartido con vos el antes, el durante de
                        este proceso y sobre todo poder acompañarte en el
                        comienzo de tu etapa INGENIERIL. <br /> <br /> Sos el
                        primero del Sexteto y sin dudas un orgullo. Sin mas
                        preambulo, GEOMETRIC WOLF, ANGELICAL TANK EATER, y sobre
                        todo INGENIERETE...Lo mejor en lo que viene. <br />{" "}
                        <br />
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          Te quiero!
                        </span>
                      </p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        Fran
                      </span>
                      <span className="text-color-low"> / </span>
                      <span className="testimonial-item-link">Franzu</span>
                    </div>
                  </div>
                </div>

                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">
                        — Amigo Felícitaciones !!! <br /> <br /> Vos más que
                        nadie te mereces esto y mucho más. Todo el esfuerzo
                        valió la pena !!! Sabes que te amo con todo mi corazón y
                        a pesar de que a veces colguemos siempre estamos el uno
                        para el otro... y espero que sea así por Muchos años
                        más. Se vienen muchas cosas nuevas y mejores!! <br />{" "}
                        <br />
                        Felicitaciones de nuevo, sos ingeniero en computación
                        !!! <br />
                        <br />
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          {" "}
                          Te amo
                        </span>
                      </p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        Yami
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
                        — Felicitaciones lobito ingeniero, merecido por esas
                        tardes de chipa y fifa, bueno espero que ahora te
                        instales en una casa y abandones las mudanzas, abrazo
                        amigo pd: lo tuyo no es el cs.{" "}
                        <span role="img" aria-label="carita1">
                          {" "}
                          🤪
                        </span>
                        <br /> <br />
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          Te quieroo
                        </span>{" "}
                      </p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        Santi
                      </span>
                      <span className="text-color-low"> / </span>
                      <span className="testimonial-item-link">
                        Soldano De 8
                      </span>
                    </div>
                  </div>
                </div>

                {/* Testimonios 13,14,15 */}
                <div
                  className="tiles-item reveal-from-right"
                  data-reveal-delay="200"
                >
                  <div className="tiles-item-inner">
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">
                        — Felicitaciones Arnold Schwarzenegger por este gran
                        logro y te deseo el mejor de los éxitos en esta nueva
                        etapa en busca de los verdolagas. <br /> <br />
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          {" "}
                          Espero que en la noche te rompas tomando VENENAAA con
                          los pibes
                        </span>{" "}
                        <br /> <br />
                        <span
                          style={{ fontWeight: "bolder", color: "#F7F256" }}
                        >
                          Update: Nos cagó el covid. Ya habrá oportunidad!
                        </span>
                      </p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        Chipi{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">
                        — Parabéns lobo por esta conquista! <br /> <br />
                        Felicitaciones amigo por este logroooo. Sos un crack y
                        te va a ir genial en lo que te propongas. <br /> <br />{" "}
                        Felicitaciones ingeniero! <br /> <br /> Te quiero y...{" "}
                        <br /> <br />
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          ¡VALEW GALERA! ¿Yo locurié?
                        </span>
                      </p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        Masa
                      </span>
                      <span className="text-color-low"> / </span>
                      <span className="testimonial-item-link">Cleffa</span>
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
                        — Hermano! Al fin! <br /> <br />
                        Después de tanto esfuerzo vas a poder decir que SOS
                        INGENIERO! Vos sabes que te deseo lo mejor y espero que
                        podamos juntar mas historias LOCAS para contar. <br />{" "}
                        <br />
                        OMAAAAAR, ALGO ANDA MAAAAAL
                        <br /> <br />
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          {" "}
                          Te quiero mucho mi brodi ❤️
                        </span>{" "}
                      </p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        Salva
                      </span>
                      <span className="text-color-low"> / </span>
                      <span className="testimonial-item-link">SC</span>
                    </div>
                  </div>
                </div>

                {/* Testimonio 16               */}
                <div
                  className="tiles-item reveal-from-right"
                  data-reveal-delay="200"
                >
                  <div className="tiles-item-inner">
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">
                        — QUERIDO BLODEL QUE LA UNI ME DIO. <br /> <br />{" "}
                        FELICITACIONES POR ESTE FINAL DE ETAPA, Y QUE SEA EL
                        COMIENZO DE OTRA CON MÁS RISAS AÚN.
                        <br /> <br />
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          TE QUIERO{" "}
                        </span>
                      </p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        Facu
                      </span>
                      <span className="text-color-low"> / </span>
                      <span className="testimonial-item-link">Fam</span>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
