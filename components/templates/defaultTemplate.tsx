import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const DefaultTemplate: React.FC = () => {
  return (
    <section className=" bg-white overflow-auto template h-full hover:outline hover:outline-cyan-500 drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)] ease-in-out transition rounded duration-300 hover:shadow-slate-500/10 hover:shadow-2xl">
      <div className="flex h-full">
        {/**left section */}
        <div className="p-4 space-y-4 w-2/3" role="button">
          {/**Name section */}
          <div>
            <h2 className="text-2xl font-bold leading-none">Olajide Seun</h2>
          </div>

          {/**objective summary */}
          <div>
            <h2 className=" font-extrabold leading-none uppercase text-[9px] my-2 text-cyan-600">
              Professional summary
            </h2>
            <p className="text-[9px]">
              A pace setter in the industry with a cos my stubborn heart always
              rosms to places i cannot find and sometimes i hpe it hudt dtays in
              a placr where i coild give it the restir deserves
            </p>
          </div>

          {/**Work experience */}
          <article>
            <div>
              <header className="mt-4">
                <h2 className="uppercase text-[9px] font-extrabold text-cyan-600">
                  EXPERIENCE
                </h2>
                <div className="mt-4 mb-2">
                  <p className="text-[11px]">
                    <b>Company,</b> Location - <i>Job Title</i>
                  </p>
                  <p className="text-[8px] uppercase">MONTH 20XX - PRESENT</p>
                </div>
              </header>
              <div>
                <ul className="text-[9px] space-y-2 ml-4 list-disc">
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

            <div>
              <header className="my-2">
                <p className="text-[11px]">
                  <b>Company,</b> Location - <i>Job Title</i>
                </p>
                <p className="text-[8px]">MONTH 20XX - PRESENT</p>
              </header>
              <div>
                <ul className="text-[9px] space-y-2 ml-4 list-disc">
                  <li>
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

            <div>
              <header className="my-2">
                <p className="text-[11px]">
                  <b>Company,</b> Location - <i>Job Title</i>
                </p>
                <p className="text-[8px]">MONTH 20XX - PRESENT</p>
              </header>
              <div>
                <ul className="text-[9px] space-y-2 ml-4 list-disc">
                  <li>
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
          </article>

          {/**Education */}
          <article>
            <div>
              <header className="mt-4">
                <h2 className="text-[9px] font-extrabold text-cyan-600">
                  EDUCATION
                </h2>
                <div className="mt-4 mb-2">
                  <p className="text-[11px]">
                    <b>School,</b> Location - <i>Degree</i>
                  </p>
                  <p className="text-[8px]"> MONTH 20XX - PRESENT</p>
                </div>
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

            <div>
              <header className="my-2">
                <p className="text-[11px]">
                  <b>School,</b> Location - <i>Degree</i>
                </p>
                <p className="text-[8px]">MONTH 20XX - PRESENT</p>
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
            <p> Your Country, State</p>
            <p>070XXXXXXXX</p>
            <p>no_reply@gmail.com</p>
          </div>

          <article>
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
