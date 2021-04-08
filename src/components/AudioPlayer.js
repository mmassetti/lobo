import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function AudioPlayer() {
  console.log("entorno: ", process.env.REACT_APP_SPOTIFY_TOKEN);
  return (
    <SpotifyPlayer
      token={process.env.REACT_APP_SPOTIFY_TOKEN}
      uris={["spotify:track:3YZUdbRzjjSn4i8ADgCObA"]}
      initialVolume={0.5}
      styles={{
        activeColor: "#fff",
        bgColor: "#333",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "#1cb954",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
      }}
    />
  );
}
