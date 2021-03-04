import create, { State } from "zustand";

interface ActiveStore extends State {
  active: number;
  currentSong: number | null;
  playing: boolean;
  setActive: (active: number) => void;
  setCurrentSong: (currentSong: number | null) => void;
  setPlaying: (playing: boolean) => void;
  reset: () => void;
}

const useActiveStore = create<ActiveStore>((set) => ({
  active: 0,
  currentSong: null,
  playing: false,
  setActive: (active) => set({ active }),
  setCurrentSong: (currentSong) => set({ currentSong }),
  setPlaying: (playing) => set({ playing }),
  reset: () => set({ active: 0, currentSong: null }),
}));

export default useActiveStore;
