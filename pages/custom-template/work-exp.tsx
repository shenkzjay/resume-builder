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

const WorkExperience = () => {
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
  const updateWorkExp = useSelector(
    (state: RootState) => state.updateTextName.workExperience
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
        jobTitle: "",
        companyName: "",
        country: "",
      })
    );
  };

  const handleDeleteWorkExperience = (index: number) => {
    dispatch(deleteWorkExperience(index));
  };

  return (
    <section className="flex">
      <div className="w-1/2">
        <p>Tell us about your previous jobs</p>
        {updateWorkExp.map((item, index) => (
          <>
            <div className="flex  space-x-4" key={index}>
              <details>
                <summary>add details of work experience</summary>
                <input
                  type="text"
                  value={item.jobTitle}
                  placeholder="job title"
                  onChange={(e) =>
                    handleInputChange(index, "jobTitle", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="company name"
                  value={item.companyName}
                  onChange={(e) =>
                    handleInputChange(index, "companyName", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="country"
                  value={item.country}
                  onChange={(e) =>
                    handleInputChange(index, "country", e.target.value)
                  }
                />
              </details>
              <button onClick={() => handleDeleteWorkExperience(index)}>
                delete
              </button>
            </div>
          </>
        ))}
        <button onClick={handleAddWorkExp}>Add work Ex</button>
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

      <section className="w-1/2">
        <div>{TemplateComponent}</div>
      </section>
    </section>
  );
};

export default WorkExperience;
