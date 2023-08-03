import { RootState } from "@/states/store";
import React, { useRef, useState, ChangeEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  updateWorkExperience,
  addWorkExperience,
  deleteWorkExperience,
  search,
} from "@/states/reducers/slice/textUpdateSlice";
import { workExp as InputItem } from "@/states/actions-types";
import { useRouter } from "next/router";
import { templatesData } from "@/components/templates";
import SunEditorFile from "@/components/ui components/markdown-editor/sun-editor";
import DropDown from "@/components/ui components/dropdown";
import { ModalCard } from "@/components/ui components/modal";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch, IconTrashX } from "@tabler/icons-react";
import UseSuggestions from "@/hooks/useSuggestions";
import { IconPlus } from "@tabler/icons-react";
import TiptapEditor from "@/components/ui components/markdown-editor";
import { Checkboxelement } from "@/components/ui components/checkbox";
import Link from "next/link";
import { BackButton, NextButton, AddButtons } from "@/components/buttons";
import localforage from "localforage";
import { ActionTypes } from "@/states/actions-types";

const WorkExperience = () => {
  //init router
  console.log("render ");

  // const { data, isLoading, error } = UseSuggestions();
  // console.log("wx", data);

  const [opened, { open, close }] = useDisclosure(false);

  const router = useRouter();

  //init
  const dispatch = useDispatch();

  //retrieve selected template
  const selectedTemplate = Number(router.query.template);

  const TemplateComponent = templatesData[selectedTemplate]?.component ?? (
    <div>No template selected</div>
  );

  //retrieve updated state from store
  const updateWorkExp = useSelector(
    (state: RootState) => state.updateTextName.workExperience
  );

  // const updateEditor = useSelector(
  //   (state: RootState) => state.updateTextName.editorExperience
  // );

  // const searchSuggestions = useSelector(
  //   (state: RootState) => state.updateTextName.searchSuggestions
  // );

  //function to update text input change
  const handleInputChange = (
    index: number,
    field: keyof InputItem,
    value: string | boolean
  ) => {
    const updatedInput = { ...updateWorkExp[index], [field]: value };
    dispatch(updateWorkExperience({ index, data: updatedInput }));
  };

  //function to add a new work experience object
  const handleAddWorkExp = () => {
    dispatch(
      addWorkExperience({
        job_title: "",
        company_name: "",
        country: "",
        description: "",
        start_month: "",
        start_year: "",
        end_month: "",
        end_year: "",
        state: "",
        checkboxstatus: false,
      })
    );
  };

  const handleDeleteWorkExperience = (index: number) => {
    dispatch(deleteWorkExperience(index));
  };

  // const handleSearchInput = (content: string) => {
  //   dispatch(search(content));
  // };

  // const handleClickSuggestion = (index: number) => {
  //   console.log(index);

  //   close();
  // };

  function createMonths() {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  }

  const monthsInYear = createMonths();

  const monthsArray = monthsInYear.map((month) => {
    return { value: month.toLowerCase(), label: month };
  });

  function countToArray() {
    let num = 2023;
    let resultArray = [];

    for (let i = num; i >= 1990; i--) {
      resultArray.push(i.toString());
    }

    return resultArray;
  }

  const result = countToArray();

  const yearArray = result.map((year) => {
    return { value: year, label: year };
  });

  const handleCheckboxChange = (index: number, checked: boolean) => {
    handleInputChange(index, "checkboxstatus", checked);
  };

  // useEffect(() => {
  //   const getWorkExpereince = async () => {
  //     const storedWorkExp = await localforage.getItem(
  //       ActionTypes.ADD_WORK_EXPERIENCE
  //     );

  //     if (storedWorkExp) {
  //       dispatch(updateWorkExperience(storedWorkExp));
  //     }
  //   };

  //   getWorkExpereince();
  // }, []);

  const handleNext = async () => {
    await localforage.setItem(ActionTypes.ADD_WORK_EXPERIENCE, updateWorkExp);
    router.push({
      pathname: "/custom-template/education",
      query: { template: selectedTemplate },
    });
  };

  return (
    <section className="">
      <div className="container mx-auto ">
        <div className="my-10 ">
          <p className="font-semibold text-4xl mx-6 md:mx-0">
            Snapshot of Your Accomplishments
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-20 mb-48 md:mb-20 mx-6 md:mx-0">
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              {updateWorkExp.map((item, index) => (
                <div
                  className="flex mb-6 rounded justify-between p-4 border"
                  key={index}
                >
                  <details className="w-full ">
                    <summary className="relative">
                      <span>Add details of work experience</span>
                      <button
                        onClick={() => handleDeleteWorkExperience(index)}
                        className="absolute top-0 bottom-0 right-0"
                      >
                        <IconTrashX color="red" size={20} />
                      </button>
                    </summary>
                    <div className="flex flex-col space-y-4 mt-6">
                      <input
                        type="text"
                        placeholder="Company name"
                        value={item.company_name}
                        className="border px-4 py-3"
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "company_name",
                            e.target.value
                          )
                        }
                      />
                      <input
                        type="text"
                        placeholder="Country"
                        value={item.country}
                        className="border px-4 py-3"
                        onChange={(e) =>
                          handleInputChange(index, "country", e.target.value)
                        }
                      />
                      <input
                        type="text"
                        value={item.job_title}
                        placeholder="Job title"
                        className="border px-4 py-3"
                        onChange={(e) =>
                          handleInputChange(index, "job_title", e.target.value)
                        }
                      />
                      <div className="flex gap-10">
                        <DropDown
                          placeholder="Start month"
                          data={monthsArray}
                          onChange={(content) =>
                            handleInputChange(index, "start_month", content)
                          }
                          value={item.start_month}
                        />
                        <DropDown
                          placeholder="Start year"
                          data={yearArray}
                          onChange={(content) =>
                            handleInputChange(index, "start_year", content)
                          }
                          value={item.start_year}
                        />
                      </div>

                      <div className="flex gap-10">
                        <DropDown
                          placeholder="End month"
                          data={monthsArray}
                          disabled={item.checkboxstatus}
                          onChange={(content) =>
                            handleInputChange(index, "end_month", content)
                          }
                          value={item.end_month}
                        />
                        <DropDown
                          placeholder="End year"
                          data={yearArray}
                          disabled={item.checkboxstatus}
                          onChange={(content) =>
                            handleInputChange(index, "end_year", content)
                          }
                          value={item.end_year}
                        />
                      </div>
                      <div>
                        <Checkboxelement
                          label="Currently working there?"
                          checked={item.checkboxstatus}
                          onChange={(checked) =>
                            handleCheckboxChange(index, checked)
                          }
                        />
                      </div>

                      {/* <SunEditorFile
                      placeholder="Type your work experience here"
                      value={updateEditor}
                      onChange={(content) =>
                        handleInputChange(index, "description", content)
                      }
                    /> */}
                      <TiptapEditor
                        onUpdate={(content) =>
                          handleInputChange(index, "description", content)
                        }
                        content={item.description}
                      />
                      {/* <button
                        onClick={() => open()}
                        className="px-4 py-3 border border-cyan-600 text-cyan-600 rounded mb-6"
                      >
                        ✨ AI suggestions
                      </button> */}
                    </div>
                  </details>
                </div>
              ))}
              <div>
                <AddButtons
                  name="Add work experience"
                  onClick={handleAddWorkExp}
                />
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <BackButton name="Back" link="javascript:history.back()" />

              <NextButton name="Continue" onClick={handleNext} />
            </div>
          </div>

          <section className="md:w-1/2 hidden md:flex max-h-[70vh] sticky top-24">
            <div className="h-[70vh] border-2 rounded border-cyan-600">
              {TemplateComponent}
            </div>
          </section>
        </div>
      </div>
      {/* <div className="relative">
        <ModalCard opened={opened} close={close} open={open}>
          <input
            type="search"
            value={searchSuggestions}
            onChange={(event) => handleSearchInput(event.target.value)}
            className="px-3 py-4 outline outline-slate-200 focus:outline-slate-800 focus:outline-2 pl-8 w-full rounded"
          />
          <IconSearch
            className="absolute top-[70px] left-6"
            size={20}
            color="#e2e2e2"
          />
          <div>
            {data &&
              data.map((item: any, index: number) => (
                <div
                  role="button"
                  onClick={() => handleClickSuggestion(index)}
                  key={index}
                  className="flex mb-6 mt-6 bg-slate-100 justify-between item-center gap-6 p-4 rounded"
                >
                  <div className="flex items-center rounded-full">
                    <span className="bg-teal-300 p-2 rounded-full">
                      <IconPlus size={16} color="white" />
                    </span>
                  </div>
                  <div className="space-y-4 text-[12px]">{item.content}</div>
                </div>
              ))}
          </div>
        </ModalCard>
      </div> */}
      <div className="h-24 md:hidden flex fixed bottom-0 z-50 w-full justify-center items-center rounded-t-[20px] bg-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.20)]">
        <button
          className="py-3 px-4 bg-cyan-600  text-white font-semibold rounded "
          // onClick={() => open()}
        >
          Preview template
        </button>
      </div>
    </section>
  );
};

export default WorkExperience;
