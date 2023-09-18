import React from "react";
import { templatesData } from "@/components/templates";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/states/store";
import {
  updateName,
  updateObjective,
} from "@/states/reducers/slice/textUpdateSlice";
import SunEditorFile from "@/components/ui-components/markdown-editor/sun-editor";
import { NextButton, BackButton } from "@/components/buttons";
import { useDisclosure } from "@mantine/hooks";
import { ModalCard } from "@/components/ui-components/modal";
import Navbar from "@/components/navbar";

const UpdateTemplate = () => {
  //init router
  const router = useRouter();

  //define useDisclosure hook from mantine ui
  const [opened, { open, close }] = useDisclosure(false);

  //init dispatch from redux actionscreators
  const dispatch = useDispatch();

  //request current selected template from redux store and store value in variable
  const selected_template = useSelector(
    (state: RootState) => state.updateTextName.seletedTemplate
  );

  //define template variable
  let TemplateComponent;

  //check if selected template is null
  if (selected_template !== null) {
    TemplateComponent = templatesData[selected_template]?.component;
  } else {
    TemplateComponent = <div>No template selected</div>;
  }

  //request current updateTextUpdate from redux store and store value in variable
  const updateTextUpdate = useSelector(
    (state: RootState) => state?.updateTextName
  );

  //request current updateTextUpdate from redux store and store value in variable
  const updateCareerObjective = useSelector(
    (state: RootState) => state.updateTextName.objective
  );

  //function to navigate to next page
  const handleNext = async () => {
    const personalDetails = {
      personalDetail: updateTextUpdate.personalDetails,
      careerObjective: updateCareerObjective,
    };

    router.push({
      pathname: "/custom-template/skills",
    });
  };

  return (
    <section className="bg-white ">
      <div className="md:w-[80vw] lg:container md:mx-auto  text-black">
        <Navbar />
        <div className="py-10 ">
          <p className=" text-4xl font-extrabold mx-6 md:mx-0">
            Tell us a little about yourself
          </p>
        </div>
        <div className="flex md:flex-row flex-col w-full gap-20 mb-20 md:mb-0">
          <div className="md:w-1/2 mx-6 md:mx-0">
            <div className="w-full">
              <div className="flex flex-col space-y-6">
                <div className="floating-input relative">
                  <input
                    type="text"
                    value={updateTextUpdate.personalDetails.name ?? ""}
                    id="Enter full name"
                    className="border px-4 py-3 cursor-text w-full rounded-[6px]"
                    onChange={(e) =>
                      dispatch(
                        updateName({
                          ...updateTextUpdate.personalDetails,
                          name: e.target.value,
                        })
                      )
                    }
                    placeholder=""
                  />
                  <label htmlFor="Enter full name">Enter full name</label>
                </div>

                <div className="floating-input relative">
                  <input
                    type="text"
                    className="border px-4 py-3 w-full cursor-text rounded-[6px]"
                    value={updateTextUpdate.personalDetails.profession ?? ""}
                    placeholder=""
                    id="Enter your profession"
                    onChange={(e) =>
                      dispatch(
                        updateName({
                          ...updateTextUpdate.personalDetails,
                          profession: e.target.value,
                        })
                      )
                    }
                  />
                  <label htmlFor="Enter your profession">
                    Enter your profession
                  </label>
                </div>

                <div className="floating-input relative">
                  <input
                    type="text"
                    className="border px-4 py-3 w-full rounded-[6px]"
                    value={updateTextUpdate.personalDetails.state ?? ""}
                    placeholder=""
                    id="Enter your state"
                    onChange={(e) =>
                      dispatch(
                        updateName({
                          ...updateTextUpdate.personalDetails,
                          state: e.target.value,
                        })
                      )
                    }
                  />
                  <label htmlFor="Enter your state">Enter your state</label>
                </div>

                <div className="floating-input relative">
                  <input
                    type="text"
                    className="border px-4 py-3 w-full rounded-[6px]"
                    value={updateTextUpdate.personalDetails.country ?? ""}
                    placeholder=""
                    id="Enter your country"
                    onChange={(e) =>
                      dispatch(
                        updateName({
                          ...updateTextUpdate.personalDetails,
                          country: e.target.value,
                        })
                      )
                    }
                  />
                  <label htmlFor="Enter your country">Enter your country</label>
                </div>

                <div className="floating-input relative">
                  <input
                    type="text"
                    className="border px-4 py-3 w-full rounded-[6px]"
                    value={updateTextUpdate.personalDetails.email ?? ""}
                    placeholder=""
                    id="Enter your email address"
                    onChange={(e) =>
                      dispatch(
                        updateName({
                          ...updateTextUpdate.personalDetails,
                          email: e.target.value,
                        })
                      )
                    }
                  />
                  <label htmlFor="Enter your email address">
                    Enter your email address
                  </label>
                </div>

                <div className="floating-input relative">
                  <input
                    type="number"
                    className="border px-4 py-3 w-full rounded-[6px]"
                    value={updateTextUpdate.personalDetails.phone ?? ""}
                    placeholder=""
                    id="Enter your phone number"
                    onChange={(e) =>
                      dispatch(
                        updateName({
                          ...updateTextUpdate.personalDetails,
                          phone: e.target.value,
                        })
                      )
                    }
                  />
                  <label htmlFor="Enter your phone number">
                    Enter your phone number
                  </label>
                </div>
              </div>
              <div className="mt-6 ">
                {/* <Tiptap /> */}
                <SunEditorFile
                  placeholder="Type your professional summary here"
                  value={updateCareerObjective}
                  onChange={(content) => dispatch(updateObjective(content))}
                />
              </div>
            </div>

            <div className="flex justify-between mt-4 mb-20">
              <BackButton
                name="Back"
                onClick={() =>
                  router.push({
                    pathname: "/custom-template/",
                  })
                }
              />

              <NextButton name="Continue" onClick={handleNext} />
            </div>
          </div>
          <div className="md:w-1/2 md:flex hidden">
            <div className="max-h-[80vh] w-full border-2 rounded border-cyan-600">
              {TemplateComponent}
            </div>
          </div>
        </div>
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
      </div>
    </section>
  );
};

export default UpdateTemplate;
