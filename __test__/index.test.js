import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import Home from "../pages/home";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("start button routes to update page", () => {
  render(<Home />);

  useRouter.mockReturnValue({
    pathname: "/",
  });

  const buttonElement = screen.getByRole("button", {
    name: "Start building your resume",
  });

  expect(buttonElement).toBeInTheDocument();
});
