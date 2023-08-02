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
import { IconTrashX } from "@tabler/icons-react";
import { ModalCard } from "@/components/ui components/modal";
import { useDisclosure } from "@mantine/hooks";

const Certification = () => {
  //init router
  const router = useRouter();

  const [opened, { open, close }] = useDisclosure();

  const selectedTemplate = Number(router.query.template);

  const TemplateComponent = templatesData[selectedTemplate]?.component ?? (
    <div>No template selected</div>
  );

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
        <div className="my-10 ">
          <p className="font-bold text-4xl mx-6 md:mx-0">
            Got a certification?
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-20 mb-20 mx-6 md:mx-0">
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              {updateCert.map((item, index) => (
                <div className="flex justify-between mb-6" key={index}>
                  <input
                    type="text"
                    value={item.value}
                    className="border px-4 py-3 rounded w-full"
                    onChange={(e) =>
                      dispatch(
                        updateCertification({ index, value: e.target.value })
                      )
                    }
                  />
                  <button
                    onClick={() => handleDeleteCertification(index)}
                    className="mx-4"
                  >
                    <IconTrashX size={20} color="red" />
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
              <BackButton name="Back" link="javascript:history.back()" />

              <NextButton
                name="Continue"
                onClick={() =>
                  router.push({
                    pathname: "/custom-template/preview",
                    query: { template: selectedTemplate },
                  })
                }
              />
            </div>
          </div>
          <section className="md:w-1/2 hidden md:flex">
            <div className="h-[70vh]">{TemplateComponent}</div>
          </section>
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
      </div>
    </section>
  );
};

export default Certification;
