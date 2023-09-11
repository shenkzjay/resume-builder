"use client";

import { RootState } from "@/states/store";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import htmr from "htmr";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

const FresherTemplate: React.FC = () => {
  const updateTextName = useSelector(
    (state: RootState) => state.updateTextName.personalDetails
  );

  const updateSkills = useSelector(
    (state: RootState) => state.updateTextName.skills
  );

  const workExperience = useSelector(
    (state: RootState) => state.updateTextName.workExperience
  );

  console.log("updates", workExperience);

  const educationHistory = useSelector(
    (state: RootState) => state.updateTextName.educationHistory
  );

  const certification = useSelector(
    (state: RootState) => state.updateTextName.certification
  );

  const updateObjective = useSelector(
    (state: RootState) => state.updateTextName.objective
  );

  const socailLinks = useSelector(
    (state: RootState) => state.updateTextName.socialLinks
  );

  const updateProject = useSelector(
    (state: RootState) => state.updateTextName.project
  );

  return (
    <section className="p-4 bg-white overflow-auto template h-full hover:outline hover:outline-cyan-500  drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)] ease-in-out transition rounded duration-300 hover:shadow-slate-500/10 hover:shadow-2xl">
      <div role="button" className="space-y-4">
        {/**Name section */}
        <section className="flex justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold">
              {updateTextName.name ? updateTextName.name : "Olajide Seun"}
            </h2>

            {/**address */}
            <div className="text-[9px]">
              <p className="font-bold">
                {updateTextName.profession
                  ? updateTextName.profession
                  : "Frontend developer"}
              </p>
              <div>
                {" "}
                {updateTextName.country
                  ? updateTextName.country
                  : "Your Country"}
                ,{updateTextName.state ? updateTextName.state : "State"}
              </div>
              <p>
                {updateTextName.phone ? updateTextName.phone : "070XXXXXXXX"}
              </p>
              <p>
                {updateTextName.email
                  ? updateTextName.email
                  : "no_reply@gmail.com"}
              </p>
            </div>
          </div>

          {/**address */}
          <div className="text-[9px]">
            {socailLinks.linkedIn !== "" && (
              <div className="flex gap-1">
                <p className=" font-semibold text-cyan-600">LinkedIn:</p>
                <p>
                  {" "}
                  {socailLinks.linkedIn
                    ? socailLinks.linkedIn
                    : "www.linkedin.com/10233324d"}
                </p>
              </div>
            )}

            {socailLinks.twitter !== "" && (
              <div className="flex gap-1">
                <p className=" font-semibold text-cyan-600">Twitter:</p>
                <p>
                  {socailLinks.twitter
                    ? socailLinks.twitter
                    : "www.twitter.com/10233324"}
                </p>
              </div>
            )}

            {socailLinks.github !== "" && (
              <div className="flex gap-1">
                <p className=" font-semibold text-cyan-600">Github:</p>
                <p>
                  {socailLinks.github
                    ? socailLinks.github
                    : "www.github.com/shenkzjay"}
                </p>
              </div>
            )}
          </div>
        </section>
        {/**objective summary */}
        <div>
          <h2 className="summary font-extrabold leading-none uppercase text-[9px] text-cyan-600">
            Professional summary
          </h2>
          <div className="relative mt-[12px] mb-1">
            <div className="w-32 h-1 bg-cyan-600 absolute bottom-0 "></div>
            <hr className="w-full border-[.5px] border-cyan-600" />
          </div>
          <p className="text-[9px]">
            {updateObjective
              ? htmr(updateObjective)
              : " A pace setter in the industry with a cos my stubborn heart always rosms to places i cannot find and sometimes i hpe it hudt dtays in a placr where i coild give it the restir deserves"}
          </p>
        </div>
        {/**Skills */}
        <div>
          <h2 className=" font-extrabold leading-none uppercase text-[9px] text-cyan-600">
            Skills
          </h2>
          <div className="relative mt-[12px] mb-1">
            <div className="w-[34px] h-1 bg-cyan-600 absolute bottom-0 "></div>
            <hr className="w-full border-[.5px] border-cyan-600" />
          </div>
          <div className="flex  flex-wrap">
            {updateSkills.map((skills, index) => (
              <div key={index} className="text-[9px]">
                <p>
                  {`${skills.value}${
                    index !== updateSkills.length - 1 ? " |" : ""
                  }`}
                  &nbsp;
                </p>
              </div>
            ))}
          </div>
        </div>
        {/**Work experience */}
        {workExperience.length > 0 && (
          <div>
            <h2 className="uppercase text-[9px] font-extrabold text-cyan-600">
              WORK EXPERIENCE
            </h2>
            <div className="relative mt-[12px] mb-1">
              <div className="w-[93px] h-1 bg-cyan-600 absolute bottom-0 "></div>
              <hr className="w-full border-[.5px] border-cyan-600" />
            </div>
            {workExperience.map((item, index) => (
              <div key={index}>
                <header className="">
                  <div className="my-2 flex justify-between items-center">
                    <div className="text-[11px]">
                      <b>
                        {item.job_title ? item.job_title : "JobTitle"},&nbsp;
                      </b>
                      {item.company_name ? item.company_name : "Company"} -{" "}
                      <i>{item.country ? item.country : "Location"} </i>
                    </div>
                    {!item.checkboxstatus ? (
                      <div className="text-[8px] uppercase">
                        {item.start_month ? item.start_month : "MONTH"}{" "}
                        {item.start_year ? item.start_year : "20XX"} -{" "}
                        {item.end_month ? item.end_month : "MONTH"}{" "}
                        {item.end_year ? item.end_year : "20XX"}
                      </div>
                    ) : (
                      <div className="text-[8px] uppercase">
                        {item.start_month ? item.start_month : "MONTH"}{" "}
                        {item.start_year ? item.start_year : "20XX"} - PRESENT
                      </div>
                    )}
                  </div>
                </header>
                <div>
                  <ul className="text-[9px] space-y-1 ml-4">
                    <li className="">
                      {item.description
                        ? htmr(item.description)
                        : " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh."}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
        {/**Education history */}
        {educationHistory.length > 0 && (
          <div>
            <h2 className="text-[9px] font-extrabold text-cyan-600 ">
              EDUCATION
            </h2>
            <div className="relative mt-[12px] mb-1">
              <div className="w-[56px] h-1 bg-cyan-600 absolute bottom-0 "></div>
              <hr className="w-full border-[.5px] border-cyan-600" />
            </div>
            {educationHistory.map((item, index) => (
              <div key={index}>
                <div className="mt-2 mb-1 flex justify-between items-start">
                  <div className="">
                    <div className="text-[11px] flex flex-col">
                      <div className="flex">
                        <b>
                          {item.school_name ? item.school_name : "School name"}
                          ,&nbsp;
                        </b>{" "}
                        {item.school_location
                          ? item.school_location
                          : "Location"}{" "}
                      </div>
                    </div>
                    <div className="flex flex-col  justify-between">
                      <div className="text-[11px]">
                        <i>
                          {item.degree_program ? item.degree_program : "B.Sc"} -{" "}
                          {item.field_of_study
                            ? item.field_of_study
                            : "Field of study"}
                        </i>
                      </div>

                      <p className="text-[11px]"></p>
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px]">
                      {" "}
                      {item.graduation_month
                        ? item.graduation_month
                        : "MONTH"}{" "}
                      {item.graduation_year ? item.graduation_year : "20XX"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/**Projects */}
        {updateProject.length > 0 && (
          <article className="space-y-2">
            <div className="space-y-2">
              <header>
                <h2 className="text-[9px] font-extrabold my-2 text-cyan-600">
                  PROJECTS
                </h2>
                <div className="relative mt-[12px] mb-1">
                  <div className="w-[50px] h-1 bg-cyan-600 absolute bottom-0 "></div>
                  <hr className="w-full border-[.5px] border-cyan-600" />
                </div>
              </header>
            </div>

            {updateProject.map((item, index) => (
              <div key={index}>
                <header>
                  <div className="text-[11px]">
                    <b>
                      {item.projectName ? item.projectName : "Project name"}
                    </b>{" "}
                    -{" "}
                    <i>
                      {item.projectLink ? item.projectLink : "Project link"}
                    </i>
                  </div>
                </header>
                <div>
                  <ul className="text-[9px]">
                    <li>
                      {item.projectDescription
                        ? item.projectDescription
                        : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh."}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </article>
        )}

        {/**certification */}
        <div>
          <h2 className="text-[9px] font-extrabold text-cyan-600 mt-4">
            CERTIFICATION
          </h2>
          <div className="relative mt-[12px] mb-1">
            <div className="w-[74px] h-1 bg-cyan-600 absolute bottom-0 "></div>
            <hr className="w-full border-[.5px] border-cyan-600" />
          </div>
          {certification.map((item, index) => (
            <div key={index}>
              <ul className="text-[9px] space-y-2 ml-0">
                <li>{item.value ? item.value : "Lorem ipsum dolor"}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FresherTemplate;
