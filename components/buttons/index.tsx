import Link from "next/link";

import { IconArrowLeft, IconPlus } from "@tabler/icons-react";
import { IconArrowRight } from "@tabler/icons-react";

interface NextButtonProps {
  name: string;
  onClick: () => void;
}

interface BackButtonProps {
  name: string;
  link: string;
}

interface AddButtonsProps {
  name: string;
  onClick: () => void;
}

export const NextButton: React.FC<NextButtonProps> = ({ onClick, name }) => {
  return (
    <div
      className="flex item-center justify-center mt-4  bg-primaryButton rounded px-4 py-3"
      onClick={onClick}
      role="button"
    >
      <button className="flex items-center gap-2 font-semibold  text-white">
        {name}
        {/* <IconArrowRight size={18} /> */}
      </button>
    </div>
  );
};

export const BackButton: React.FC<BackButtonProps> = ({ name, link }) => {
  return (
    <div
      className=" flex item-center justify-center mt-4 border-2 border-primaryButton rounded px-4 py-3"
      role="button"
    >
      <button className="flex items-center gap-2">
        {" "}
        {/* <IconArrowLeft size={18} color="blue" /> */}
        <Link href={link} className="font-semibold text-primaryButton">
          {name}
        </Link>
      </button>
    </div>
  );
};

export const AddButtons: React.FC<AddButtonsProps> = ({ onClick, name }) => {
  return (
    <div className="flex justify-between">
      <button
        onClick={onClick}
        className=" text-primaryButton rounded mb-6 font-semibold"
      >
        {name}
      </button>
    </div>
  );
};

export const InverseAddButtons: React.FC<AddButtonsProps> = ({
  onClick,
  name,
}) => {
  return (
    <div className="flex justify-between">
      <button
        onClick={onClick}
        className="px-4 py-3 border-2 border-cyan-600 text-cyan-600 bg-white rounded mb-6 font-semibold"
      >
        {name}
      </button>
    </div>
  );
};

export const ButtonsTypes = () => {
  return {
    NextButton,
    BackButton,
  };
};
