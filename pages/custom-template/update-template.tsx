import React from "react";
import { templatesData } from "@/components/templates";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/states/store";
import { updateName } from "@/states/reducers/slice/textUpdateSlice";

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

  return (
    <section className="bg-white h-screen text-black">
      <div className="flex w-full">
        <div className="w-1/2">
          <form>
            <input
              type="text"
              value={updateTextUpdate.value ?? ""}
              className="border"
              onChange={(e) => dispatch(updateName(e.target.value))}
            />
          </form>
        </div>
        <div className="w-1/2">{TemplateComponent}</div>
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
