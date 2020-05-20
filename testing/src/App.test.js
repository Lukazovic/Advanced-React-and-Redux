import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders 'Hi there!'", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hi there!/i);
  expect(linkElement).toBeInTheDocument();
});
