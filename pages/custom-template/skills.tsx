import React from "react";
import { useRouter } from "next/router";
import { templatesData } from "@/components/templates";
import { MultiSelect, rem } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/states/store";
import {
  updateSkills,
  deleteSkill,
} from "@/states/reducers/slice/textUpdateSlice";
import Link from "next/link";
import { NextButton, BackButton } from "@/components/buttons";

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
    input: {
      paddingTop: rem(8),
      paddingBottom: rem(8),
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
        <div className="mt-10 mb-6 space-y-4 ">
          <p className="font-semibold text-4xl">Lets talk skills</p>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col w-1/2 justify-between ">
            <div className="">
              <MultiSelect
                classNames={{
                  searchInput: classes.outline,
                  input: classes.input,
                }}
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
            <div className="flex justify-between mt-4">
              <BackButton name="Back" link="javascript:history.back()" />

              <NextButton
                name="Continue"
                onClick={() =>
                  router.push({
                    pathname: "/custom-template/work-exp",
                    query: { template: selectedTemplate },
                  })
                }
              />
            </div>
          </div>
          <div className="w-1/2 h-[70vh]">{TemplateComponent}</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
