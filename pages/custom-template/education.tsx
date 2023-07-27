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
        schoolName: "",
        course: "",
        degreeTitle: "",
      })
    );
  };

  const handleDeleteEducationHistory = (index: number) => {
    dispatch(deleteEducationHistory(index));
  };

  return (
    <section className="">
      <div className="mx-auto container">
        <div className="my-10 ">
          <p className="font-bold text-4xl">Tell us about your education</p>
        </div>
        <div className="flex gap-20">
          <div className="w-1/2">
            {updateEduHistory.map((item, index) => (
              <>
                <div className="flex mb-6 p-4 border rounded" key={index}>
                  <details className="w-full">
                    <summary className="relative">
                      <span>Add details of work experience</span>
                      <button
                        onClick={() => handleDeleteEducationHistory(index)}
                        className="absolute top-0 bottom-0 right-0"
                      >
                        delete
                      </button>
                    </summary>
                    <div className="flex flex-col space-y-4 mt-4">
                      <input
                        type="text"
                        value={item.course}
                        placeholder="job title"
                        className="border px-4 py-3 rounded"
                        onChange={(e) =>
                          handleInputChange(index, "course", e.target.value)
                        }
                      />
                      <input
                        type="text"
                        placeholder="company name"
                        value={item.degreeTitle}
                        className="border px-4 py-3 rounded"
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "degreeTitle",
                            e.target.value
                          )
                        }
                      />
                      <input
                        type="text"
                        placeholder="country"
                        value={item.schoolName}
                        className="border px-4 py-3 rounded"
                        onChange={(e) =>
                          handleInputChange(index, "schoolName", e.target.value)
                        }
                      />
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
              <button> ←Back</button>
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

          <section className="w-1/2">
            <div className="h-[70vh]">{TemplateComponent}</div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default EducationHistory;
