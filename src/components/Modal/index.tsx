import React, { ReactNode } from "react";
import styles from "./index.module.css";
interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div className={styles.container}>
      <div>{props.children}</div>
    </div>
  );
};

export default Modal;
