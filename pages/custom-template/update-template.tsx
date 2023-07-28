import React, { ChangeEvent, useCallback } from "react";
import { templatesData } from "@/components/templates";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/states/store";
import {
  updateName,
  updateObjective,
} from "@/states/reducers/slice/textUpdateSlice";
import Tiptap from "@/components/markdown-editor";
import SunEditorFile from "@/components/markdown-editor/sun-editor";

const UpdateTemplate = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedTemplate = Number(router.query.template);
  const TemplateComponent = templatesData[selectedTemplate]?.component ?? (
    <div>No template selected</div>
  );

  const updateTextUpdate = useSelector(
    (state: RootState) => state?.updateTextName
  );

  const updateCareerObjective = useSelector(
    (state: RootState) => state.updateTextName.objective
  );

  return (
    <section className="container mx-auto bg-white  text-black">
      <div className="my-10 ">
        <p className="font-bold text-4xl">Contact details</p>
      </div>
      <div className="flex w-full gap-20 ">
        <div className="w-1/2">
          <div className="w-full">
            <div className="flex flex-col space-y-6">
              <input
                type="text"
                value={updateTextUpdate.personalDetails.name ?? ""}
                className="border px-4 py-3"
                onChange={(e) =>
                  dispatch(
                    updateName({
                      ...updateTextUpdate.personalDetails,
                      name: e.target.value,
                    })
                  )
                }
                placeholder="Enter full name"
              />
              <input
                type="text"
                className="border px-4 py-3"
                placeholder="Enter your profession"
                onChange={(e) =>
                  dispatch(
                    updateName({
                      ...updateTextUpdate.personalDetails,
                      profession: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                className="border px-4 py-3"
                placeholder="Enter your country"
                onChange={(e) =>
                  dispatch(
                    updateName({
                      ...updateTextUpdate.personalDetails,
                      country: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                className="border px-4 py-3"
                placeholder="Enter your state"
                onChange={(e) =>
                  dispatch(
                    updateName({
                      ...updateTextUpdate.personalDetails,
                      state: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                className="border px-4 py-3"
                placeholder="Enter your email address"
                onChange={(e) =>
                  dispatch(
                    updateName({
                      ...updateTextUpdate.personalDetails,
                      email: e.target.value,
                    })
                  )
                }
              />
              <input
                type="number"
                className="border px-4 py-3"
                placeholder="Enter your phone number"
                onChange={(e) =>
                  dispatch(
                    updateName({
                      ...updateTextUpdate.personalDetails,
                      phone: e.target.value,
                    })
                  )
                }
              />
            </div>
            <div className="mt-6 prose prose-li:list-disc">
              {/* <Tiptap /> */}
              <SunEditorFile
                placeholder="Type your professional summary here"
                value={updateCareerObjective}
                onChange={(content) => dispatch(updateObjective(content))}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 ">
          <div className="h-[70vh]">{TemplateComponent}</div>
        </div>
      </div>
      <div className="space-x-4">
        <button> ←Back</button>
        <button
          onClick={() =>
            router.push({
              pathname: "/custom-template/skills",
              query: { template: selectedTemplate },
            })
          }
        >
          Next→{" "}
        </button>
      </div>
    </section>
  );
};

export default UpdateTemplate;
