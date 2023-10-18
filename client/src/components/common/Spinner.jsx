import React from "react";
import { HashLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <HashLoader size={100} loading={true} color="#4066ff" />
    </div>
  );
}
