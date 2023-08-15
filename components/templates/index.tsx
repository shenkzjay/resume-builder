import DefaultTemplate from "./defaultTemplate";
import FresherTemplate from "./fresher-template";
import IndoTemplate from "./indo-template";

interface templateType {
  name: string;
  component: React.ReactElement;
  image: string;
}

export const templatesData: templateType[] = [
  {
    name: "Default Template",
    component: <DefaultTemplate />,
    image: "/A4.jpg",
  },
  {
    name: "Fresher Template",
    component: <FresherTemplate />,
    image: "/A4.jpg",
  },
  {
    name: "Indo Template",
    component: <IndoTemplate />,
    image: "/A4.jpg",
  },
];
