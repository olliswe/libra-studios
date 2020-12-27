import create, { State } from "zustand";

interface ActiveStore extends State {
  active: number;
  currentSong: number | null;
  setActive: (active: number) => void;
  setCurrentSong: (currentSong: number) => void;
}

const useActiveStore = create<ActiveStore>((set) => ({
  active: 0,
  currentSong: null,
  setActive: (active) => set({ active }),
  setCurrentSong: (currentSong) => set({ currentSong }),
}));

export default useActiveStore;
