import { useSelector } from "react-redux";
import { RootState } from "@/states/store";
import parse from "html-react-parser";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

const DefaultTemplate: React.FC = () => {
  const updateTextName = useSelector(
    (state: RootState) => state.updateTextName.personalDetails
  );

  const updateSkills = useSelector(
    (state: RootState) => state.updateTextName.skills
  );

  const workExperience = useSelector(
    (state: RootState) => state.updateTextName.workExperience
  );

  console.log(workExperience.map((item) => item.description));

  const educationHistory = useSelector(
    (state: RootState) => state.updateTextName.educationHistory
  );

  const certification = useSelector(
    (state: RootState) => state.updateTextName.certification
  );

  const updateObjective = useSelector(
    (state: RootState) => state.updateTextName.objective
  );

  const updateProject = useSelector(
    (state: RootState) => state.updateTextName.project
  );

  const socailLinks = useSelector(
    (state: RootState) => state.updateTextName.socialLinks
  );

  console.log();

  return (
    <section className=" bg-white overflow-auto template h-full hover:outline hover:outline-cyan-500 drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)] ease-in-out transition rounded duration-300 hover:shadow-slate-500/10 hover:shadow-2xl">
      <div className="flex h-full">
        {/**left section */}
        <div className="p-4 space-y-4 w-2/3" role="button">
          {/**Name section */}
          <div>
            <h2 className="text-2xl font-bold leading-none">
              {updateTextName.name ? updateTextName.name : "Olajide Seun"}
            </h2>
            <div className="font-bold text-[9px] mt-1">
              {updateTextName.profession
                ? updateTextName.profession
                : "Frontend developer"}
            </div>
          </div>

          {/**objective summary */}
          <div>
            <h2 className=" font-extrabold leading-none uppercase text-[9px] my-2 text-cyan-600">
              Professional summary
            </h2>
            <div className="text-[9px]">
              {updateObjective
                ? parse(updateObjective)
                : " A pace setter in the industry with a cos my stubborn heart always rosms to places i cannot find and sometimes i hpe it hudt dtays in a placr where i coild give it the restir deserves"}
            </div>
          </div>

          {/**Work experience */}
          {workExperience.length > 0 && (
            <article>
              <div>
                <header className="mt-4">
                  <h2 className="uppercase text-[9px] font-extrabold text-cyan-600">
                    EXPERIENCE
                  </h2>
                </header>
                {workExperience.map((item, index) => (
                  <div key={index}>
                    <div className="my-2">
                      <div className="text-[11px]">
                        <b>{item.job_title ? item.job_title : "Job title"},</b>{" "}
                        {item.company_name ? item.company_name : "Company name"}{" "}
                        -&nbsp;
                        {item.country ? item.country : "Location"}{" "}
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

                    <div className="">
                      <div className="text-[9px] space-y-1 pl-3">
                        <ul className="">
                          <li>
                            {item.description
                              ? parse(item.description)
                              : " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh."}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          )}

          {/**Education */}
          {educationHistory.length > 0 && (
            <article>
              <div>
                <header className="mt-2">
                  <h2 className="text-[9px] font-extrabold text-cyan-600">
                    EDUCATION
                  </h2>
                </header>
                {educationHistory.map((item, index) => (
                  <div className="mt-2 mb-2" key={index}>
                    <div className="text-[11px]">
                      <b>
                        {item.school_name ? item.school_name : "School name"} -
                      </b>{" "}
                      {item.school_location ? item.school_location : "Location"}{" "}
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

                      <div className="text-[9px]">
                        {" "}
                        {item.graduation_month
                          ? item.graduation_month
                          : "MONTH"}{" "}
                        {item.graduation_year ? item.graduation_year : "20XX"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          )}

          {/**Projects */}
          {updateProject.length > 0 && (
            <article className="space-y-2">
              <div className="space-y-2">
                <header>
                  <h2 className="text-[9px] font-extrabold my-2 text-cyan-600">
                    PROJECTS
                  </h2>
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
        </div>

        {/**right section */}
        <div className="w-1/3 pt-4 pb-2 px-2 bg-slate-100 h-[120vh]">
          {/**Address */}
          <div className="text-[9px]">
            <h2 className="font-extrabold mb-2 text-cyan-600">ADDRESS</h2>
            <div>
              {" "}
              {updateTextName.state ? updateTextName.state : "State"},
              {updateTextName.country ? updateTextName.country : "Your Country"}
            </div>
            <p>{updateTextName.phone ? updateTextName.phone : "070XXXXXXXX"}</p>
            <p>
              {updateTextName.email
                ? updateTextName.email
                : "no_reply@gmail.com"}
            </p>
          </div>

          <article>
            <div>
              {(socailLinks.github !== "" ||
                socailLinks.linkedIn !== "" ||
                socailLinks.twitter !== "") && (
                <h2 className="text-[9px] font-extrabold text-cyan-600 mt-2 mb-2 uppercase">
                  Social links
                </h2>
              )}

              <div className="flex">
                <div className="flex flex-col text-[8px]">
                  {socailLinks.linkedIn !== "" && (
                    <div className="flex gap-1">
                      <IconBrandLinkedin size={12} />
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
                      <IconBrandTwitter size={12} />
                      <p>
                        {socailLinks.twitter
                          ? socailLinks.twitter
                          : "www.twitter.com/10233324"}
                      </p>
                    </div>
                  )}

                  {socailLinks.github !== "" && (
                    <div className="flex gap-1">
                      <IconBrandGithub size={12} />
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

          <article>
            <div>
              <h2 className="text-[9px] font-extrabold text-cyan-600 mt-2 mb-2">
                SKILLS
              </h2>
              <div className="flex flex-wrap">
                {updateSkills.map((skills, index) => (
                  <div key={index} className="text-[9px]">
                    {`${skills.value}${
                      index !== updateSkills.length - 1 ? "," : ""
                    }`}
                    &nbsp;
                  </div>
                ))}
              </div>
            </div>
          </article>

          {certification.length > 0 && (
            <article>
              <div>
                <h2 className="text-[9px] font-extrabold text-cyan-600 mt-2 mb-2">
                  CERTIFICATION
                </h2>
                {certification.map((item, index) => (
                  <ul className="text-[9px] space-y-1 " key={index}>
                    <li>{item.value ? item.value : "Lorem ipsum dolor"}</li>
                  </ul>
                ))}
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
};

export default DefaultTemplate;
