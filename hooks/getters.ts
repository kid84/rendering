import { useRecoilValue } from "recoil";
import { messageBodyAtom, messageTitleAtom } from "./store";

export const useMessageTitleValue = () => {
  const value = useRecoilValue(messageTitleAtom);

  return value;
}

export const useMessageBodyValue = () => {
  const value = useRecoilValue(messageBodyAtom);

  return value;
};