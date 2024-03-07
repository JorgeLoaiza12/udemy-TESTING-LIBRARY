import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("button starts with the correct color", () => {
  render(<Button />);
  const button = screen.getByRole("button");

  expect(button).toHaveClass("red");
});
test("button starts with the correct text", () => {
  const { container } = render(<Button />);
  logRoles(container);
  const button = screen.getByRole("button", { name: /blue/i });

  expect(button).toHaveClass("red");
});
test("button has correct color after click", () => {
  render(<Button />);
  const button = screen.getByRole("button", { name: /blue/i });

  expect(button).toHaveClass("red");

  fireEvent.click(button);

  expect(button).toHaveTextContent(/red/i)
  expect(button).toHaveClass("blue");
  
});
test("button has correct text after click", () => {});
