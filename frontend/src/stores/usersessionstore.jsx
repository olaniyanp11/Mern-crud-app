import { create } from "zustand"

export const usersessionstore = create((set) => ({
    isLoggedIn: false,
    setLoggedIn: (loggedIn) => set({ isloggedIn: loggedIn }),
}))
