import { Portfoliocard, Ecommercecard,StudentOScard } from "../assets/components/projectscards";


export function Projects2() {
  return (
    <div className="bg-[url('/space.jpg')] bg-cover bg-no-repeat bg-center pt-10 pb-10 px-4 md:px-10">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
        <StudentOScard/>
        <Portfoliocard />
        <Ecommercecard />
      </div>
    </div>
  );
}
