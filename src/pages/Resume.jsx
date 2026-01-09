export function Resume2() {
  return (
    <>
      <div className="bg-[url('/space.jpg')] bg-center bg-cover bg-no-repeat bg-contain pt-20 pb-40 flex justify-center pt-25 pb-35">
        <div className="max-w-md w-full bg-[#0a1a2f] text-white rounded-2xl p-5 shadow-xl border border-white/10 hover:shadow-[0_0_30px_rgba(80,150,255,0.4)] transition-all duration-300">
          <div className="rounded-xl overflow-hidden mb-5">
            <img 
              src="/resumeimage.jpg" 
              alt="Resume Banner"
              className="w-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-center">Resume</h2>
          <p className="text-gray-300 leading-relaxed mb-4 text-center">
            My Resume
          </p>
          <a 
            href="https://drive.google.com/file/d/1MV91ceZPCIKVl6kMzmdWdxFUnDClM3_8/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="w-full py-3 rounded-xl border border-blue-500/50 hover:bg-blue-700 transition-all duration-300 font-semibold text-center">
              Click for Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
}