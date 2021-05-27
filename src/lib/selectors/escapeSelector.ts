import { selector } from "recoil"
import { escapeAtom } from "../atoms/escapeAtom"

export const escapeSelector = selector({
    key: "escape/get",
    get: async ({ get }) => { },
    set: ({ set }, newEscape) => {
        set(escapeAtom, newEscape);
    }
})  