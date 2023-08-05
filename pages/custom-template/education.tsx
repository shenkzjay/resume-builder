import { RootState } from "@/states/store";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  updateEducationHistory,
  addEducationHistory,
  deleteEducationHistory,
} from "@/states/reducers/slice/textUpdateSlice";
import { eduHistory as InputItem } from "@/states/actions-types";
import { useRouter } from "next/router";
import { templatesData } from "@/components/templates";
import { IconTrashX } from "@tabler/icons-react";
import DropDown from "@/components/ui components/dropdown";
import Link from "next/link";
import { BackButton, NextButton, AddButtons } from "@/components/buttons";
import { ModalCard } from "@/components/ui components/modal";

import { useDisclosure } from "@mantine/hooks";

const EducationHistory = () => {
  //init router
  const router = useRouter();

  const [opened, { open, close }] = useDisclosure(false);
  //init
  const dispatch = useDispatch();

  //retrieve selected template
  const selectedTemplate = Number(router.query.template);

  const TemplateComponent = templatesData[selectedTemplate]?.component ?? (
    <div>No template selected</div>
  );

  //retrieve updated state from store
  const updateEduHistory = useSelector(
    (state: RootState) => state.updateTextName.educationHistory
  );

  //function to update text input change
  const handleInputChange = (
    index: number,
    field: keyof InputItem,
    value: string
  ) => {
    const updatedInput = { ...updateEduHistory[index], [field]: value };
    dispatch(updateEducationHistory({ index, data: updatedInput }));
  };

  //function to add a new work experience object
  const handleAddEducationHistory = () => {
    dispatch(
      addEducationHistory({
        school_name: "",
        school_location: "",
        degree_program: "",
        field_of_study: "",
        graduation_month: "",
        graduation_year: "",
      })
    );
  };

  const handleDeleteEducationHistory = (index: number) => {
    dispatch(deleteEducationHistory(index));
  };

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
    return { value: month.toUpperCase(), label: month };
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

  return (
    <section className="">
      <div className="mx-auto container">
        <div className="my-10 ">
          <p className="font-semibold text-4xl mx-6 md:mx-0">
            Your educational journey
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-20 mb-44 mx-6 md:mx-0">
          <div className="md:w-1/2 flex justify-between flex-col">
            <div>
              {updateEduHistory.map((item, index) => (
                <>
                  <div className="flex mb-6 p-4 border rounded" key={index}>
                    <details className="w-full">
                      <summary className="relative">
                        <span>Add your educational history</span>
                        <button
                          onClick={() => handleDeleteEducationHistory(index)}
                          className="absolute top-0 bottom-0 right-0"
                        >
                          <IconTrashX color="red" size={20} />
                        </button>
                      </summary>
                      <div className="flex flex-col space-y-4 mt-4">
                        <input
                          type="text"
                          value={item.school_name}
                          placeholder="School name"
                          className="border px-4 py-3 rounded"
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "school_name",
                              e.target.value
                            )
                          }
                        />
                        <input
                          type="text"
                          placeholder="School location"
                          value={item.school_location}
                          className="border px-4 py-3 rounded"
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "school_location",
                              e.target.value
                            )
                          }
                        />
                        <input
                          type="text"
                          placeholder="Degree / Program"
                          value={item.degree_program}
                          className="border px-4 py-3 rounded"
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "degree_program",
                              e.target.value
                            )
                          }
                        />
                        <input
                          type="text"
                          placeholder="Field of study"
                          value={item.field_of_study}
                          className="border px-4 py-3 rounded"
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "field_of_study",
                              e.target.value
                            )
                          }
                        />
                        <div className="flex gap-10">
                          <DropDown
                            placeholder="Graduation month"
                            data={monthsArray}
                            onChange={(content) =>
                              handleInputChange(
                                index,
                                "graduation_month",
                                content
                              )
                            }
                            value={item.graduation_month}
                          />

                          <DropDown
                            placeholder="Graduation year"
                            data={yearArray}
                            onChange={(content) =>
                              handleInputChange(
                                index,
                                "graduation_year",
                                content
                              )
                            }
                            value={item.graduation_year}
                          />
                        </div>
                      </div>
                    </details>
                  </div>
                </>
              ))}

              <div>
                <AddButtons
                  name="Add educational history"
                  onClick={handleAddEducationHistory}
                />
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <BackButton name="Back" link="javascript:history.back()" />

              <NextButton
                name="Continue"
                onClick={() =>
                  router.push({
                    pathname: "/custom-template/projects",
                    query: { template: selectedTemplate },
                  })
                }
              />
            </div>
          </div>

          <section className="md:w-1/2 hidden md:flex sticky top-24 max-h-[75vh] border-2 rounded border-cyan-600">
            <div className="h-[70vh]">{TemplateComponent}</div>
          </section>
        </div>
        <div className="h-20 md:hidden flex fixed bottom-0 z-50 w-full justify-center items-center rounded-t-[20px] bg-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.20)]">
          <button
            className="py-3 px-4 bg-cyan-600  text-white font-semibold rounded "
            onClick={() => open()}
          >
            Preview template
          </button>
          <ModalCard opened={opened} close={close} open={open}>
            <div className="h-[70vh]">{TemplateComponent}</div>
          </ModalCard>
        </div>
      </div>
    </section>
  );
};

export default EducationHistory;
