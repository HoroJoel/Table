import React, { useState } from "react";
import AccountRow from "../AccountRow";
import EditAccountModal from "../EditAccountModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal";
import { Account } from "../../interfaces";

const AccountTable = ({ data }: { data: Account[] }) => {
  const [accounts, setAccounts] = useState<Account[]>(data);
  const [editingAccount, setEditingAccount] = useState<Account | null>(null);
  const [deletingAccount, setDeletingAccount] = useState<Account | null>(null);

  const updateAccountAlias = (id: number, newAlias: string): void => {
    setAccounts(
      accounts.map((account) =>
        account.id === id ? { ...account, alias: newAlias } : account
      )
    );
    setEditingAccount(null);
  };

  const deleteAccount = (id: number): void => {
    setAccounts(accounts.filter((account) => account.id !== id));
    setDeletingAccount(null);
  };

  return (
    <div>
      <table className="border-separate border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 text-sm">Alias</th>
            <th className="border border-slate-600 text-sm">N° account</th>
            <th className="border border-slate-600 text-sm">Balance</th>
            <th className="border border-slate-600 text-sm min-w-36">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <AccountRow
              key={account.id}
              account={account}
              onEdit={() => setEditingAccount(account)}
              onDelete={() => setDeletingAccount(account)}
            />
          ))}
        </tbody>
      </table>
      {editingAccount && (
        <EditAccountModal
          account={editingAccount}
          onSave={updateAccountAlias}
          onClose={() => setEditingAccount(null)}
        />
      )}
      {deletingAccount && (
        <ConfirmDeleteModal
          account={deletingAccount}
          onClose={() => setDeletingAccount(null)}
          onConfirm={() => deleteAccount(deletingAccount.id)}
        />
      )}
    </div>
  );
};

export default AccountTable;
