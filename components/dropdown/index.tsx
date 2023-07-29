import { Select, rem } from "@mantine/core";

const DropDown = () => {
  return (
    <section>
      <Select
        placeholder="Pick one"
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
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
