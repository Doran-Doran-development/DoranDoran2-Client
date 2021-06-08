import { atom } from "recoil"

export interface UserAtomType {
    id: string;
    email: string;
    name: string;
    role: number;
}

export const userAtom = atom<UserAtomType>({
    key: "userInfo",
    default: {
        id: "",
        email: "",
        name: "",
        role : 1
    }
})