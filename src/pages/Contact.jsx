export function Contact2() {
  return (
    <>
<div className="bg-[url('/space.jpg')] bg-center bg-cover bg-no-repeat bg-contain bg-[length:600px] pt-20  pb-40">

        <div className="flex justify-center mt-10 px-4">
          <div className="max-w-4xl w-full bg-[#0d1527] p-8 md:p-10 rounded-3xl border border-white/10 shadow-xl backdrop-blur-md flex flex-col md:flex-row items-center md:justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Vaishali Jain</h1>
              <p className="text-blue-400 font-semibold text-lg">Full Stack Developer</p>
              <p className="text-gray-300 max-w-md mx-auto md:mx-0">
                Skilled in <span className="font-bold text-white">React, Node.js, MongoDB, Tailwind CSS, Express</span>
              </p>
              <p className="text-gray-400">College Projects | Personal Portfolio</p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-2">
                <a 
                  href="https://www.linkedin.com/in/vaishali-jain-a36a0a322/" 
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 justify-center hover:bg-blue-700 transition">
                  🔗 LinkedIn
                </a>

                <a 
                  href="https://github.com/Jainvaishali2107" 
                  target="_blank"
                  className="px-4 py-2 bg-black text-white rounded-lg flex items-center gap-2 justify-center hover:bg-gray-800 transition">
                  🐱 GitHub
                </a>
              </div>
            </div>
            <div className="relative flex-shrink-0">
              <img 
                src="/vaishali.jpg" 
                alt="Profile" 
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.7)] mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 px-4">
          <div className="px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-3 font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all justify-center">
            ✉️ Email: <span className="font-normal">vaishalijain2107@gmail.com</span>
          </div>

          <div className="px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-3 font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all justify-center">
            📞 Contact: <span className="font-normal">+91 9306947019</span>
          </div>
        </div>
      </div>
    </>
  );
}