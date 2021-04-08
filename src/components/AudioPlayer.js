import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function AudioPlayer() {
  return (
    <SpotifyPlayer
      token="BQD_PxSXW7mevphR8V6xEG366kQxgcY7305pW0c4mto8ibkNfyNcPV2cEutl2dv_gmiwzZbmmQSk3Flzv5iYjT4nQBnmhaWl11hLZDb_sfjrgd5C_rhnPf6nmVPaU5uKcKCikcW0Q-xb8NMQeGUdxrBZiKrCOwVCTwk3LIYD8Xjflbcbda4bgUdP3JbY"
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
