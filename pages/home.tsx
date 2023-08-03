import { useRouter } from "next/router";

const Home = () => {
  //init router hook
  const router = useRouter();
  return (
    <main className="bg-white h-screen text-black">
      {/**Body */}
      <section className="flex flex-col justify-center items-center md:mx-auto md:container">
        <div className=" flex flex-col items-center justify-center mx-6">
          <div className="flex md:flex-row flex-col md:text-7xl text-6xl font-extrabold mt-32 text-center">
            <span>Select.</span>
            <span>Customize.</span>
            <span>Download.</span>
          </div>
          <button
            className="mt-10 py-4 px-3 bg-cyan-600 font-semibold text-white rounded"
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
