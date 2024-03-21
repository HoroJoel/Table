import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import AccountTable from ".";

const mockAccounts = [{ id: 1, alias: "Elva", number: "12345", balance: 1000 }];

describe("AccountTable", () => {
  it("renders correctly with given data", () => {
    render(<AccountTable data={mockAccounts} />);

    expect(screen.getByText("Alias")).toBeInTheDocument();
    expect(screen.getByText("N° account")).toBeInTheDocument();
    expect(screen.getByText("Balance")).toBeInTheDocument();

    expect(screen.getByText(mockAccounts[0].alias)).toBeInTheDocument();
    expect(screen.getByText(mockAccounts[0].number)).toBeInTheDocument();
    expect(screen.getByText(mockAccounts[0].balance)).toBeInTheDocument();
  });

  it("opens edit modal on edit button click", async () => {
    render(<AccountTable data={mockAccounts} />);
    const user = userEvent.setup();

    const editButton = screen.getByRole("button", { name: "✏️" });
    await user.click(editButton);

    expect(screen.getByText("Edit Alias")).toBeInTheDocument();
  });

  it("updates account alias after save", async () => {
    render(<AccountTable data={mockAccounts} />);
    const user = userEvent.setup();

    const editButton = screen.getByRole("button", { name: "✏️" });
    await user.click(editButton);

    const aliasInput = screen.getByPlaceholderText("alias");
    await user.clear(aliasInput);
    await user.type(aliasInput, "Carlos");

    const saveButton = screen.getByText("Save");
    await user.click(saveButton);

    expect(screen.getByText("Carlos")).toBeInTheDocument();
    expect(screen.queryByText(mockAccounts[0].alias)).not.toBeInTheDocument();
  });

  it("delete account after confirm", async () => {
    render(<AccountTable data={mockAccounts} />);
    const user = userEvent.setup();

    const deleteButton = screen.getByRole("button", { name: "🗑️" });
    await user.click(deleteButton);

    const confirmButton = screen.getByText("Confirm");
    await user.click(confirmButton);

    expect(screen.queryByText(mockAccounts[0].alias)).not.toBeInTheDocument();
  });
});
