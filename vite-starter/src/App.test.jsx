import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn react/i);
  const headingElement1 = screen.getByRole("heading", { name: /learn 2/i });
  expect(headingElement).toBeInTheDocument(); // type of assertion -> matcher
  expect(headingElement1).toBeInTheDocument(); // type of assertion -> matcher
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