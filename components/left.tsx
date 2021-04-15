import { FC } from "react";
import { useLeftContainerViewModel } from "../hooks/viewModel";

export const Left:FC = () => {
  const {
    body,
    setBody
  } = useLeftContainerViewModel();
  return (
    <div style={{ width: "50%" }}>
      <h2>LEFT</h2>
      <textarea
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <BodyRender>
        {body}
      </BodyRender>
    </div>
  );
};

const BodyRender:FC = ({ children }) => (
  <span>{children}</span>
);