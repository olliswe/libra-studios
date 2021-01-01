import React, { useCallback } from "react";
import ReactPlayer from "react-player";
import { items } from "helpers/items";
import useActiveStore from "hooks/useActiveStore";

const MusicPlayer = ({
  goToIndex,
  playerRef,
}: {
  goToIndex: (input: number) => void;
  playerRef: any;
}) => {
  const currentSong = useActiveStore((state) => state.currentSong);
  const setCurrentSong = useActiveStore((state) => state.setCurrentSong);
  const setSongProgress = useActiveStore((state) => state.setSongProgress);

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
      ref={playerRef}
      onEnded={handleEnded}
      url={items[currentSong].mp3}
      style={{ display: "none" }}
      playing={true}
      onProgress={({ played }) => {
        setSongProgress(played);
      }}
    />
  );
};

export default MusicPlayer;
