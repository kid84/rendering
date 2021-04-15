import { atom } from "recoil";

export const messageTitleAtom = atom<string>({
  key: "MESSAGE_TITLE",
  default: "",
});

export const messageBodyAtom = atom<string>({
  key: "MESSAGE_BODY",
  default: ""
});