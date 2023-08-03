import { useSelector } from "react-redux";
import { RootState } from "@/states/store";
import parse from "html-react-parser";

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

  console.log(workExperience);

  const educationHistory = useSelector(
    (state: RootState) => state.updateTextName.educationHistory
  );

  const certification = useSelector(
    (state: RootState) => state.updateTextName.certification
  );

  const updateObjective = useSelector(
    (state: RootState) => state.updateTextName.objective
  );

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
            <div className="font-bold text-[9px]">
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
          <article>
            <div>
              <header className="mt-4">
                <h2 className="uppercase text-[9px] font-extrabold text-cyan-600">
                  EXPERIENCE
                </h2>
              </header>
              {workExperience.map((item, index) => (
                <div key={index}>
                  <div className="mt-4 mb-2">
                    <div className="text-[11px]">
                      <b>
                        {item.company_name ? item.company_name : "Company name"}
                        ,
                      </b>{" "}
                      {item.country ? item.country : "Location"} -{" "}
                      <i>{item.job_title ? item.job_title : "Job title"}</i>
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
                    <div className="text-[9px] space-y-2 pl-3">
                      <div className="">
                        {item.description
                          ? parse(item.description)
                          : " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh."}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/**Education */}
          <article>
            {educationHistory.map((item, index) => (
              <div key={index}>
                <header className="mt-4">
                  <h2 className="text-[9px] font-extrabold text-cyan-600">
                    EDUCATION
                  </h2>
                </header>
                <div className="mt-4 mb-2">
                  <p className="text-[11px]">
                    <b>
                      {item.school_name ? item.school_name : "School name"},
                    </b>{" "}
                    {item.school_location ? item.school_location : "Location"} -{" "}
                    <i>
                      {item.degree_program ? item.degree_program : "Degree"}
                    </i>
                  </p>
                  <p className="text-[8px]"> MONTH 20XX - PRESENT</p>
                </div>

                <div>
                  <ul className="text-[9px]">
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh.
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </article>

          {/**Projects */}
          <article className="space-y-2">
            <div className="space-y-2">
              <header>
                <h2 className="text-[9px] font-extrabold my-4 text-cyan-600">
                  PROJECTS
                </h2>
                <p className="text-[11px]">
                  <b>Project name,</b> - <i>Description</i>
                </p>
              </header>
              <div className="">
                <ul className="text-[9px]">
                  <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <header>
                <p className="text-[11px]">
                  <b>Project name,</b> - <i>Description</i>
                </p>
              </header>
              <div>
                <ul className="text-[9px]">
                  <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/**right section */}
        <div className="w-1/3 py-4 px-2 bg-slate-100 h-[120vh]">
          {/**Address */}
          <div className="text-[9px]">
            <h2 className="font-extrabold mb-2 text-cyan-600">ADDRESS</h2>
            <p>
              {" "}
              {updateTextName.state ? updateTextName.state : "State"},
              {updateTextName.country ? updateTextName.country : "Your Country"}
            </p>
            <p>{updateTextName.phone ? updateTextName.phone : "070XXXXXXXX"}</p>
            <p>
              {updateTextName.email
                ? updateTextName.email
                : "no_reply@gmail.com"}
            </p>
          </div>

          <article>
            <div>
              <h2 className="text-[9px] font-extrabold text-cyan-600 mt-4 mb-2">
                SKILLS
              </h2>
              {updateSkills.map((skills, index) => (
                <div key={index} className="text-[9px] flex">
                  <ul className="flex">
                    <li className="">
                      {`${skills.value}${
                        index !== updateSkills.length - 1 ? "," : ""
                      }`}
                      &nbsp;
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article>
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
        </div>
      </div>
    </section>
  );
};

export default DefaultTemplate;
