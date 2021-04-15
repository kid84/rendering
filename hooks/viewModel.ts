import { useMessageBodyValue, useMessageTitleValue } from "./getters";
import { useMessageBodySetter, useMessageTitleSetter } from "./setters";

export const useLeftContainerViewModel = () => {
  const body = useMessageBodyValue();
  const title = useMessageTitleValue();
  const setBody = useMessageBodySetter();
  const setTitle = useMessageTitleSetter();

  return {
    body,
    setBody,
    title,
    setTitle
  };
};

export const useRightContainerViewModel = () => {
  const body = useMessageBodyValue();
  const setBody = useMessageBodySetter();

  return {
    body,
    setBody,
  };
};