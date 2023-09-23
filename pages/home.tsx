import { useRouter } from "next/router";
import { HeroImage } from "@/components/svg/hero-image";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <main className="flex flex-col bg-white h-screen text-black md:mx-auto md:container">
      {/**Body */}
      <div className="">
        <Navbar />
      </div>
      <section className="flex justify-between mt-12 mx-6 md:mx-0 h-[100vh] gap-20">
        <div className=" flex flex-col md:mt-20 md:w-1/2">
          <div className="flex flex-col md:text-7xl text-6xl font-extrabold space-y-1">
            <span>Select</span>
            <span>Customize</span>
            <span>Download</span>
          </div>
          <div className="flex my-10">
            <p>
              Easy-to-use resume builder tool to save time and hassle on resume
              writing and formatting.
            </p>
          </div>
          <div className="">
            <Link href="/custom-template">
              <button className=" py-4 px-3 bg-[#F05E0C] font-semibold text-white rounded">
                Start building your resume
              </button>
            </Link>
          </div>
        </div>
        <div className="md:flex hidden">
          <div className="overflow-hidden h-[70%] scroll-wrap">
            <div className="flex flex-col simple-scroll">
              <span className=" ">
                <Image
                  src="/Group 9.png"
                  width={400}
                  height={600}
                  alt="an A4 dummy resume picture"
                />
              </span>
              <span className=" ">
                <Image
                  src="/Group 10.png"
                  width={400}
                  height={600}
                  alt="an A4 dummy resume picture"
                />
              </span>
              <span className="">
                <Image
                  src="/Group 11.png"
                  width={400}
                  height={600}
                  alt="an A4 dummy resume picture"
                />
              </span>
              <span className=" ">
                <Image
                  src="/Group 12.png"
                  width={400}
                  height={600}
                  alt="an A4 dummy resume picture"
                />
              </span>
            </div>
            <div className="flex flex-col simple-scroll">
              <span className="">
                <Image
                  src="/Group 9.png"
                  width={400}
                  height={600}
                  alt="an A4 dummy resume picture"
                />
              </span>
              <span className="">
                <Image
                  src="/Group 10.png"
                  width={400}
                  height={600}
                  alt="an A4 dummy resume picture"
                />
              </span>
              <span className=" ">
                <Image
                  src="/Group 11.png"
                  width={400}
                  height={600}
                  alt="an A4 dummy resume picture"
                />
              </span>
              <span className="">
                <Image
                  src="/Group 12.png"
                  width={400}
                  height={600}
                  alt="an A4 dummy resume picture"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
