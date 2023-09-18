import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { templatesData } from "@/components/templates";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { updateSeletedTemplate } from "@/states/reducers/slice/textUpdateSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/states/store";
import Navbar from "@/components/navbar";

const SelectTemplate = () => {
  //store the selected template in state
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const router = useRouter();

  const dispatch = useDispatch();

  const seleted_template = useSelector(
    (state: RootState) => state.updateTextName.seletedTemplate
  );

  const handleSelectTemplate = (index: number) => {
    setSelectedTemplate(index);
    dispatch(updateSeletedTemplate(index));
    router.push({
      pathname: "/custom-template/update-template",
    });
  };

  return (
    <section className="bg-white">
      <Head>
        <title>Choose template</title>
      </Head>
      <div className="md:container md:mx-auto space-y-10 pb-20 md:pb-0">
        <Navbar />

        <div className="">
          <h1 className=" text-4xl font-extrabold mx-6 md:mx-0">
            Select a template
          </h1>
        </div>
        <div
          className="grid md:grid-cols-[repeat(auto-fit,minmax(auto,314px))] gap-20 md:gap-10 w-full"
          data-testid="templates"
        >
          {templatesData.map((template, index) => (
            <div
              key={index}
              role="button"
              onClick={() => handleSelectTemplate(index)}
              className={`templar${
                selectedTemplate === index
                  ? "border-cyan-500"
                  : "border-slate-300"
              } max-h-[50vh] mx-6 md:mx-0`}
            >
              {template.component}
              <p className="text-center mt-6">{template.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectTemplate;
