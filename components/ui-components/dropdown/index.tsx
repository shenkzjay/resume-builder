import { Select, rem } from "@mantine/core";
import { useState } from "react";
import { updateWorkExperience } from "@/states/reducers/slice/textUpdateSlice";

interface dropdown {
  value: string;
  label: string;
}

interface DropDownProps {
  data: dropdown[];
  placeholder: string;
  disabled?: boolean;
  onChange: (content: string) => void;
  value: string;
}

const DropDown: React.FC<DropDownProps> = ({
  data,
  placeholder,
  disabled,
  onChange,
  value,
}) => {
  console.log(value);

  const handleDropdownSelect = (content: string) => {
    onChange(content);
  };

  return (
    <section>
      <Select
        placeholder={placeholder}
        data={data}
        disabled={disabled}
        value={value}
        onChange={handleDropdownSelect}
        styles={(theme) => ({
          input: {
            paddingTop: rem(21),
            paddingBottom: rem(21),
            borderColor: theme.colors.gray[3],
            fontSize: rem(16),
            "&:focus": {
              borderColor: theme.colors.gray[8],
              borderWidth: rem(2),
            },
          },
          item: {
            "&[data-selected]": {
              "&, &:hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.teal[9]
                    : theme.colors.teal[1],
                color:
                  theme.colorScheme === "dark"
                    ? theme.white
                    : theme.colors.teal[9],
              },
            },

            // applies styles to hovered item (with mouse or keyboard)
            "&[data-hovered]": {},
          },
        })}
      />
    </section>
  );
};

export default DropDown;
