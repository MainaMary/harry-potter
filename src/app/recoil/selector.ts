import { selector } from "recoil";
import { responseAtom } from "../atom";
export const responseFromAPI = selector({
  key: 'responseFromAPI', 
  get: ({get}) => {
    const response = get(responseAtom);

    return response
  },
});