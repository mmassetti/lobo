import React from "react";
import Countdown from "react-countdown";
import "./timer.scss";
import ReactTypingEffect from "react-typing-effect";

export default function Timer() {
  // Random component
  const Finished = () => (
    <span style={{ color: "blue" }}>¡FELICITACIONES INGENIERO!</span>
  );

  // Renderer callback
  const renderer = ({ total, days, hours, minutes, seconds }) => {
    if (total) {
      // Render a countdown
      return (
        <svg viewBox="0 0 125 35">
          <defs>
            <linearGradient
              id="rainbow"
              x1="0"
              x2="0"
              y1="0"
              y2="100%"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5B99" offset="0%" />
              <stop stopColor="#FF5447" offset="20%" />
              <stop stopColor="#FF7B21" offset="40%" />
              <stop stopColor="#EAFC37" offset="60%" />
              <stop stopColor="#4FCB6B" offset="80%" />
              <stop stopColor="#51F7FE" offset="100%" />
            </linearGradient>
          </defs>
          <text fill="url(#rainbow)">
            <tspan fontSize="25" x="0" y="30">
              {hours}:{minutes}:{seconds}
            </tspan>
          </text>
        </svg>
      );
    } else {
      // Render a finished state
      return <Finished />;
    }
  };

  return (
    <>
      <ReactTypingEffect
        text={["Felicitaciones", "Ingeniero Rios!"]}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={
                      i % 2 === 0 ? { color: "#F7F256" } : { color: "#5658DD" }
                    }
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      />
    </>
  );
}
