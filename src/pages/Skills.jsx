import { Skillspagebackend, Skillspagefrontend, Skillspagetools } from "../assets/components/skillspage";

export function Skills2() {
  return (
    <div className="bg-[url('/space.jpg')] bg-cover bg-no-repeat bg-center pt-10 pb-10 px-4 md:px-10 lg:px-20 box-border overflow-x-hidden">
      <div className="text-white text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold">Frontend</h2>
        <div className="w-16 sm:w-20 h-1 bg-blue-500 mt-2 rounded mx-auto md:mx-0"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        <Skillspagefrontend />
      </div>
      <div className="text-white text-center md:text-left mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold">Backend</h2>
        <div className="w-16 sm:w-20 h-1 bg-blue-500 mt-2 rounded mx-auto md:mx-0"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        <Skillspagebackend />
      </div>
      <div className="text-white text-center md:text-left mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold">Tools & Platforms</h2>
        <div className="w-16 sm:w-20 h-1 bg-blue-500 mt-2 rounded mx-auto md:mx-0"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        <Skillspagetools />
      </div>

    </div>
  );
}