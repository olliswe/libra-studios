import create, { State } from "zustand";

interface ActiveStore extends State {
  active: number;
  currentSong: number | null;
  setActive: (active: number) => void;
  setCurrentSong: (currentSong: number | null) => void;
  reset: () => void;
}

const useActiveStore = create<ActiveStore>((set) => ({
  active: 0,
  currentSong: null,
  setActive: (active) => set({ active }),
  setCurrentSong: (currentSong) => set({ currentSong }),
  reset: () => set({ active: 0, currentSong: null }),
}));

export default useActiveStore;
