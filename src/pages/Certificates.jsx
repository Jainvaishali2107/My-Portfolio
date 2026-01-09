import { StratwarsCard } from "../assets/components/certificatescards"
import { MissionmalamaalCard } from "../assets/components/certificatescards"

export function Certificates2() {
  return (
    <>
      <div className="bg-[url('/space.jpg')] bg-cover bg-center bg-no-repeat min-h-screen py-16 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] mb-12 pl-2 sm:pl-8">
          My Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center px-4 sm:px-8 lg:px-16">
          <div><StratwarsCard /></div>
          <div><MissionmalamaalCard /></div>
        </div>

      </div>
    </>
  )
}