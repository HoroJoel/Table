import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Modal from ".";

describe("Modal", () => {
  it("should render its children", () => {
    const testMessage = "Test Content";
    render(
      <Modal>
        <div>{testMessage}</div>
      </Modal>
    );

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
