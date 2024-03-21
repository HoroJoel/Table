import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./";

describe("Component Button", () => {
  it("should render the component correctly", () => {
    render(<Button>Hello World</Button>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
