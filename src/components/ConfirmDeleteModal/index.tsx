import React from "react";
import { Account } from "../../interfaces";
import Modal from "../Modal";
import Button from "../Button";

interface ConfirmDeleteModalProps {
  account: Account;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmDeleteModal = ({
  account,
  onConfirm,
  onClose,
}: ConfirmDeleteModalProps) => {
  return (
    <Modal>
      <h2 className="font-bold mb-4">
        {`Are you sure you want to delete  "${account.alias}"  account?`}
      </h2>
      <div className="flex justify-end">
        <Button className="mr-2" onClick={onConfirm}>
          Confirm
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
