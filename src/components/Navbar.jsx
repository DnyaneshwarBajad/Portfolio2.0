import { useState } from "react"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 text-white z-50 border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold"
        >
          D<span className="text-blue-500">.</span>
        </a>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          ))}

          
<a
  href="/resume.pdf"
  download="Dnyaneshwar_Bajad_Resume.pdf"
  className="bg-blue-600 px-5 py-2 rounded-lg
             hover:bg-blue-700 transition"
>
  Download Resume
</a>


        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">

          <div className="flex flex-col px-6 py-5 gap-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-blue-500 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              className="bg-blue-600 text-center px-5 py-2 rounded-lg
                         hover:bg-blue-700 transition"
            >
              Resume
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar