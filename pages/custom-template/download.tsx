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

const DownloadPage = () => {
  const printRef = useRef<HTMLDivElement | null>(null);
  const [opened, { open, close }] = useDisclosure();
  const router = useRouter();

  const selected_template = useSelector(
    (state: RootState) => state.updateTextName.seletedTemplate
  );

  let TemplateComponent;

  if (selected_template !== null) {
    TemplateComponent = templatesData[selected_template]?.component;
  } else {
    TemplateComponent = <div>No template selected</div>;
  }

  const [selectTemplate, setSelectTemplate] = useState<number | null>(
    selected_template
  );

  const select_template = templatesData[selectTemplate]?.component ?? (
    <div>{TemplateComponent}</div>
  );
  console.log(select_template);

  const handleSelectTemplate = (index: number) => {
    setSelectTemplate(index);
  };

  const handleDownloadPDF = async () => {
    try {
      if (!printRef.current) return;
      const canvas = await html2canvas(printRef.current);
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <section className="md:mx-auto md:w-[90vw]">
      <div className="my-10 flex flex-col md:flex-row justify-between mx-6 md:mx-0">
        <p className="font-bold text-4xl">RESUME</p>
        <div className="flex gap-10 ">
          <ExportButton onClick={handleDownloadPDF} />
        </div>
      </div>
      <div className="flex justify-center gap-20">
        {/* <div className="w-1/2">{TemplateComponent}</div> */}
        <div
          className="md:h-[842px] md:w-[592px] h-[80vh] overflow-auto flex drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)] pb-20 rounded mx-6 md:mx-0"
          ref={printRef}
        >
          {select_template}
        </div>
      </div>
      {/* <div className="h-20 md:hidden flex fixed bottom-0 z-50 w-full justify-center items-center rounded-t-[20px] bg-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.20)]">
        <button
          className="py-3 px-4 bg-cyan-600  text-white font-semibold rounded "
          onClick={() => open()}
        >
          Preview template
        </button>
        <ModalCard opened={opened} close={close} open={open}>
          <button onClick={handleDownloadPDF}>
            <IconDownload size={16} />
          </button>
          <div className="h-[70vh] " ref={printRef}>
            {select_template}
          </div>
        </ModalCard>
      </div> */}
    </section>
  );
};

export default DownloadPage;
