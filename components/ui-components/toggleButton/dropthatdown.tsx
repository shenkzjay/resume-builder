import React, { use, useState } from "react";

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
  const [selected, setSelected] = useState("");
  console.log("selected", selected);

  const handleSelect = (selectedString: string) => {
    setSelected(selectedString);
    setToggle(false);
    if (selectedString === "Sodom") {
      onClick();
    }
  };

  return (
    <div className="">
      <div>
        <button
          className="border-cyan-600 border-2 px-4 py-3 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold"
          onClick={() => setToggle((prev) => !prev)}
        >
          {buttonName}
        </button>
      </div>
      {toggle && (
        <div className="relative">
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
