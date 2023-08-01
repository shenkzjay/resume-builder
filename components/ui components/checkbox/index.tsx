import { Checkbox } from "@mantine/core";
import { ChangeEvent } from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkboxelement: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };
  return (
    <Checkbox
      label={label}
      color="cyan"
      checked={checked}
      onChange={handleCheckbox}
    />
  );
};
