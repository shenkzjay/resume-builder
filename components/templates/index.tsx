import DefaultTemplate from "./defaultTemplate";
import FresherTemplate from "./fresher-template";
import { ReactElement } from "react";

interface templateType {
  name: string;
  component: React.ReactElement;
}

export const templatesData: templateType[] = [
  {
    name: "Default Template",
    component: <DefaultTemplate />,
  },
  {
    name: "Fresher Template",
    component: <FresherTemplate />,
  },
  {
    name: "Fresher Template",
    component: <FresherTemplate />,
  },

  {
    name: "Fresher Template",
    component: <FresherTemplate />,
  },
  {
    name: "Default Template",
    component: <DefaultTemplate />,
  },
];
