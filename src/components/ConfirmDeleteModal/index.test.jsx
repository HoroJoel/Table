import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConfirmDeleteModal from ".";

describe("Confirm Delete Account", () => {
  it("should display the modal with the account information and react to buttons", async () => {
    const mockAccount = {
      id: 1,
      alias: "Ana",
      number: "123456",
      balance: "1000",
    };
    const onConfirm = vi.fn();
    const onClose = vi.fn();

    render(
      <ConfirmDeleteModal
        account={mockAccount}
        onConfirm={onConfirm}
        onClose={onClose}
      />
    );

    expect(
      screen.getByText(
        `Are you sure you want to delete "${mockAccount.alias}" account?`
      )
    ).toBeInTheDocument();

    const confirmButton = screen.getByRole("button", { name: "Confirm" });
    const cancelButton = screen.getByRole("button", { name: "Cancel" });

    await userEvent.click(confirmButton);
    expect(onConfirm).toHaveBeenCalled();

    await userEvent.click(cancelButton);
    expect(onClose).toHaveBeenCalled();
  });
});
