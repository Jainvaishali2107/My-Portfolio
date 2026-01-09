import { Portfoliocard, Ecommercecard } from "../assets/components/projectscards";


export function Projects2() {
  return (
    <div className="bg-[url('/space.jpg')] bg-cover bg-no-repeat bg-center pt-10 pb-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
        <Portfoliocard />
        <Ecommercecard />
      </div>
    </div>
  );
}
