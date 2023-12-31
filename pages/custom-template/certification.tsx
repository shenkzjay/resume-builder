import { RootState } from "@/states/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { templatesData } from "@/components/templates";
import {
  updateCertification,
  addCertification,
  deleteCertification,
} from "@/states/reducers/slice/textUpdateSlice";

import { BackButton, NextButton, AddButtons } from "@/components/buttons";
import { ModalCard } from "@/components/ui-components/modal";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import Navbar from "@/components/navbar";
import { GenerateId } from "@/utils/generateId";
import Trash from "@/components/svg/trash";

const Certification = () => {
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
  const updateCert = useSelector(
    (state: RootState) => state.updateTextName.certification
  );

  const handleDeleteCertification = (index: number) => {
    dispatch(deleteCertification(index));
  };

  return (
    <section className="">
      <div className="mx-auto container">
        <Navbar />
        <div className="my-10 ">
          <p className="font-extrabold text-4xl mx-6 md:mx-0">
            Got a certification?
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-20 mb-44 mx-6 md:mx-0">
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              {updateCert.map((item, index) => (
                <div
                  className="flex justify-between mb-6 relative"
                  key={index}
                  tabIndex={0}
                >
                  <div className="floating-input relative w-full">
                    <input
                      type="text"
                      value={item.value}
                      placeholder=""
                      id={`${GenerateId(index, "certificate")}`}
                      className="rounded w-full pl-4 pr-12 py-3  border"
                      onChange={(e) =>
                        dispatch(
                          updateCertification({ index, value: e.target.value })
                        )
                      }
                    />
                    <label htmlFor={`${GenerateId(index, "certificate")}`}>
                      Enter your certification
                    </label>
                  </div>
                  <button
                    onClick={() => handleDeleteCertification(index)}
                    className="mx-4 absolute top-3 right-0"
                  >
                    <Trash />
                  </button>
                </div>
              ))}

              <div>
                <AddButtons
                  name="Add certification"
                  onClick={() => dispatch(addCertification({ value: "" }))}
                />
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <BackButton
                name="Back"
                onClick={() =>
                  router.push({
                    pathname: "/custom-template/projects",
                  })
                }
              />

              <NextButton
                name="Continue"
                onClick={() =>
                  router.push({
                    pathname: "/custom-template/preview",
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

export default Certification;
