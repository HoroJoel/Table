import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AccountRow from ".";

const mockAccount = {
  alias: "Elva",
  number: "123456789",
  balance: "1000",
};

describe("AccountRow component", () => {
  it("renders account information correctly", async () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();

    render(
      <AccountRow account={mockAccount} onEdit={onEdit} onDelete={onDelete} />
    );

    expect(screen.getByText(mockAccount.alias)).toBeInTheDocument();
    expect(screen.getByText(mockAccount.number)).toBeInTheDocument();
    expect(screen.getByText(mockAccount.balance)).toBeInTheDocument();

    const editButton = screen.getByRole("button", { name: "✏️" });
    const deleteButton = screen.getByRole("button", { name: "🗑️" });
    await userEvent.click(editButton);
    expect(onEdit).toHaveBeenCalled();

    await userEvent.click(deleteButton);
    expect(onDelete).toHaveBeenCalled();
  });
});
