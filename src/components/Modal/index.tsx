import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          padding: "20px",
          borderRadius: "5px",
          width: "500px",
          maxWidth: "100%",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
