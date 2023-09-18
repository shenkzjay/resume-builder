import React, { useState, useRef } from "react";
import { templatesData } from "@/components/templates";
import { useRouter } from "next/router";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useSelector } from "react-redux";
import { RootState } from "@/states/store";
import { templateType } from "@/components/templates";
import Dropthatdown from "@/components/ui-components/toggleButton/dropthatdown";
import Navbar from "@/components/navbar";
import { BackButton } from "@/components/buttons";

const DownloadPage = () => {
  const printRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const selected_template = useSelector(
    (state: RootState) => state.updateTextName.seletedTemplate
  );

  let TemplateComponent: templateType["component"];

  if (selected_template !== null) {
    TemplateComponent = templatesData[selected_template]?.component;
  } else {
    TemplateComponent = <div>No template selected</div>;
  }

  const [selectTemplate, setSelectTemplate] = useState<number | null>(
    selected_template
  );

  const handleSelectTemplate = (index: number) => {
    setSelectTemplate(index);
  };

  const data = [
    { value: "Download pdf file", label: "Download pdf file" },
    { value: "Download doc file", label: "Download doc file" },
  ];

  const handleDownloadPDF = async () => {
    try {
      if (!printRef.current) return;

      html2canvas(printRef.current, { scale: 5 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg");

        const contentHeight = canvas.height;
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight, "", "FAST");

        pdf.save("resume.pdf");
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <section className="md:mx-auto md:w-[90vw]">
      <div className="non-printable mb-10 flex flex-col md:flex-row  justify-between">
        <Navbar />
        <div className="flex gap-10 md:items-center mx-6 md:mx-0 justify-between mt-6 md:mt-0">
          <div>
            <Dropthatdown
              buttonName="Click to download"
              data={data}
              onClick={handleDownloadPDF}
            />
          </div>
          <div className="flex justify-start">
            <BackButton
              name="Back"
              onClick={() =>
                router.push({
                  pathname: "/custom-template/preview",
                })
              }
            />
          </div>

          {/* <button onClick={handlePDF}>Click here to download</button>
          <a href="/api/downladpdf" download="resume.pdf">
            Click to download
          </a> */}
        </div>
      </div>
      <div className="flex justify-center gap-20">
        <div className="md:h-[892px] md:w-[592px] h-[80vh] overflow-auto flex drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)] pb-20 rounded mx-6 md:mx-0">
          <div ref={printRef} className="w-full">
            {TemplateComponent}
          </div>
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
