function Experience() {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science & Engineering",
      institute: "Your College Name",
      year: "2022 - 2026",
    },
  ]

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Personal & Academic Projects",
      duration: "2024 - Present",
      description:
        "Developing backend and full-stack applications using Java, Spring Boot, React, databases, and modern development tools.",
    },
    {
        role:"Reserch Intern",
        company:"College Professor",
        duration:"2025 aug-2026 April",
        description:" Studied how Reranking and chunking techinque affect Rag application"

    }
  ]

  return (
    <section
      id="experience"
      className="bg-gray-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-500 font-semibold mb-2">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Experience & Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Experience
            </h3>

            <div className="space-y-6">
              {experience.map((item) => (
                <div
                  key={item.role}
                  className="bg-gray-900 border border-gray-800
                             rounded-xl p-6
                             hover:border-blue-500
                             transition"
                >
                  <div className="flex flex-col sm:flex-row
                                  sm:items-center
                                  sm:justify-between gap-2 mb-3">

                    <h4 className="text-xl font-bold">
                      {item.role}
                    </h4>

                    <span className="text-blue-500 text-sm">
                      {item.duration}
                    </span>

                  </div>

                  <p className="text-gray-300 mb-3">
                    {item.company}
                  </p>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Education
            </h3>

            <div className="space-y-6">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="bg-gray-900 border border-gray-800
                             rounded-xl p-6
                             hover:border-blue-500
                             transition"
                >
                  <div className="flex flex-col sm:flex-row
                                  sm:items-center
                                  sm:justify-between gap-2 mb-3">

                    <h4 className="text-xl font-bold">
                      {item.degree}
                    </h4>

                    <span className="text-blue-500 text-sm">
                      {item.year}
                    </span>

                  </div>

                  <p className="text-gray-300 mb-2">
                    {item.field}
                  </p>

                  <p className="text-gray-400">
                    {item.institute}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience