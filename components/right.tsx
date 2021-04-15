import { FC } from "react";
import { useRightContainerViewModel } from "../hooks/viewModel";

export const Right:FC = () => {
  const {
    setBody,
  } = useRightContainerViewModel();

  return (
    <div style={{ width: "50%" }}>
      <h2>Right</h2>
      <button
        onClick={() => setBody("強制的にBody変えます")}
      >
        強制的にBody変えます
      </button>
    </div>
  );
};