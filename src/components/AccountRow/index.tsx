import React from "react";
import { Account } from "../../interfaces";
import Button from "../Button";

interface AccountRowProps {
  account: Account;
  onEdit: () => void;
  onDelete: () => void;
}

const AccountRow: React.FC<AccountRowProps> = ({
  account,
  onEdit,
  onDelete,
}) => {
  return (
    <tr>
      <td className="border border-slate-700 capitalize p-2 text-xs  md:text-lg	">
        {account.alias}
      </td>
      <td className="border border-slate-700 capitalize p-2 text-xs  md:text-lg	">
        {account.number}
      </td>
      <td className="border border-slate-700 capitalize p-2 text-xs  md:text-lg	">
        {account.balance}
      </td>
      <td className="border border-slate-700">
        <Button className="text-xs  md:text-sm" onClick={onEdit}>
          ✏️
        </Button>
        <Button className="text-xs  md:text-sm ml-2" onClick={onDelete}>
          🗑️
        </Button>
      </td>
    </tr>
  );
};

export default AccountRow;
