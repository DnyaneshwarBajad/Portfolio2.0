function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row
                        items-center justify-between gap-4">

          {/* Logo / Name */}
          <div>
            <p className="text-xl font-bold">
              Dnyaneshwar<span className="text-blue-500">.</span>
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Java & Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-gray-400">

            <a
              href="#"
              className="hover:text-blue-500 transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="hover:text-blue-500 transition"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="hover:text-blue-500 transition"
            >
              LeetCode
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Dnyaneshwar Bajad.
            All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer