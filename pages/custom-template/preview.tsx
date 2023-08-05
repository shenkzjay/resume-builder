import React, { useState, useRef } from "react";
import { templatesData } from "@/components/templates";
import { useRouter } from "next/router";
import ExportButton from "@/components/ui components/toggleButton/export-button";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import EditSectionButton from "@/components/ui components/toggleButton/edit-section";
import { ModalCard } from "@/components/ui components/modal";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "@/states/store";
import { useDispatch } from "react-redux";
import { updateSeletedTemplate } from "@/states/reducers/slice/textUpdateSlice";

const PreviewTemplate = () => {
  const printRef = useRef<HTMLDivElement | null>(null);
  const [opened, { open, close }] = useDisclosure();
  const router = useRouter();
  const dispatch = useDispatch();

  const selected_template = useSelector(
    (state: RootState) => state.updateTextName.seletedTemplate
  );

  console.log(selected_template);

  let TemplateComponent;

  if (selected_template !== null) {
    TemplateComponent = templatesData[selected_template]?.component;
  } else {
    TemplateComponent = <div>No template selected</div>;
  }

  const handleSelectTemplate = (index: number) => {
    dispatch(updateSeletedTemplate(index));
  };

  return (
    <section className="md:mx-auto md:w-[90vw]">
      <div className="my-10 flex flex-col md:flex-row justify-between mx-6 md:mx-0">
        <p className="font-bold text-4xl">RESUME</p>
        <div className="flex gap-10 ">
          <EditSectionButton />
          <button
            className="py-3 px-4 bg-cyan-600 font-semibold text-white rounded"
            onClick={() =>
              router.push({
                pathname: "/custom-template/download",
              })
            }
          >
            Go to download
          </button>
        </div>
      </div>
      <div className="flex gap-20">
        <div className="md:w-[65%] w-full md:max-h-[70vh] md:overflow-auto p-1 mb-48 scroll">
          <div className="mb-4 text-2xl">Change template</div>
          <div className="grid md:grid-cols-[repeat(auto-fit,minmax(auto,320px))] grid-cols-[repeat(auto-fit,minmax(auto,320px))]  md:gap-10 gap-20 md:justify-start justify-center ">
            {templatesData.map((item, index) => (
              <div
                key={index}
                role="button"
                onClick={() => handleSelectTemplate(index)}
                className="h-[50vh]"
              >
                {item.component}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="w-1/2">{TemplateComponent}</div> */}
        <div
          className="md:w-[45%] md:h-[80vh] overflow-auto  hidden md:flex border-2 border-cyan-600 rounded"
          ref={printRef}
        >
          {TemplateComponent}
        </div>
      </div>
      <div className="h-20 md:hidden flex fixed bottom-0 z-50 w-full justify-center items-center rounded-t-[20px] bg-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.20)]">
        <button
          className="py-3 px-4 bg-cyan-600  text-white font-semibold rounded "
          onClick={() => open()}
        >
          Preview template
        </button>
        <ModalCard opened={opened} close={close} open={open}>
          <div className="h-[70vh] " ref={printRef}>
            {TemplateComponent}
          </div>
        </ModalCard>
      </div>
      {/* <button
        onClick={() =>
          router.push({
            pathname: "/custom-template/certification",
            query: { template: selectTemplate },
          })
        }
      >
        Bacc
      </button> */}
    </section>
  );
};

export default PreviewTemplate;
