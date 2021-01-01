import create, { State } from "zustand";

interface ActiveStore extends State {
  active: number;
  currentSong: number | null;
  songProgress: number;
  songSeconds: number;
  songDuration: number;
  setActive: (active: number) => void;
  setCurrentSong: (currentSong: number | null) => void;
  setSongProgress: (songProgress: number) => void;
  setSongSeconds: (songSeconds: number) => void;
  setSongDuration: (songDuration: number) => void;

  reset: () => void;
}

const useActiveStore = create<ActiveStore>((set) => ({
  active: 0,
  songProgress: 0,
  songSeconds: 0,
  songDuration: 0,
  currentSong: null,
  setActive: (active) => set({ active }),
  setCurrentSong: (currentSong) => set({ currentSong }),
  reset: () => set({ active: 0, currentSong: null, songProgress: 0 }),
  setSongProgress: (songProgress: number) => set({ songProgress }),
  setSongSeconds: (songSeconds: number) => set({ songSeconds }),
  setSongDuration: (songDuration: number) => set({ songDuration }),
}));

export default useActiveStore;
