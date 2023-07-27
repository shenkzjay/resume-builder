import React from "react";
import { useRouter } from "next/router";
import { templatesData } from "@/components/templates";
import { MultiSelect } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/states/store";
import {
  updateSkills,
  deleteSkill,
} from "@/states/reducers/slice/textUpdateSlice";

const Skills = () => {
  //init router
  const router = useRouter();

  //init dispatch
  const dispatch = useDispatch();

  //convert index string to number
  const selectedTemplate = Number(router.query.template);

  //pass the index to templateData to find the template component and save to the variable
  const TemplateComponent = templatesData[selectedTemplate]?.component ?? (
    <div>No template selected</div>
  );

  //useSelector to retrieve skills from state
  const addSkills = useSelector(
    (state: RootState) => state.updateTextName.skills
  );

  console.log(addSkills);

  //adding style to component using mantine style api
  const useStyles = createStyles(() => ({
    outline: {
      "&:focus": {
        borderColor: "transparent",
        outline: 0,
      },
    },
  }));

  const handleMultiSelectChange = (value: string[]) => {
    const removedKill = addSkills.find((skill) => !value.includes(skill.value));
    if (removedKill) {
      dispatch(deleteSkill(removedKill));
    }
  };

  const selectedValues = addSkills.map((item) => item.value);

  const { classes } = useStyles();

  return (
    <section>
      <div className="mx-auto container">
        <div className="my-10 ">
          <p className="font-bold text-4xl">Skillset</p>
          <p>Type to add your skill set</p>
        </div>
        <div className="flex gap-20">
          <div className="w-1/2">
            <MultiSelect
              classNames={{ searchInput: classes.outline }}
              label=""
              data={addSkills}
              placeholder="Add your skills here"
              searchable
              creatable
              clearable
              transitionProps={{
                duration: 150,
                transition: "pop-top-left",
                timingFunction: "ease",
              }}
              aria-label="Add skilll input field"
              getCreateLabel={(query) => `+ Add "${query}"`}
              value={selectedValues}
              onChange={(values) => handleMultiSelectChange(values)}
              onCreate={(query) => {
                const item = { value: query, label: query };
                dispatch(updateSkills(item));
                return item;
              }}
            />
          </div>
          <div className="w-1/2 h-[70vh]">{TemplateComponent}</div>
        </div>
        <div className="space-x-4">
          <button> ←Back</button>
          <button
            onClick={() =>
              router.push({
                pathname: "/custom-template/work-exp",
                query: { template: selectedTemplate },
              })
            }
          >
            Next→{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
