import { RootState } from "@/states/store";
import { useSelector } from "react-redux";

const FresherTemplate: React.FC = () => {
  const updateTextName = useSelector(
    (state: RootState) => state.updateTextName.value
  );

  const updateSkills = useSelector(
    (state: RootState) => state.updateTextName.skills
  );

  const workExperience = useSelector(
    (state: RootState) => state.updateTextName.workExperience
  );

  const educationHistory = useSelector(
    (state: RootState) => state.updateTextName.educationHistory
  );

  const certification = useSelector(
    (state: RootState) => state.updateTextName.certification
  );

  return (
    <section className="p-4 bg-white overflow-auto template h-full hover:outline hover:outline-cyan-500  drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)] ease-in-out transition rounded duration-300 hover:shadow-slate-500/10 hover:shadow-2xl">
      <div role="button" className="space-y-4">
        {/**Name section */}
        <section className="flex justify-between">
          <div>
            <h2 className="text-2xl font-extrabold">{` ${
              updateTextName ? updateTextName : "Olajide Seun"
            }`}</h2>

            {/**address */}
            <div className="text-[9px]">
              <p className="font-bold">Frontend developer</p>
              <p> Your Country, State</p>
              <p>070XXXXXXXX</p>
              <p>no_reply@gmail.com</p>
            </div>
          </div>

          {/**address */}
          <div className="text-[9px]">
            <h2 className="font-extrabold mb-2 text-cyan-600">ADDRESS</h2>
            <p> Your Country, State</p>
            <p>070XXXXXXXX</p>
            <p>no_reply@gmail.com</p>
          </div>
        </section>
        {/**objective summary */}
        <div>
          <h2 className=" font-extrabold leading-none uppercase text-[9px] text-cyan-600 underline-offset-4 underline decoration-[2.5px]">
            Professional summary
          </h2>
          <hr className="w-full border-[0.5px] border-cyan-300 mt-1 mb-2" />
          <p className="text-[9px]">
            A pace setter in the industry with a cos my stubborn heart always
            rosms to places i cannot find and sometimes i hpe it hudt dtays in a
            placr where i coild give it the restir deserves
          </p>
        </div>
        {/**Skills */}
        <div>
          <h2 className=" font-extrabold leading-none uppercase text-[9px] text-cyan-600 underline-offset-4 underline decoration-[2.5px]">
            Skills
          </h2>
          <hr className="w-full border-[0.5px] border-cyan-300 mt-1 mb-2" />
          <div className="flex">
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
            <h2 className="uppercase text-[9px] font-extrabold text-cyan-600 underline-offset-4 underline decoration-[2.5px]">
              WORK EXPERIENCE
            </h2>
            <hr className="w-full border-[0.5px] border-cyan-300 mt-[1.5px] mb-2" />
            {workExperience.map((item, index) => (
              <div key={index}>
                <header className="">
                  <div className="mt-2 mb-2 flex justify-between items-center">
                    <p className="text-[11px]">
                      <b>{item.companyName ? item.companyName : "Company"},</b>{" "}
                      {item.country ? item.country : "Location"} -{" "}
                      <i>{item.jobTitle ? item.jobTitle : "JobTitle"}</i>
                    </p>
                    <p className="text-[8px] uppercase">MONTH 20XX - PRESENT</p>
                  </div>
                </header>
                <div>
                  <ul className="text-[9px] space-y-1 ml-4 list-disc">
                    <li className="">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh.
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
        {/**Education history */}
        <div>
          <h2 className="text-[9px] font-extrabold text-cyan-600 underline-offset-4 underline decoration-[2.5px]">
            EDUCATION
          </h2>
          <hr className="w-full border-[0.5px] border-cyan-300 mt-[2px] mb-2" />
          {educationHistory.map((item, index) => (
            <div key={index}>
              <div className="mt-2 mb-1 flex justify-between items-center">
                <p className="text-[11px]">
                  <b>{item.schoolName ? item.schoolName : "School name"},</b>{" "}
                  Location -{" "}
                  <i>{item.degreeTitle ? item.degreeTitle : "Degree"}</i>
                </p>
                <p className="text-[8px]"> MONTH 20XX - PRESENT</p>
              </div>
              <div>
                <ul className="text-[9px]">
                  <li>
                    {item.course
                      ? item.course
                      : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh."}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/**certification */}
        <div>
          <h2 className="text-[9px] font-extrabold text-cyan-600 mt-4 underline-offset-4 underline decoration-[2.5px]">
            CERTIFICATION
          </h2>
          <hr className="w-full border-[0.5px] border-cyan-300 mt-[1.5px] mb-2" />
          {certification.map((item, index) => (
            <div key={index}>
              <ul className="text-[9px] space-y-2 ">
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
