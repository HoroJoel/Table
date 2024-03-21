import React from "react";
import styles from "./index.module.css";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
