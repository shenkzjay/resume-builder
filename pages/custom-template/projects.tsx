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
import { IconPlus, IconTrashX, IconX } from "@tabler/icons-react";
import { ModalCard } from "@/components/ui components/modal";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import Navbar from "@/components/navbar";

const Project = () => {
  //init router
  const router = useRouter();

  const [displayProject, setDisplayProject] = useState({
    projectDisplay: false,
    githubDisplay: false,
    linkedIndisplay: false,
    twitterDisplay: false,
  });

  console.log(displayProject);

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

  console.log(updatedSkill);

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
                  className="w-full flex mb-6 p-4 border rounded"
                  key={index}
                >
                  <summary className="relative">
                    <span>Add your projects</span>
                    <button
                      className="absolute top-0 bottom-0 right-0"
                      onClick={() => handleDeleteProject(index)}
                    >
                      <IconTrashX color="red" size={20} />
                    </button>
                  </summary>
                  <div className="flex flex-col space-y-4 mt-4">
                    <input
                      type="text"
                      placeholder="Project name"
                      className="border px-4 py-3 rounded"
                      value={item.projectName}
                      onChange={(e) =>
                        handleInputClick(index, "projectName", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      placeholder="Project link: https://www.example.com"
                      className="border px-4 py-3 rounded"
                      value={item.projectLink}
                      onChange={(e) =>
                        handleInputClick(index, "projectLink", e.target.value)
                      }
                    />

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
                    <input
                      type="text"
                      placeholder="Enter Github link"
                      value={updatedSkill.github}
                      onChange={(e) =>
                        dispatch(
                          updateSocialLinks({
                            ...updatedSkill,
                            github: e.target.value,
                          })
                        )
                      }
                      className="border px-4 py-3 rounded w-full"
                    />
                    <div
                      className="absolute top-3  right-3"
                      role="button"
                      onClick={() =>
                        handleToggleDisplay(false, "githubDisplay")
                      }
                    >
                      <IconTrashX size={20} color="red" />
                    </div>
                  </div>
                )}

                {displayProject.twitterDisplay && (
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Twitter link"
                      value={updatedSkill.twitter}
                      onChange={(e) =>
                        dispatch(
                          updateSocialLinks({
                            ...updatedSkill,
                            twitter: e.target.value,
                          })
                        )
                      }
                      className="border px-4 py-3 rounded w-full"
                    />
                    <div
                      className="absolute top-3  right-3"
                      role="button"
                      onClick={() =>
                        handleToggleDisplay(false, "twitterDisplay")
                      }
                    >
                      <IconTrashX size={20} color="red" />
                    </div>
                  </div>
                )}

                {displayProject.linkedIndisplay && (
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter LinkedIn link"
                      value={updatedSkill.linkedIn}
                      onChange={(e) =>
                        dispatch(
                          updateSocialLinks({
                            ...updatedSkill,
                            linkedIn: e.target.value,
                          })
                        )
                      }
                      className="border px-4 py-3 rounded w-full"
                    />
                    <div
                      className="absolute top-3  right-3"
                      role="button"
                      onClick={() =>
                        handleToggleDisplay(false, "linkedIndisplay")
                      }
                    >
                      <IconTrashX size={20} color="red" />
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
              <BackButton name="Back" link="javascript:history.back()" />

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
