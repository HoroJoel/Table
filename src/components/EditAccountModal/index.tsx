import React, { useState } from "react";
import Modal from "../Modal";
import { Account } from "../../interfaces";
import Button from "../Button";
interface EditAccountModalProps {
  account: Account;
  onSave: (id: number, newAlias: string) => void;
  onClose: () => void;
}

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  account,
  onSave,
  onClose,
}) => {
  const [alias, setAlias] = useState(account.alias);

  const handleSave = (): void => {
    onSave(account.id, alias);
    onClose();
  };

  return (
    <Modal>
      <h2 className="text-lg font-semibold mb-4">Edit Alias</h2>
      <div className="mb-4">
        <input
          id="alias"
          type="text"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          className="bg-gray-800 text-white rounded-md p-2 "
        />
      </div>
      <div className="flex justify-end">
        <Button className="mr-2" onClick={handleSave}>
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </div>
    </Modal>
  );
};

export default EditAccountModal;
