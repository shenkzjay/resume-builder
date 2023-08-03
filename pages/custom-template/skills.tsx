import React, { useEffect } from "react";
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
import { ModalCard } from "@/components/ui components/modal";
import { useDisclosure } from "@mantine/hooks";
import localforage from "localforage";
import { ActionTypes } from "@/states/actions-types";

const Skills = () => {
  //init router
  const router = useRouter();

  const [opened, { open, close }] = useDisclosure(false);

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
      paddingTop: rem(4),
      paddingBottom: rem(4),
    },
  }));

  const handleMultiSelectChange = (value: string[]) => {
    const removedKill = addSkills.find((skill) => !value.includes(skill.value));
    if (removedKill) {
      dispatch(deleteSkill(removedKill));
    }
  };

  const handleNext = async () => {
    router.push({
      pathname: "/custom-template/work-exp",
      query: { template: selectedTemplate },
    });
  };

  const selectedValues = addSkills.map((item) => item.value);

  const { classes } = useStyles();

  return (
    <section>
      <div className="mx-auto container">
        <div className="mt-10 mb-6 space-y-4 ">
          <p className="font-semibold text-4xl mx-6 md:mx-0">
            Lets talk skills
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-20">
          <div className="flex flex-col md:w-1/2 justify-between mx-6 md:mx-0">
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

              <NextButton name="Continue" onClick={handleNext} />
            </div>
          </div>
          <div className="md:w-1/2 hidden md:flex h-[70vh] border-2 rounded border-cyan-600">
            {TemplateComponent}
          </div>
        </div>
        <div className="h-20 md:hidden flex fixed bottom-0 z-50 w-full justify-center items-center rounded-t-[20px] bg-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.20)]">
          <button
            className="py-3 px-4 bg-cyan-600  text-white font-semibold rounded "
            onClick={() => open()}
          >
            Preview template
          </button>
          <ModalCard opened={opened} close={close} open={open}>
            <div className="h-[70vh] ">{TemplateComponent}</div>
          </ModalCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
