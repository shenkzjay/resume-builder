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
    <section>
      <div
        className={"p-4 border space-y-4 hover:border-green-500 "}
        role="button"
      >
        {/**Name section */}
        <div>
          <h2>{` ${
            updateTextName ? updateTextName : "Olajide Seun ojo fresher"
          }`}</h2>
        </div>

        {/**address */}
        <div>
          <p>somewhere beside ya!</p>
        </div>

        {/**Skills */}
        <div>
          <p>Skills</p>
          {updateSkills.map((skills, index) => (
            <div key={index}>{skills.value}</div>
          ))}
        </div>

        {/**Work experience */}
        {workExperience.length > 0 && (
          <div>
            <p>Work experience</p>
            {workExperience.map((item, index) => (
              <div key={index}>
                {item.jobTitle} {item.companyName} {item.country}
              </div>
            ))}
          </div>
        )}

        {/**Education history */}
        {educationHistory.length > 0 && (
          <div>
            <p>Education History</p>
            {educationHistory.map((item, index) => (
              <div key={index}>
                {item.schoolName} {item.degreeTitle} {item.course}
              </div>
            ))}
          </div>
        )}

        {/**certification */}
        <div>
          {certification.map((item, index) => (
            <div key={index}>{item.value}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FresherTemplate;
