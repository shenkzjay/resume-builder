import DefaultTemplate from "./defaultTemplate";
import FresherTemplate from "./fresher-template";
import IndoTemplate from "./indo-template";

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
    component: <IndoTemplate />,
  },
];
