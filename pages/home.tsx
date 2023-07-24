import { useRouter } from "next/router";

const Home = () => {
  //init router hook
  const router = useRouter();
  return (
    <main className="bg-white h-screen text-black">
      {/**Body */}
      <section className="flex flex-col justify-center items-center mx-auto container">
        <div className=" w-[80%] flex flex-col items-center justify-center">
          <h1 className="text-6xl bold mt-32 text-center">
            Build your resume sharply no need to dey reason much
          </h1>
          <button
            className="mt-10 py-4 px-3 bg-orange-400"
            onClick={() => router.push({ pathname: "/custom-template" })}
          >
            Start building your resume
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
