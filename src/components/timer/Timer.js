import React from "react";
import Countdown from "react-countdown";
import "./timer.scss";

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
      {process.env.REACT_APP_LOBO_INGENIERO ? (
        <Countdown
          date={new Date("Fri Apr 09 2021 17:00:00 GMT-0300")}
          renderer={renderer}
        />
      ) : (
        <h2>Vista ya recibido</h2>
      )}
    </>
  );
}
