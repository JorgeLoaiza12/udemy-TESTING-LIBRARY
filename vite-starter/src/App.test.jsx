import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Heading flow", () => {
  test("App contains correct heading", () => {
    render(<App />);
    const headingElement = screen.getByText(/learn react/i);
    const headingElement1 = screen.getByRole("heading", { name: /learn 2/i });
    expect(headingElement).toBeInTheDocument(); // type of assertion -> matcher
    expect(headingElement1).toBeInTheDocument(); // type of assertion -> matcher
  });
});

describe("button flow", () => {
  test("button starts with the correct color", () => {
    render(<App />);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("red");
  });

  test("button starts with the correct text", () => {
    const { container } = render(<App />);
    const button = screen.getByRole("button", { name: /blue/i });

    expect(button).toHaveClass("red");
  });

  test("button has correct color after click", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /blue/i });

    expect(button).toHaveClass("red");

    fireEvent.click(button);

    expect(button).toHaveTextContent(/red/i);
    expect(button).toHaveClass("blue");
  });
});

describe("checkbox flow", () => {
  test("should when click checkbox the button be disabled", () => {
    render(<App />);
    const checkboxElement = screen.getByRole("checkbox", {
      name: /disable button/i,
    });
    const button = screen.getByRole("button", { name: /blue/i });

    expect(checkboxElement).toBeEnabled();
    expect(checkboxElement).not.toBeChecked();

    // Click checkbox to disable button
    fireEvent.click(checkboxElement);
    expect(button).toBeDisabled();
    expect(button).toHaveClass("gray");

    // Click checkbox again to re-enable button
    fireEvent.click(checkboxElement);
    expect(button).toBeEnabled();
    expect(button).not.toHaveClass("blue");

  });
});

// Assertions
// expect(element.textContent).toBe("Hello")
// expect(elementsArray).toHaveLength(7)

// DOM-based matchers
// toBeVisible() or toBeChecked()

/*
React Testing Library:
- Renders components into simulated DOM
- Makes simulated DOM available for assertions and interactions

Needs a test runner:
- Find tests, runs them, make assertions

*/
