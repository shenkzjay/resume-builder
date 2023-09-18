import React, { use, useState } from "react";
import { useRouter } from "next/router";

interface Data {
  value: string;
  label: string;
}

interface Dropdownstate {
  onClick: () => void;
  buttonName: string;
  data: Data[];
}
const Dropthatdown = ({ onClick, buttonName, data }: Dropdownstate) => {
  const [toggle, setToggle] = useState(false);
  // const [selected, setSelected] = useState("");
  // console.log("selected", selected);

  const router = useRouter();

  const handleSelect = (selectedString: string) => {
    if (selectedString === "Download pdf file") {
      onClick();
    }

    if (selectedString === "Personal details") {
      router.push({ pathname: "/custom-template/update-template" });
    }

    if (selectedString === "Work expereience") {
      router.push({ pathname: "/custom-template/work-exp" });
    }

    if (selectedString === "Education history") {
      router.push({ pathname: "/custom-template/education" });
    }

    if (selectedString === "Project") {
      router.push({ pathname: "/custom-template/projects" });
    }

    if (selectedString === "Certification") {
      router.push({ pathname: "/custom-template/certification" });
    }
  };

  const handleOnBlur = () => {
    setToggle(false);
  };

  return (
    <div className="">
      <div>
        <button
          className="border-orange-600 border-2 px-4 py-3 rounded text-orange-600 hover:bg-orange-600 hover:text-white font-semibold"
          onClick={() => setToggle((prev) => !prev)}
        >
          {buttonName}
        </button>
      </div>
      {toggle && (
        <div className="relative" onBlur={handleOnBlur} tabIndex={1}>
          <ul className="bg-white w-max border absolute top-2 drop-shadow-[0px_8px_20px_rgba(0,0,0,0.08)] z-50 cursor-pointer">
            {data.map((item, index) => (
              <li
                key={index}
                className="hover:bg-slate-200 p-2 m-2 rounded text-[14px]"
                onClick={() => handleSelect(item.value)}
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropthatdown;
