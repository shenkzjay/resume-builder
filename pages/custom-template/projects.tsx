import { RootState } from "@/states/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { templatesData } from "@/components/templates";
import {
  updateProjectState,
  addProjectState,
  deletedProjectState,
  updateSocialLinks,
} from "@/states/reducers/slice/textUpdateSlice";

import {
  BackButton,
  NextButton,
  AddButtons,
  InverseAddButtons,
} from "@/components/buttons";
import { ModalCard } from "@/components/ui-components/modal";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import Navbar from "@/components/navbar";
import { GenerateId } from "@/utils/generateId";
import Trash from "@/components/svg/trash";

const Project = () => {
  //init router
  const router = useRouter();

  const [displayProject, setDisplayProject] = useState({
    projectDisplay: false,
    githubDisplay: false,
    linkedIndisplay: false,
    twitterDisplay: false,
  });

  const [opened, { open, close }] = useDisclosure();

  const selected_template = useSelector(
    (state: RootState) => state.updateTextName.seletedTemplate
  );

  let TemplateComponent;

  if (selected_template !== null) {
    TemplateComponent = templatesData[selected_template]?.component;
  } else {
    TemplateComponent = <div>No template selected</div>;
  }
  const dispatch = useDispatch();

  const updateProject = useSelector(
    (state: RootState) => state.updateTextName.project
  );

  const updatedSkill = useSelector(
    (state: RootState) => state.updateTextName.socialLinks
  );

  const handleToggleDisplay = (value: boolean, field: string) => {
    setDisplayProject({ ...displayProject, [field]: value });

    // if (value === false) {
    //   dispatch(
    //     updateSocialLinks({
    //       ...updatedSkill,
    //       github: "",
    //       twitter: "",
    //       linkedIn: "",
    //     })
    //   );
    // }
  };

  const handleInputClick = (index: number, field: string, value: string) => {
    const updatedProject = { ...updateProject[index], [field]: value };
    dispatch(updateProjectState({ index, data: updatedProject }));
  };

  const handleAddProject = () => {
    dispatch(
      addProjectState({
        projectName: "",
        projectLink: "",
        projectDescription: "",
      })
    );
  };

  const handleDeleteProject = (index: number) => {
    dispatch(deletedProjectState(index));
  };

  return (
    <section className="">
      <div className="mx-auto container">
        <Navbar />
        <div className="my-10 ">
          <p className="font-extrabold text-4xl mx-6 md:mx-0">
            Do you have any personal project?
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-20 mb-44 mx-6 md:mx-0">
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              {updateProject.map((item, index) => (
                <details
                  className="w-full pro flex mb-6 p-4 border rounded"
                  key={index}
                >
                  <summary className="relative">
                    <span>Add your projects</span>
                    <button
                      className="absolute top-0 bottom-0 right-0"
                      onClick={() => handleDeleteProject(index)}
                    >
                      <Trash />
                    </button>
                  </summary>
                  <div className="flex flex-col space-y-4 mt-4">
                    <div className="floating-input relative">
                      <input
                        type="text"
                        placeholder=""
                        id={`${GenerateId(index, "projectName")}`}
                        className="border px-4 py-3 rounded-[6px] w-full "
                        value={item.projectName}
                        onChange={(e) =>
                          handleInputClick(index, "projectName", e.target.value)
                        }
                      />
                      <label htmlFor={`${GenerateId(index, "projectName")}`}>
                        Project name
                      </label>
                    </div>

                    <div className="floating-input relative">
                      <input
                        type="text"
                        placeholder=""
                        id={`${GenerateId(index, "projectLink")}`}
                        className="border px-4 py-3 rounded-[6px] w-full"
                        value={item.projectLink}
                        onChange={(e) =>
                          handleInputClick(index, "projectLink", e.target.value)
                        }
                      />
                      <label htmlFor={`${GenerateId(index, "projectLink")}`}>
                        Project link
                      </label>
                    </div>

                    <textarea
                      rows={5}
                      placeholder="Write a brief summary about your project"
                      className="border px-4 py-3 rounded"
                      value={item.projectDescription}
                      onChange={(e) =>
                        handleInputClick(
                          index,
                          "projectDescription",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </details>
              ))}

              <div className="mt-6">
                <AddButtons name="Add projects" onClick={handleAddProject} />
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-6">
                {displayProject.githubDisplay && (
                  <div className="relative">
                    <div className="floating-input relative">
                      <input
                        type="text"
                        placeholder=""
                        id="Enter Github link"
                        value={updatedSkill.github}
                        onChange={(e) =>
                          dispatch(
                            updateSocialLinks({
                              ...updatedSkill,
                              github: e.target.value,
                            })
                          )
                        }
                        className="border px-4 py-3 rounded-[6px] w-full"
                      />
                      <label htmlFor="Enter Github link">
                        Enter Github link
                      </label>
                    </div>
                    <div
                      className="absolute top-3 right-3"
                      role="button"
                      onClick={() =>
                        handleToggleDisplay(false, "githubDisplay")
                      }
                    >
                      <Trash />
                    </div>
                  </div>
                )}

                {displayProject.twitterDisplay && (
                  <div className="relative">
                    <div className="floating-input relative">
                      <input
                        type="text"
                        placeholder=""
                        value={updatedSkill.twitter}
                        id="Enter Twitter link"
                        onChange={(e) =>
                          dispatch(
                            updateSocialLinks({
                              ...updatedSkill,
                              twitter: e.target.value,
                            })
                          )
                        }
                        className="border px-4 py-3 rounded-[6px] w-full"
                      />
                      <label htmlFor="Enter Twitter link">
                        Enter Twitter link
                      </label>
                    </div>
                    <div
                      className="absolute top-3  right-3"
                      role="button"
                      onClick={() =>
                        handleToggleDisplay(false, "twitterDisplay")
                      }
                    >
                      <Trash />
                    </div>
                  </div>
                )}

                {displayProject.linkedIndisplay && (
                  <div className="relative">
                    <div className="relative floating-input">
                      <input
                        type="text"
                        placeholder=""
                        value={updatedSkill.linkedIn}
                        id="Enter LinkedIn link"
                        onChange={(e) =>
                          dispatch(
                            updateSocialLinks({
                              ...updatedSkill,
                              linkedIn: e.target.value,
                            })
                          )
                        }
                        className="border px-4 py-3 rounded-[6px] w-full"
                      />
                      <label htmlFor="Enter LinkedIn link">
                        Enter LinkedIn link
                      </label>
                    </div>

                    <div
                      className="absolute top-3  right-3"
                      role="button"
                      onClick={() =>
                        handleToggleDisplay(false, "linkedIndisplay")
                      }
                    >
                      <Trash />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-6 mt-6">
                {!displayProject.githubDisplay && (
                  <InverseAddButtons
                    name="Add Github"
                    onClick={() => handleToggleDisplay(true, "githubDisplay")}
                  />
                )}

                {!displayProject.twitterDisplay && (
                  <InverseAddButtons
                    name="Add Twitter"
                    onClick={() => handleToggleDisplay(true, "twitterDisplay")}
                  />
                )}

                {!displayProject.linkedIndisplay && (
                  <InverseAddButtons
                    name="Add LinkedIn"
                    onClick={() => handleToggleDisplay(true, "linkedIndisplay")}
                  />
                )}
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <BackButton
                name="Back"
                onClick={() =>
                  router.push({
                    pathname: "/custom-template/education",
                  })
                }
              />

              <NextButton
                name="Continue"
                onClick={() =>
                  router.push({
                    pathname: "/custom-template/certification",
                  })
                }
              />
            </div>
          </div>
          <section className="md:w-1/2 hidden md:flex sticky top-24 max-h-[75vh] ">
            <div className="h-[75vh] border-2 rounded border-cyan-600 w-full">
              {TemplateComponent}
            </div>
          </section>
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

export default Project;
