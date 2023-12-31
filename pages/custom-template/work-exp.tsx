import { RootState } from "@/states/store";
import React, { useState } from "react";
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
import DropDown from "@/components/ui-components/dropdown";
import { ModalCard } from "@/components/ui-components/modal";
import { useDisclosure } from "@mantine/hooks";
import Trash from "@/components/svg/trash";
import UseSuggestions from "@/hooks/useSuggestions";
import TiptapEditor from "@/components/ui-components/markdown-editor";
import { Checkboxelement } from "@/components/ui-components/checkbox";
import { BackButton, NextButton, AddButtons } from "@/components/buttons";
import Navbar from "@/components/navbar";
import { YearGenerator } from "@/utils/month-year-generator";
import { MonthGenerator } from "@/utils/month-year-generator";
import { GenerateId } from "@/utils/generateId";

const WorkExperience = () => {
  const { data, isLoading, error } = UseSuggestions();

  const [opened, { open, close }] = useDisclosure(false);

  //animate add experience button
  const [addBtnAnimation, setAddBtnAnimation] = useState(false);

  const [deleteBtnAnimation, setDeleteBtnAnimation] = useState(false);

  const { yearArray } = YearGenerator();

  const { monthsArray } = MonthGenerator();

  const router = useRouter();

  //init
  const dispatch = useDispatch();

  //retrieve selected template
  const selected_template = useSelector(
    (state: RootState) => state.updateTextName.seletedTemplate
  );

  let TemplateComponent;

  if (selected_template !== null) {
    TemplateComponent = templatesData[selected_template]?.component;
  } else {
    TemplateComponent = <div>No template selected</div>;
  }
  //retrieve updated state from store
  const updateWorkExp = useSelector(
    (state: RootState) => state.updateTextName.workExperience
  );

  // const updateEditor = useSelector(
  //   (state: RootState) => state.updateTextName.editorExperience
  // );

  const searchSuggestions = useSelector(
    (state: RootState) => state.updateTextName.searchSuggestions
  );

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
    setAddBtnAnimation(true);
    setDeleteBtnAnimation(false);

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
    setAddBtnAnimation(false);
  };

  const handleSearchInput = (content: string) => {
    dispatch(search(content));
  };

  const handleClickSuggestion = (
    index: number,
    item: InputItem,
    selectedDescription: string
  ) => {
    // const currentContent = updateWorkExp[index].description; // Get current Tiptap editor content
    // const updatedContent = currentContent
    //   ? `${currentContent}\n${selectedDescription}`
    //   : selectedDescription; // If no current content, use only selected description

    // handleInputChange(index, "description", updatedContent);

    const currentContent = updateWorkExp[index].description;
    const updatedContent = currentContent
      ? `${currentContent}\n${selectedDescription}`
      : selectedDescription;

    const updatedWorkExp = [...updateWorkExp];
    updatedWorkExp[index].description = updatedContent;

    handleInputChange(index, "description", updatedContent);

    close();
  };

  const handleCheckboxChange = (index: number, checked: boolean) => {
    handleInputChange(index, "checkboxstatus", checked);
  };

  const handleNext = async () => {
    router.push({
      pathname: "/custom-template/education",
    });
  };

  const generateJobTitle = (index: number) => `jobtitle-${index}`;
  const generateCompanyName = (index: number) => `companyname-${index}`;
  const generateCountry = (index: number) => `country-${index}`;

  return (
    <section className="">
      <div className="container mx-auto ">
        <Navbar />
        <div className="my-10 ">
          <p className="font-extrabold text-4xl mx-6 md:mx-0">
            Snapshot of your work history
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-20 mb-48 md:mb-20 mx-6 md:mx-0">
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              {updateWorkExp.map((item, index) => (
                <div
                  className={`flex mb-6 rounded justify-between p-4 border ${
                    addBtnAnimation && index === updateWorkExp.length - 1
                      ? "fade-in"
                      : ""
                  } ${deleteBtnAnimation && index ? "fade-out" : ""} `}
                  key={index}
                >
                  <details className={`w-full anime`}>
                    <summary className="relative">
                      <span>Add details of work experience</span>
                      <button
                        onClick={() => handleDeleteWorkExperience(index)}
                        className="absolute top-0 bottom-0 right-0"
                      >
                        <Trash />
                      </button>
                    </summary>
                    <div className="flex flex-col space-y-4 mt-6">
                      <div className="floating-input relative">
                        <input
                          type="text"
                          value={item.job_title}
                          placeholder=""
                          id={`${GenerateId(index, "job-title")}`}
                          className="border px-4 py-3 w-full rounded-[6px]"
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "job_title",
                              e.target.value
                            )
                          }
                        />
                        <label htmlFor={`${GenerateId(index, "job-title")}`}>
                          Job title
                        </label>
                      </div>
                      <div className="floating-input relative">
                        <input
                          type="text"
                          placeholder=""
                          id={`${GenerateId(index, "company")}`}
                          value={item.company_name}
                          className="border px-4 py-3 w-full rounded-[6px]"
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "company_name",
                              e.target.value
                            )
                          }
                        />
                        <label htmlFor={`${GenerateId(index, "company")}`}>
                          Company name
                        </label>
                      </div>

                      <div className="floating-input relative">
                        <input
                          type="text"
                          placeholder=""
                          id={`${GenerateId(index, "country")}`}
                          value={item.country}
                          className="border px-4 py-3 w-full rounded-[6px]"
                          onChange={(e) =>
                            handleInputChange(index, "country", e.target.value)
                          }
                        />
                        <label htmlFor={`${GenerateId(index, "country")}`}>
                          Country
                        </label>
                      </div>

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
                        value={item.description}
                        onChange={(content) =>
                          handleInputChange(index, "description", content)
                        }
                      /> */}
                      <TiptapEditor
                        onUpdated={(content) =>
                          handleInputChange(index, "description", content)
                        }
                        content={item.description}
                      />
                      {/* <MenuBar
                        onUpdate={(content) =>
                          handleInputChange(index, "description", content)
                        }
                        content={item.description}
                      /> */}

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
              <BackButton
                name="Back"
                onClick={() =>
                  router.push({
                    pathname: "/custom-template/skills",
                  })
                }
              />

              <NextButton name="Continue" onClick={handleNext} />
            </div>
          </div>

          <section className="md:w-1/2 hidden md:flex max-h-[70vh] sticky top-24">
            <div className="h-[70vh] border-2 rounded border-cyan-600 w-full">
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
            {isLoading && <div>...Loading</div>}
            {data &&
              data.map((item: any, index: number) => {
                return (
                  <div
                    role="button"
                    onClick={() =>
                      handleClickSuggestion(index, item, item.content)
                    }
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
                );
              })}
          </div>
        </ModalCard>
      </div> */}
      <div className="h-20 md:hidden flex fixed bottom-0 z-50 w-full justify-center items-center rounded-t-[20px] bg-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.20)]">
        <button
          className="py-3 px-4 border-2 border-primaryButton  text-primaryButton font-semibold rounded "
          onClick={() => open()}
        >
          Preview template
        </button>
        <ModalCard opened={opened} close={close} open={open}>
          <div className="h-[70vh]">{TemplateComponent}</div>
        </ModalCard>
      </div>
    </section>
  );
};

export default WorkExperience;
