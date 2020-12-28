import React, { useCallback, useRef } from "react";
import ReactPlayer from "react-player";
import { items } from "components/SongsContainer";
import useActiveStore from "hooks/useActiveStore";

const MusicPlayer = ({ goToIndex }: { goToIndex: (input: number) => void }) => {
  const currentSong = useActiveStore((state) => state.currentSong);
  const setCurrentSong = useActiveStore((state) => state.setCurrentSong);
  const player = useRef<any>();

  const handleEnded = useCallback(() => {
    if (currentSong === null) {
      return;
    }
    const newIndex = currentSong === items.length - 1 ? 0 : currentSong + 1;
    setCurrentSong(newIndex);
    goToIndex(newIndex);
  }, [currentSong, goToIndex, setCurrentSong]);

  if (currentSong === null) {
    return null;
  }

  return (
    <ReactPlayer
      ref={player}
      onEnded={handleEnded}
      url={items[currentSong].mp3}
      style={{ display: "none" }}
      playing={true}
    />
  );
};

export default MusicPlayer;
