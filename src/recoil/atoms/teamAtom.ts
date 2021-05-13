import { atom } from "recoil";

export interface TeamAtomType {

}

export const teamAtom = atom<TeamAtomType>({
    key: "teamAtom",
    default : []
})