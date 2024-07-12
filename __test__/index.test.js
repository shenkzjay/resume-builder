import {
  render,
  screen,
  fireEvent,
  queryAllByTestId,
} from "@testing-library/react";

import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Home from "../pages/home";
import SelectTemplate from "@/pages/custom-template";
import { templatesData } from "@/components/templates";
import { useRouter } from "next/router";
import { Provider } from "react-redux";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "",
      // ... whatever else you you call on `router`
    };
  },
}));

it("onclick start button it takes us to next page where the template component exist", () => {
  render(
    <Provider>
      <SelectTemplate />
    </Provider>
  );

  const buttonElement = screen.getByRole("button", {
    name: "Start building your resume",
  });

  userEvent.click(buttonElement);

  const template_components = queryAllByTestId("templates");

  // expect(template_name).toBeInTheDocument();

  expect(template_components).toHaveLength(templatesData.length);

  expect(buttonElement).toBeInTheDocument();
});

//test if the array returns all template component and are displayed on the custom template page

//test that the states are updated on the template component when the entries are made
