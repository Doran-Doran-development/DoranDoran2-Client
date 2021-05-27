import { atom } from "recoil"

export interface UserAtomType {

}

export const userAtom = atom<UserAtomType>({
    key: "",
    default : []
})