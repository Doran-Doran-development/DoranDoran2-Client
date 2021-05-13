import { selector } from "recoil"
import { teamAtom } from "../atoms/teamAtom";

export const teamSelector = selector({
    key: "team/get",
    get: async ({ get }) => { },
    set: ({ set }, newTeam) => {
        set(teamAtom, newTeam);
    }
})  