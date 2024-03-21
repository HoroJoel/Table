import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditAccountModal from ".";

describe("EditAccountModal", () => {
  const mockAccount = {
    id: 1,
    alias: "Elias",
    number: "123456",
    balance: "1000",
  };
  const onSave = vi.fn();
  const onClose = vi.fn();
  const user = userEvent.setup();
  it("should display the modal with the editable account alias and respond to input changes", async () => {
    render(
      <EditAccountModal
        account={mockAccount}
        onSave={onSave}
        onClose={onClose}
      />
    );

    const aliasInput = screen.getByPlaceholderText("alias");
    expect(aliasInput.value).toBe(mockAccount.alias);

    await user.clear(aliasInput);

    const newAlias = "Joe A.V.";
    await user.type(aliasInput, newAlias);
    expect(aliasInput.value).toBe(newAlias);

    const saveButton = screen.getByRole("button", { name: "Save" });
    await userEvent.click(saveButton);
    expect(onSave).toHaveBeenCalledWith(mockAccount.id, newAlias);
  });
});
