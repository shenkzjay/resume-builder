import { ArrowHead } from "@/public/arrow";
import { DownloadIcon } from "@/public/downloadIcon";
import { FigmaShape } from "@/public/figmashape";
import { FigmaStarShape } from "@/public/figmaStarShape";
import Link from "next/link";
import { useState } from "react";

interface backgroundColorProps {
  backgroundColor: string;
}

export default function Home() {
  const colorChange: backgroundColorProps[] = [
    {
      backgroundColor: "bg-blue-500",
    },
    {
      backgroundColor: "bg-red-500",
    },
    {
      backgroundColor: "bg-green-500",
    },
  ];

  const [isColor, setIsColor] = useState<backgroundColorProps>();

  const handleColorChange = (index: number) => {
    setIsColor(colorChange[index]);
  };
  return (
    <section>
      <div className="bg-[#f8f8f8] flex flex-col justify-between h-[100vh]">
        <div className=" flex flex-col  h-full justify-center items-center gap-12 w-[80vw] mx-auto ">
          <div className="[font-size:_clamp(2rem,_10vw,_5rem)] md:w-[45rem] leading-none space-y-2 font-bold mt-20 md:mt-0">
            <h1 className="text-center text-wrap flex flex-wrap justify-center gap-1">
              <span>easier and faster </span>
              <span className=" flex items-center relative h-full md:ml-36 w-full overflow-hidden ">
                <span className="mr-4 md:h-10 md:w-10 w-8 h-8 text-green-500">
                  <FigmaShape />
                </span>{" "}
                way to
                <span className="spanscrollup absolute right-0 bg-blue-500 px-2 md:w-[16rem] text-white">
                  {" "}
                  format
                </span>
                <span className="spanscrollupdown absolute right-0 bg-orange-500 text-white px-[11px] md:px-2 md:w-[16rem]">
                  {" "}
                  create
                </span>
              </span>
              <span className="flex items-center gap-6 ">
                your resume{" "}
                <span className=" md:h-10 md:w-10 w-8 h-8 text-blue-500">
                  <FigmaStarShape />
                </span>
              </span>
            </h1>

            {/* <h1 className="">CUSTOMIZE</h1>
            <h1 className="">DOWNLOAD</h1> */}
          </div>
          <p className="md:w-1/2 text-center font-semibold">
            We save you the time ⏰ and hassle of creating, formating and customizing your resume
            with our custom made templates and easy fill fields so you can easily tweak your resume
            and apply for that position
          </p>
          <Link href={"/custom-template"}>
            <button className="py-4 px-6 bg-white border-4 border-black resumeBtn font-bold">
              Click here to get started
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-[repeat(auto-fit,minmax(50px,1fr))] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-[80vw] mx-auto  gap-8 items-end mt-32 md:mt-0">
          <div className="group flex flex-col  h-64 border-4 border-black shadow-[-10px_-10px_0_1px] hover:shadow-none box-hover">
            <p className="text-[1.8rem] font-bold p-2 text-center">
              Choose your preferred resume template
            </p>
            <span className="justify-center items-center flex text-center [transform:_scale(-1,_1)] group-hover:[transform:_scale(1,_1)]">
              <ArrowHead />
            </span>
          </div>
          <div className="flex flex-col gap-2 hover:[transform:_translateY(-10px)]">
            <div className="flex flex-row gap-4">
              {colorChange &&
                colorChange.length > 0 &&
                colorChange.map((background, index) => (
                  <button
                    onClick={() => handleColorChange(index)}
                    key={index}
                    className={`cursor-pointer w-1/3 h-12 border-4 border-black ${background.backgroundColor}`}
                  ></button>
                ))}
            </div>
            <div
              className={`h-44 border-4 border-black ${
                isColor?.backgroundColor ? isColor.backgroundColor : "bg-blue-500"
              }`}
            >
              <p className="text-white text-[1.8rem]  text-center font-bold p-2">
                Select a theme color for your resume
              </p>
            </div>
          </div>

          <div className=" h-56 border border-black bg-black hover:[transform:_translateY(-10px)]">
            <p className="text-white font-bold text-[1.8rem] text-center flex justify-center items-center h-full p-2">
              A Step by step guide to creating your resume
            </p>
          </div>
          <div className="polkadots h-full flex flex-col gap-4 justify-center items-center border-4 border-black shadow-[-10px_-10px_0_1px_#FD7900] hover:shadow-none box-hover">
            <div className="h-64 flex flex-col justify-center items-center">
              <p className="text-[1.8rem] font-bold text-center p-2">
                Download your resume in PDF. Eaasie Peesie
              </p>
              <div className=" h-24 w-20">
                <DownloadIcon />
              </div>
            </div>
          </div>
          {/* <div className="w-96 h-64 border border-black"></div> */}
        </div>
      </div>
    </section>
  );
}
