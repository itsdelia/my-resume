import { create } from 'zustand'

interface AppState {
  progress: number
  setProgress: (by: number) => void
}


export const useAppStore = create<AppState>((set) => ({
  progress: 0,
  setProgress: (by) => set(() => ({ progress: by })),
}))
