import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from "./pages/Home";
import { ContactSection } from "./assets/components/contact";
import { EducationSection } from "./assets/components/education";
import { HomeSection } from "./assets/components/homesec";
import { ProjectsSection } from "./assets/components/projects";
import { SkillsSection } from "./assets/components/skills";
import { Projects2 } from "./pages/Projects";
import { Skills2 } from "./pages/Skills";
import { Education2 } from "./pages/Education";
import { Resume2 } from "./pages/Resume";
import { Certificates2 } from "./pages/Certificates";
import { Contact2 } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      {/* 🔥 GLOBAL WRAPPER */}
      <div className="min-h-screen bg-blue-950 text-white">

        {/* 🔹 TOP NAV / SECTIONS */}
        <div className="pl-3 pr-3 pt-8 pb-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-6">
            <HomeSection />
            <ProjectsSection />
            <SkillsSection />
            <EducationSection />
            <ContactSection />
          </div>
        </div>

        {/* 🔹 PAGES */}
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/projects" element={<Projects2 />} />
          <Route path="/skills" element={<Skills2 />} />
          <Route path="/education" element={<Education2 />} />
          <Route path="/contact" element={<Contact2 />} />
          <Route path="/resume" element={<Resume2 />} />
          <Route path="/certificates" element={<Certificates2 />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}
