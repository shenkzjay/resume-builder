import React, { ChangeEvent, useCallback, useEffect } from "react";
import { templatesData } from "@/components/templates";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/states/store";
import {
  updateName,
  updateObjective,
} from "@/states/reducers/slice/textUpdateSlice";
import Tiptap from "@/components/ui components/markdown-editor";
import SunEditorFile from "@/components/ui components/markdown-editor/sun-editor";
import Link from "next/link";
import { NextButton, BackButton } from "@/components/buttons";
import { useDisclosure } from "@mantine/hooks";
import { ModalCard } from "@/components/ui components/modal";
import localforage from "localforage";
import { ActionTypes } from "@/states/actions-types";
import { update } from "@/states/actions-types";

const UpdateTemplate = () => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
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

  useEffect(() => {
    const getPersonalDetails = async () => {
      try {
        const value: any = await localforage.getItem(ActionTypes.UPADATE_NAME);

        if (value && value.personalDetail) {
          dispatch(updateName(value?.personalDetail));
          dispatch(updateObjective(value?.careerObjective));
        }
      } catch (err) {
        console.log(err);
      }
    };

    getPersonalDetails();
  }, [dispatch]);

  const handleNext = async () => {
    const personalDetails = {
      personalDetail: updateTextUpdate.personalDetails,
      careerObjective: updateCareerObjective,
    };

    try {
      await localforage.setItem(ActionTypes.UPADATE_NAME, personalDetails);
    } catch (error) {
      console.log(error);
    }

    router.push({
      pathname: "/custom-template/skills",
      query: { template: selectedTemplate },
    });
  };

  return (
    <section className="md:container md:mx-auto bg-white  text-black">
      <div className="my-10 ">
        <p className="font-semibold text-4xl mx-6 md:mx-0">
          Tell us a little about yourself
        </p>
      </div>
      <div className="flex md:flex-row flex-col w-full gap-20 mb-20 md:mb-0">
        <div className="md:w-1/2 mx-6 md:mx-0">
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
                value={updateTextUpdate.personalDetails.profession ?? ""}
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
                value={updateTextUpdate.personalDetails.state ?? ""}
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
                value={updateTextUpdate.personalDetails.country ?? ""}
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
                value={updateTextUpdate.personalDetails.email ?? ""}
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
                value={updateTextUpdate.personalDetails.phone ?? ""}
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
            <BackButton name="Back" link="javascript:history.back()" />

            <NextButton name="Continue" onClick={handleNext} />
          </div>
        </div>
        <div className="md:w-1/2 md:flex hidden">
          <div className="h-[70vh] border-2 rounded border-cyan-600">
            {TemplateComponent}
          </div>
        </div>
      </div>
      <div className="h-24 md:hidden flex fixed bottom-0 z-50 w-full justify-center items-center rounded-t-[20px] bg-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.20)]">
        <button
          className="py-3 px-4 bg-cyan-600  text-white font-semibold rounded "
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

export default UpdateTemplate;
