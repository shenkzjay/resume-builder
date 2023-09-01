import React, { use, useState } from "react";

const Dropthatdown = () => {
  const data = [
    { value: "Sodom", label: "gomorrah" },
    { value: "solution", label: "gomorrah" },
    { value: "saudi", label: "gomorrah" },
    { value: "anthony", label: "gomorrah" },
  ];

  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("");
  console.log("selected", selected);

  const handleSelect = (selectedString: string) => {
    setSelected(selectedString);
    setToggle(false);
  };

  return (
    <div className="">
      <button
        className="bg-primaryButton p-2 rounded"
        onClick={() => setToggle((prev) => !prev)}
      >
        Yessir
      </button>
      {toggle && (
        <ul className="bg-white w-24 border">
          {data.map((item, index) => (
            <li
              key={index}
              className="hover:bg-slate-200 p-1 m-1"
              onClick={() => handleSelect(item.value)}
            >
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropthatdown;
