import { selector } from "recoil"
import { userAtom } from "../atoms/userAtom";

export const userSelector = selector({
    key: "user/get",
    get: async ({ get }) => { },
    set: ({ set }, newUser) => {
        set(userAtom, newUser);
    }
})  