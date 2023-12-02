import { create } from "zustand";

interface State {
    isSideMenuOpen: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
    toggleSideMenu: () => void;
}

export const useUiStore = create<State>()((set) => ({
    isSideMenuOpen: false,

    openSideMenu: () => set({ isSideMenuOpen: true }),

    closeSideMenu: () => set({ isSideMenuOpen: false }),

    toggleSideMenu: () =>
        set((state) => ({ isSideMenuOpen: !state.isSideMenuOpen })),
}));
