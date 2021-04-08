import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function AudioPlayer() {
  return (
    <SpotifyPlayer
      token="BQDDqDirTp9M0dBIi98J_RlvcsPE1mezqfPoLnVWLjrSkbphwUoK1AeJz0dxbnma0CebYoo9_3lW35XqwQ-MkegTZjX5YQfksLVqseWhRE0qAmAcyvRJpVOpUCWJkG3XJ1z2GrVEH0lFJc1KnG0NPBqNw19xIAvY6YmIdVFbhkKlKggeEXCTxJDkzkvu"
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
