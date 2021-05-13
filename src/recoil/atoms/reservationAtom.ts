import { atom } from "recoil"

export interface ReservatinoAtomType {
    
}

export const reservatinoAtom = atom<ReservatinoAtomType>({
    key: "reservationAtom",
    default : []
})