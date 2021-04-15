import { useSetRecoilState } from "recoil";
import { messageBodyAtom, messageTitleAtom } from "./store";

export const useMessageTitleSetter = () => {
  const setter = useSetRecoilState(messageTitleAtom);

  return (title:string) => {
    setter(title);
  }
};

export const useMessageBodySetter = () => {
  const setter = useSetRecoilState(messageBodyAtom);

  return (body:string) => {
    setter(body);
  }
};