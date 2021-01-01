import create, { State } from "zustand";

interface ActiveStore extends State {
  active: number;
  currentSong: number | null;
  songProgress: number;
  setActive: (active: number) => void;
  setCurrentSong: (currentSong: number | null) => void;
  setSongProgress: (songProgress: number) => void;

  reset: () => void;
}

const useActiveStore = create<ActiveStore>((set) => ({
  active: 0,
  songProgress: 0,
  currentSong: null,
  setActive: (active) => set({ active }),
  setCurrentSong: (currentSong) => set({ currentSong }),
  reset: () => set({ active: 0, currentSong: null, songProgress: 0 }),
  setSongProgress: (songProgress: number) => set({ songProgress }),
}));

export default useActiveStore;
