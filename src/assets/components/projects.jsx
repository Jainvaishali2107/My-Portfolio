import {Link} from "react-router-dom"
export function ProjectsSection() {
  return (<Link to="/projects">
    <button
      className="bg-black text-white font-bold  pt-2 pb-2 px-4   rounded-sm   shadow-md hover:shadow-xl 
        hover:shadow-blue-500/50   transition-all  duration-300"
    >
      <div className="flex justify-center gap-3">
        <div>Projects</div>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>
</div>
      </div>
    </button>
    </Link>
  );
}