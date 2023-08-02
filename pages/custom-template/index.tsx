import React from "react";
import localForage from "localforage";
import { useState } from "react";
import { useRouter } from "next/router";
import { templatesData } from "@/components/templates";

const SelectTemplate = () => {
  //store the selected template in state
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const router = useRouter();

  console.log(selectedTemplate);

  const handleSelectTemplate = (index: number) => {
    setSelectedTemplate(index);
    router.push({
      pathname: "/custom-template/update-template",
      query: { template: selectedTemplate },
    });
  };

  return (
    <section className="md:w-[95vw] md:mx-auto space-y-10 md:scale-95">
      <div className="mt-20">
        <h1 className="text-center text-4xl">Choose a template</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(auto,380px))] gap-20 md:gap-12 justify-center  md:scale-75 origin-top mx-6 md:mx-0">
        {templatesData.map((template, index) => (
          <div
            key={index}
            role="button"
            onClick={() => handleSelectTemplate(index)}
            className={`${
              selectedTemplate === index
                ? "border-green-500"
                : "border-slate-300"
            } max-h-[65vh]`}
          >
            {template.component}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectTemplate;
