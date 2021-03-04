import React, { useCallback } from "react";
import ReactPlayer from "react-player";
import { items } from "helpers/items";
import useActiveStore from "hooks/useActiveStore";

const MusicPlayer = ({ goToIndex }: { goToIndex: (input: number) => void }) => {
  const currentSong = useActiveStore((state) => state.currentSong);
  const setCurrentSong = useActiveStore((state) => state.setCurrentSong);
  const active = useActiveStore((state) => state.active);
  const setPlaying = useActiveStore((state) => state.setPlaying);
  const playing = useActiveStore((state) => state.playing);

  const handleEnded = useCallback(() => {
    if (currentSong === null) {
      return;
    }
    const newIndex = currentSong === items.length - 1 ? 0 : currentSong + 1;
    setCurrentSong(newIndex);
    goToIndex(newIndex);
  }, [currentSong, goToIndex, setCurrentSong]);

  return (
    <ReactPlayer
      onEnded={handleEnded}
      url={currentSong ? items[currentSong].mp3 : items[0].mp3}
      controls={true}
      playing={playing}
      onPlay={() => {
        if (!currentSong) {
          setCurrentSong(active);
        }
        setPlaying(true);
      }}
      onPause={() => setPlaying(false)}
      config={{ file: { forceAudio: true, attributes: { preload: "none" } } }}
      style={{
        zIndex: 1000,
      }}
      height={"30px"}
      width={"400px"}
    />
  );
};

export default MusicPlayer;
