import { create } from 'zustand'

export const useStore = create((set, get) => ({
    openDrawer: false,

    showDrawer: () => {
        set((state) => ({ openDrawer: state.openDrawer = true }))
    },
    closeDrawer: () => {
        set((state) => ({ openDrawer: state.openDrawer = false }))
    }
}))