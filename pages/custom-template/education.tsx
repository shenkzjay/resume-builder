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
    <section className="flex">
      <div className="w-1/2">
        <p>Tell us about your previous jobs</p>
        {updateEduHistory.map((item, index) => (
          <>
            <div className="flex  space-x-4" key={index}>
              <details>
                <summary>add details of work experience</summary>
                <input
                  type="text"
                  value={item.course}
                  placeholder="job title"
                  onChange={(e) =>
                    handleInputChange(index, "course", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="company name"
                  value={item.degreeTitle}
                  onChange={(e) =>
                    handleInputChange(index, "degreeTitle", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="country"
                  value={item.schoolName}
                  onChange={(e) =>
                    handleInputChange(index, "schoolName", e.target.value)
                  }
                />
              </details>
              <button onClick={() => handleDeleteEducationHistory(index)}>
                delete
              </button>
            </div>
          </>
        ))}
        <button onClick={handleAddEducationHistory}>
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
        <div>{TemplateComponent}</div>
      </section>
    </section>
  );
};

export default EducationHistory;
