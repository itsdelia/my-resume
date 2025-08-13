import { create } from 'zustand'

interface AppState {
  activeView: string;
  setActiveView: (view: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeView: 'home',
  setActiveView: (view) => set(() => ({ activeView: view })),
}))
