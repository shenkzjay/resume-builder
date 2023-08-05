import React from "react";
import localForage from "localforage";
import { useState } from "react";
import { useRouter } from "next/router";
import { templatesData } from "@/components/templates";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { updateSeletedTemplate } from "@/states/reducers/slice/textUpdateSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/states/store";

const SelectTemplate = () => {
  //store the selected template in state
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const router = useRouter();

  const dispatch = useDispatch();

  console.log(selectedTemplate);

  const seleted_template = useSelector(
    (state: RootState) => state.updateTextName.seletedTemplate
  );

  const handleSelectTemplate = (index: number) => {
    setSelectedTemplate(index);
    dispatch(updateSeletedTemplate(index));
    router.push({
      pathname: "/custom-template/update-template",
      query: { template: selectedTemplate },
    });
  };

  return (
    <section className="bg-white">
      <div className="md:w-[95vw] md:mx-auto space-y-10 md:scale-95 ">
        <Head>
          <title>Choose template</title>
        </Head>
        <div className="pt-10">
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
                  ? "border-cyan-500"
                  : "border-slate-300"
              } max-h-[60vh]`}
            >
              {template.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectTemplate;
