import { atom } from "recoil";

export interface EscapeAtomType {
    
}

export const escapeAtom = atom<EscapeAtomType>({
    key: "escapeAtom",
    default: []
});