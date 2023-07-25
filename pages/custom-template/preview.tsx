import React, { useState } from "react";
import { templatesData } from "@/components/templates";
import { useRouter } from "next/router";

const PreviewTemplate = () => {
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

  return (
    <section className="flex">
      <div className="w-1/2">
        {templatesData.map((item, index) => (
          <div role="button" onClick={() => handleSelectTemplate(index)}>
            {item.component}
          </div>
        ))}
      </div>
      {/* <div className="w-1/2">{TemplateComponent}</div> */}
      <div className="w-1/2">{select_template}</div>
    </section>
  );
};

export default PreviewTemplate;
