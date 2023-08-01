import React, { useState, useRef } from "react";
import { templatesData } from "@/components/templates";
import { useRouter } from "next/router";
import ToggleButton from "@/components/ui components/toggleButton/toggle-button";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const PreviewTemplate = () => {
  const printRef = useRef<null>(null);
  const router = useRouter();
  const selectedTemplate = Number(router.query.template);
  const TemplateComponent = templatesData[selectedTemplate]?.component ?? (
    <div>No template selected</div>
  );

  const [selectTemplate, setSelectTemplate] =
    useState<number>(selectedTemplate);

  const select_template = templatesData[selectTemplate]?.component ?? (
    <div>{TemplateComponent}</div>
  );
  console.log(select_template);

  const handleSelectTemplate = (index: number) => {
    setSelectTemplate(index);
  };

  const handleDownloadPDF = async () => {
    try {
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
    <section className="mx-auto w-[90vw]">
      <div className="my-10 flex justify-between ">
        <p className="font-bold text-4xl">RESUME</p>
        <ToggleButton onClick={handleDownloadPDF} />
      </div>
      <div className="flex gap-20">
        <div className="w-[55%] max-h-[70vh] overflow-auto p-1">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(auto,300px))] gap-10 justify-start">
            {templatesData.map((item, index) => (
              <div
                role="button"
                onClick={() => handleSelectTemplate(index)}
                className="w-full h-[50vh]"
              >
                {item.component}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="w-1/2">{TemplateComponent}</div> */}
        <div className="w-[45%] h-[80vh] overflow-auto p-1" ref={printRef}>
          {select_template}
        </div>
      </div>
    </section>
  );
};

export default PreviewTemplate;
