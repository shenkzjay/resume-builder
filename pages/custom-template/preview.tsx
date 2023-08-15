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
import Navbar from "@/components/navbar";

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
    <section className="md:mx-auto md:w-[85vw]">
      <div className=" flex mb-6 flex-col md:flex-row justify-between md:items-end">
        <Navbar />
        <div className="flex md:gap-10 justify-between mx-6 md:mx-0 mt-6 md:mt-0">
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
      <div className="flex gap-10">
        <div className="flex flex-col md:w-[55%] w-full">
          <div className="mb-10 text-4xl font-extrabold mx-6 md:mx-0">
            Change template
          </div>
          <div className="w-full md:max-h-[80vh] md:overflow-auto p-1 mb-48 scroll">
            <div className="grid md:grid-cols-[repeat(auto-fit,minmax(auto,280px))] w-full md:gap-8 gap-20 md:justify-start justify-center ">
              {templatesData.map((item, index) => (
                <div
                  key={index}
                  role="button"
                  onClick={() => handleSelectTemplate(index)}
                  className="h-[50vh] mx-6 md:mx-0"
                >
                  {item.component}
                  {/* <img src={item.image} /> */}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="w-1/2">{TemplateComponent}</div> */}

        <div
          className="md:w-[45%] md:h-[80vh] sticky top-24 overflow-auto hidden md:flex border-2 border-cyan-600 rounded"
          ref={printRef}
        >
          <div className="w-full">{TemplateComponent}</div>
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
