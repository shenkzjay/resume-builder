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
      query: { template: index },
    });
  };

  return (
    <section className="container mx-auto space-y-10">
      <div className="mt-20">
        <h1 className="text-center text-4xl">Choose a template</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,500px))] gap-6 justify-center">
        {templatesData.map((template, index) => (
          <div
            key={index}
            role="button"
            onClick={() => handleSelectTemplate(index)}
            className={`${
              selectedTemplate === index
                ? "border-green-500"
                : "border-slate-300"
            }`}
          >
            {template.component}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectTemplate;
