import { atom } from "recoil"

export interface RoomAtomType {

}

export const roomAtom = atom<RoomAtomType>({
    key: "roomAtom",
    default : []
})