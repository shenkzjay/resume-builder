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

const EducationHistory = () => {
  //init router
  const router = useRouter();

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

  return (
    <section className="">
      <div className="mx-auto container">
        <div className="my-10 ">
          <p className="font-semibold text-4xl">Your educational journey</p>
        </div>
        <div className="flex gap-20">
          <div className="w-1/2">
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
                          data={monthsArray}
                          onChange={(content) =>
                            handleInputChange(index, "graduation_year", content)
                          }
                          value={item.graduation_year}
                        />
                      </div>
                    </div>
                  </details>
                </div>
              </>
            ))}
            <button
              onClick={handleAddEducationHistory}
              className="px-4 py-3 bg-cyan-600 text-white rounded mb-6"
            >
              Add Education history
            </button>
            <div className="space-x-4">
              <button>
                {" "}
                <Link href={"javascript:history.back()"}>←Back</Link>
              </button>
              <button
                onClick={() =>
                  router.push({
                    pathname: "/custom-template/certification",
                    query: { template: selectedTemplate },
                  })
                }
              >
                Next→{" "}
              </button>
            </div>
          </div>

          <section className="w-1/2 sticky top-24 max-h-[70vh]">
            <div className="h-[70vh]">{TemplateComponent}</div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default EducationHistory;
