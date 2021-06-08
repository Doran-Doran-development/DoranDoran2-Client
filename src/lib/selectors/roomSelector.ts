import { selector } from "recoil"
import { roomAtom } from "../atoms/roomAtom";

export const roomSelector = selector({
    key: "room/get",
    get: async ({ get }) => { },
    set: ({ set }, newRoom) => {
        set(roomAtom, newRoom);
    }
})  