import React from "react";
import ReactPlayer from "react-player";
import { items } from "components/SongsContainer";
import useActiveStore from "hooks/useActiveStore";

const MusicPlayer = () => {
  const currentSong = useActiveStore((state) => state.currentSong);

  if (currentSong === null) {
    return null;
  }

  return (
    <ReactPlayer
      url={items[currentSong].mp3}
      style={{ display: "none" }}
      playing={true}
    />
  );
};

export default MusicPlayer;
