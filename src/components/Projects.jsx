
function Projects() {
  const projects = [
    {
      title: "Parking Management System",
      description:
        "A parking management application with vehicle registration, parking entry/exit workflows, fee calculation, and spot availability tracking.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "JPA",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Inventory Management System",
      description:
        "A system for managing products, inventory records, suppliers, and stock operations.",
      technologies: [
        "Java",
        "Spring Boot",
        "JPA",
        "PostgreSQL",
        "REST API",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Hospital Management System",
      description:
        "A backend application for organizing patient records, doctor information, appointments, and hospital data.",
      technologies: [
        "Java",
        "Spring Boot",
        "JPA",
        "MySQL",
        "REST API",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Grain Processing Platform",
      description:
        "A platform for farmers and businesses to explore grain products, book appointments, and request grain cleaning services.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
      ],
      github: "",
      demo: "",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-500 font-semibold mb-2">
            My Work
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore my projects in backend development,
            full-stack applications, and software engineering.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col bg-gray-950
                         border border-gray-800 rounded-xl p-5
                         hover:border-blue-500
                         hover:-translate-y-1
                         hover:shadow-lg hover:shadow-blue-500/10
                         transition-all duration-300"
            >
              {/* Project Number */}
              <p className="text-blue-500 text-sm font-semibold mb-3">
                PROJECT
              </p>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3
                             group-hover:text-blue-400 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-6 mb-5">
                {project.description}
              </p>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 text-gray-300
                               text-xs px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-gray-700 px-4 py-2
                               rounded-lg text-sm
                               hover:border-blue-500
                               hover:text-blue-400 transition"
                  >
                    GitHub ↗
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 px-4 py-2 rounded-lg
                               text-sm hover:bg-blue-700 transition"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
