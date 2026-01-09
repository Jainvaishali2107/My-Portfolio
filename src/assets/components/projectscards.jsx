import { Link } from "react-router-dom";



export function Ecommercecard() {
  return (
    <div className="max-w-md bg-[#0a1a2f] text-white rounded-2xl p-5 shadow-xl border border-white/10 hover:shadow-[0_0_30px_rgba(80,150,255,0.4)] transition-all duration-300">

      <div className="rounded-xl overflow-hidden mb-5">
        <img
          src="/ecommercephoto.jpg" 
          alt="E-commerce Project Banner"
          className="w-full object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold mb-3">E-commerce Website</h2>

      <p className="text-gray-300 leading-relaxed mb-4">

        A responsive e-commerce website showcasing products, shopping cart,
        and checkout functionality.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="bg-blue-900/40 px-3 py-1 rounded-full text-sm border border-blue-500/30">React</span>
        <span className="bg-blue-900/40 px-3 py-1 rounded-full text-sm border border-blue-500/30">Tailwind CSS</span>
        <span className="bg-blue-900/40 px-3 py-1 rounded-full text-sm border border-blue-500/30">Vite</span>
        <span className="bg-blue-900/40 px-3 py-1 rounded-full text-sm border border-blue-500/30">Shopping Cart</span>
      </div>

    
      <div className="flex flex-col gap-3">
       

        <a
          href="https://github.com/Jainvaishali2107/e-commerce-website" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full py-3 rounded-xl border border-gray-500/40 hover:bg-gray-700 transition-all duration-300 font-semibold">
            See Code
          </button>
        </a>
      </div>

    </div>
  );
}

export function Portfoliocard() {
  return (
    <div className="max-w-md bg-[#0a1a2f] text-white rounded-2xl p-5 shadow-xl border border-white/10 hover:shadow-[0_0_30px_rgba(80,150,255,0.4)] transition-all duration-300">

      <div className="rounded-xl overflow-hidden mb-5">
        <img
          src="/projectphoto.jpg"
          alt="Project Banner"
          className="w-full object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold mb-3">Portfolio Website</h2>

      <p className="text-gray-300 leading-relaxed mb-4">
        My personal portfolio website showcasing my projects, skills,
        and achievements with a clean UI, smooth animations,
        and responsive design
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="bg-blue-900/40 px-3 py-1 rounded-full text-sm border border-blue-500/30">React</span>
        <span className="bg-blue-900/40 px-3 py-1 rounded-full text-sm border border-blue-500/30">Tailwind CSS</span>
        <span className="bg-blue-900/40 px-3 py-1 rounded-full text-sm border border-blue-500/30">Vite</span>
        <span className="bg-blue-900/40 px-3 py-1 rounded-full text-sm border border-blue-500/30">Basic UI</span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <Link to="/">
          <button className="w-full py-3 rounded-xl border border-blue-500/50 hover:bg-blue-700 transition-all duration-300 font-semibold">
            Visit Site
          </button>
        </Link>

        <a
          href="https://github.com/Jainvaishali2107/My-Portfolio" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full py-3 rounded-xl border border-gray-500/40 hover:bg-gray-700 transition-all duration-300 font-semibold">
            See Code
          </button>
        </a>
      </div>

    </div>
  );
}
