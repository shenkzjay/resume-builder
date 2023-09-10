"use client";

import { RootState } from "@/states/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import htmr from "htmr";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { updateSkills } from "@/states/reducers/slice/textUpdateSlice";

const IndoTemplate: React.FC = () => {
  const updatePersonalDetails = useSelector(
    (state: RootState) => state.updateTextName.personalDetails
  );

  const careerObjective = useSelector(
    (state: RootState) => state.updateTextName.objective
  );

  const socailLinks = useSelector(
    (state: RootState) => state.updateTextName.socialLinks
  );

  const workExperience = useSelector(
    (state: RootState) => state.updateTextName.workExperience
  );

  const updateSkills = useSelector(
    (state: RootState) => state.updateTextName.skills
  );

  const educationHistory = useSelector(
    (state: RootState) => state.updateTextName.educationHistory
  );

  const updateProject = useSelector(
    (state: RootState) => state.updateTextName.project
  );

  const certification = useSelector(
    (state: RootState) => state.updateTextName.certification
  );

  return (
    <section className=" bg-white rounded overflow-auto template h-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition ease-in-out hover:outline hover:outline-cyan-500 duration-300 hover:shadow-2xl hover:shadow-slate-500/10">
      {/**left section */}
      <div className="p-4 space-y-4" role="button">
        {/**Name section */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold leading-none">
            {updatePersonalDetails.name
              ? updatePersonalDetails.name
              : "Olajide Seun"}
          </h2>
          <p className="font-bold text-[9px] mt-2">
            {updatePersonalDetails.profession
              ? updatePersonalDetails.profession
              : "Frontend developer"}
          </p>
          <div className="text-[9px] flex flex-wrap justify-center items-center">
            <div>
              {" "}
              {updatePersonalDetails.state
                ? updatePersonalDetails.state
                : "State"}
              ,{" "}
              {updatePersonalDetails.country
                ? updatePersonalDetails.country
                : "Your Country"}
              , |{" "}
            </div>
            <p>
              {" "}
              &nbsp;
              {updatePersonalDetails.phone
                ? updatePersonalDetails.phone
                : "070XXXXXXXX"}{" "}
              |
            </p>
            <p>
              &nbsp;
              {updatePersonalDetails.email
                ? updatePersonalDetails.email
                : "no_reply@gmail.com"}
            </p>
          </div>
          <div className="text-[9px]">
            {/**Skills */}

            <article>
              <div>
                <div className="flex flex-wrap mt-1 items-center justify-center">
                  <div className="flex gap-3 text-[8px]">
                    {socailLinks.linkedIn !== "" && (
                      <div className="flex gap-1">
                        <div className="font-semibold">LinkedIn:</div>
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
                        <div className="font-semibold">Twitter:</div>
                        <p>
                          {socailLinks.twitter
                            ? socailLinks.twitter
                            : "www.twitter.com/10233324"}
                        </p>
                      </div>
                    )}

                    {socailLinks.github !== "" && (
                      <div className="flex gap-1">
                        <div className="font-semibold">Github:</div>
                        <p>
                          {socailLinks.github
                            ? socailLinks.github
                            : "www.github.com/shenkzjay"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/**objective summary */}
        <div className="flex flex-col justify-center">
          <div className=" flex font-extrabold text-[9px] text-black items-center justify-center mb-2">
            PROFESSIONAL SUMMARY
          </div>
          <hr className="border-[0,5px] border-slate-500 mb-2" />
          <p className="text-[9px]">
            {careerObjective
              ? htmr(careerObjective)
              : " A pace setter in the industry with a cos my stubborn heart always rosms to places i cannot find and sometimes i hpe it hudt dtays in a placr where i coild give it the restir deserves"}
          </p>
        </div>

        {/**skill */}
        <div className="">
          <h2 className="flex font-extrabold leading-none uppercase text-[9px] w-full justify-center mb-2">
            Skills
          </h2>
          <hr className="border-[0.5px] border-slate-500 mb-2" />
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
        <article>
          <div>
            <header className="mt-4">
              <h2 className="flex text-[9px] leading-none font-extrabold text-black justify-center">
                EXPERIENCE
              </h2>

              <hr className="border-[0.5px] border-slate-500 my-2" />
            </header>

            {workExperience.map((item, index) => (
              <div key={index}>
                <div className="mt-2 mb-2 flex flex-col">
                  <div className="text-[11px]">
                    <b>
                      {item.job_title ? item.job_title : "Job Title"}
                      ,&nbsp;
                    </b>{" "}
                    {item.company_name ? item.company_name : "Company"} -{" "}
                    <i>{item.country ? item.country : "Location"}</i>
                  </div>
                  <div className="text-[8px] uppercase">
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
                </div>

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
        </article>

        {/**Education */}
        <article>
          <div>
            <header className="mt-4">
              <h2 className="flex text-[9px] text-center font-extrabold text-black justify-center">
                EDUCATION
              </h2>
              <hr className="border-[0.5px] border-slate-500 my-2" />
            </header>
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
              </div>
            ))}
          </div>
        </article>

        {/**Projects */}
        {updateProject.length > 0 && (
          <article className="space-y-2">
            <div className="space-y-2">
              <header>
                <h2 className="text-[9px] font-extrabold text-black text-center">
                  PROJECTS
                </h2>
                <hr className="border-[0.5px] border-slate-500 my-2" />
              </header>
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
            </div>
          </article>
        )}

        {/**Certification */}
        <article>
          <h2 className=" text-center font-extrabold leading-none uppercase text-[9px] text-black">
            CERTIFICATION
          </h2>
          <hr className="border-[0,5px] border-slate-500 my-2" />
          {certification.map((item, index) => (
            <div key={index}>
              <ul className="text-[9px] space-y-2 ml-0">
                <li>{item.value ? item.value : "Lorem ipsum dolor"}</li>
              </ul>
            </div>
          ))}
        </article>
      </div>

      {/**right section */}
      {/* <div className="w-1/3 p-4 bg-slate-100"> */}
      {/**Address */}
      {/* <div className="text-[9px]">
          <h2 className="font-extrabold mb-2 text-cyan-600">ADDRESS</h2>
          <p> Your Country, State</p>
          <p>070XXXXXXXX</p>
          <p>no_reply@gmail.com</p>
        </div> */}

      {/* <article>
          <div>
            <h2 className="text-[9px] font-extrabold text-cyan-600 mt-4 mb-2">
              SKILLS
            </h2>
            <ul className="space-y-2 text-[9px]">
              <li>Lorem ipsum dolor sit</li>
              <li>Lorem ipsum dolor sit</li>
              <li>Lorem ipsum dolor sit</li>
            </ul>
          </div>
        </article> */}

      {/* <article>
          <div>
            <h2 className="text-[9px] font-extrabold text-cyan-600 mt-4 mb-2">
              CERTIFICATION
            </h2>
            <ul className="text-[9px] space-y-2 ">
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
            </ul>
          </div>
        </article>
      </div> */}
    </section>
  );
};

export default IndoTemplate;
