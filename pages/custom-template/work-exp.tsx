import { RootState } from "@/states/store";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  updateWorkExperience,
  addWorkExperience,
  deleteWorkExperience,
} from "@/states/reducers/slice/textUpdateSlice";
import { workExp as InputItem } from "@/states/actions-types";
import { useRouter } from "next/router";
import { templatesData } from "@/components/templates";
import SunEditorFile from "@/components/markdown-editor/sun-editor";
import DropDown from "@/components/dropdown";

const WorkExperience = () => {
  //init router
  console.log("render ");

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

  const updateEditor = useSelector(
    (state: RootState) => state.updateTextName.editorExperience
  );

  //function to update text input change
  const handleInputChange = (
    index: number,
    field: keyof InputItem,
    value: string
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
      })
    );
  };

  const handleDeleteWorkExperience = (index: number) => {
    dispatch(deleteWorkExperience(index));
  };

  return (
    <section className="">
      <div className="container mx-auto ">
        <div className="my-10 ">
          <p className="font-bold text-4xl">Tell us about your previous jobs</p>
        </div>
        <div className="flex gap-20">
          <div className="w-1/2">
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
                      delete
                    </button>
                  </summary>
                  <div className="flex flex-col space-y-4 mt-6">
                    <input
                      type="text"
                      value={item.job_title}
                      placeholder="Job title"
                      className="border px-4 py-3"
                      onChange={(e) =>
                        handleInputChange(index, "job_title", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      placeholder="Company name"
                      value={item.company_name}
                      className="border px-4 py-3"
                      onChange={(e) =>
                        handleInputChange(index, "company_name", e.target.value)
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
                    <div className="flex gap-10">
                      <DropDown />
                      <DropDown />
                    </div>

                    <div className="flex gap-10">
                      <DropDown />
                      <DropDown />
                    </div>

                    <SunEditorFile
                      placeholder="Type your work experience here"
                      value={updateEditor[index]}
                      onChange={(content) =>
                        handleInputChange(index, "description", content)
                      }
                    />
                  </div>
                </details>
              </div>
            ))}
            <div className="flex justify-between">
              <button
                onClick={handleAddWorkExp}
                className="px-4 py-3 bg-cyan-600 text-white rounded mb-6"
              >
                Add work experience
              </button>
              <button className="px-4 py-3 border border-cyan-600 text-cyan-600 rounded mb-6">
                ✨ AI suggestions
              </button>
            </div>
            <div className="space-x-4">
              <button> ←Back</button>
              <button
                onClick={() =>
                  router.push({
                    pathname: "/custom-template/education",
                    query: { template: selectedTemplate },
                  })
                }
              >
                Next→{" "}
              </button>
            </div>
          </div>

          <section className="w-1/2 ">
            <div className="h-[70vh]">{TemplateComponent}</div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
