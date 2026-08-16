import { create } from "zustand";

export const useMenuStore = create((set) => ({
    // state
    isMenuOpen : false,

    // Action
    openMenu: () => set({isMenuOpen: true}),

    closeMenu: () => set({ isMenuOpen: false}),

    toogleMenu: () => set((state) => ({
        isMenuOpen : !state.isMenuOpen
    })),
}))