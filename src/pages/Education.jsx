import { Schoolingcard } from "../assets/components/professionalcards";
import { Collegecard } from "../assets/components/professionalcards";

export function Education2() {
  return (
    <>
      <div className="bg-[url('/space.jpg')] bg-center bg-cover bg-no-repeat bg-contain bg-[length:600px] pt-20 pb-20">
        
        <div className="text-center my-10 px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-15 pb-15 md:px-10">
          <div>
            <Schoolingcard />
          </div>
          <div>
            <Collegecard />
          </div>
        </div>
      </div>
    </>
  );
}