
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-950 text-white flex items-center scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left side: Introduction */}
          <div className="order-2 md:order-1 animate-fade-in">
            <p className="text-blue-500 text-lg font-semibold mb-4">
              Hello, I'm
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Dnyaneshwar Bajad
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
              Java & Full Stack Developer
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
              I build scalable backend applications using Java and Spring Boot
              and create modern, responsive web applications using React.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-gray-600 px-6 py-3 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition"
              >
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                download="Dnyaneshwar_Bajad_Resume.pdf"
                className="border border-blue-500 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
              >
                Download Resume ↓
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-6 mt-10 text-gray-400">
              <a
                href="https://github.com/DnyaneshwarBajad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/dnyaneshwar-bajad/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://leetcode.com/u/DnyaneshwarBajad/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
                aria-label="LeetCode Profile"
              >
                LeetCode ↗
              </a>
            </div>
          </div>

          {/* Right side: Profile image */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="rounded-full p-1 bg-gradient-to-br from-blue-400 to-cyan-400 shadow-2xl shadow-blue-500/20">
              <img
                src="/images/profile.jpg"
                alt="Dnyaneshwar Bajad"
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-gray-950"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
