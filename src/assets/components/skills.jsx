import { Link } from "react-router-dom";
export function SkillsSection() {
  return (<Link to="/skills">
    <button
      className="bg-black text-white font-bold  pt-2 pb-2 px-4  rounded-sm   shadow-md hover:shadow-xl 
        hover:shadow-blue-500/50   transition-all  duration-300"
    >
      <div className="flex justify-center gap-3">
        <div>Skills</div>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>
</div>
      </div>
    </button>
</Link>
    
  );
}