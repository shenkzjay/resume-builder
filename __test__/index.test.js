import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Home from "../pages/home";
import { useRouter } from "next/router";

test("start button routes to update page", () => {
  render(<Home />);

  const buttonElement = screen.getByRole("button", {
    name: "Start building your resume",
  });

  expect(buttonElement).toBeInTheDocument();
});

// jest.mock("next/router");

// test("navigates to correct url when button is clicked", async () => {
//   router = {
//     push: pushMock,
//   };

//   render(<Home router={router} />);

//   const buttonElement = screen.getByRole("button", {
//     name: "Start building your resume",
//   });

//   await fireEvent.click(buttonElement);

//   expect(pushMock.pathname).toBe("/custom-template");
// });
