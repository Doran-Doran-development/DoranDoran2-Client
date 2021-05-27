import { selector } from "recoil"
import { reservatinoAtom } from "../atoms/reservationAtom";

export const reservationSelector = selector({
    key: "reservation/get",
    get: async ({ get }) => { },
    set: ({ set }, newReservation) => {
        set(reservatinoAtom, newReservation);
    }
})  