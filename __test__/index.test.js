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


//test if the array returns all template component and are displayed on the custom template page

//test that the states are updated on the template component when the entries are made


