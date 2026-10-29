function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-500 font-semibold mb-2">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Who I Am
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Building reliable & scalable applications
            </h3>

            <p className="text-gray-400 leading-relaxed mb-5">
              I'm a Java and Full Stack Developer interested in building
              real-world applications and solving challenging problems.
            </p>

            <p className="text-gray-400 leading-relaxed mb-5">
              My primary backend stack includes Java, Spring Boot,
              Spring Security, REST APIs, JPA and Hibernate. On the
              frontend, I work with React and modern JavaScript.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I also enjoy practicing Data Structures and Algorithms
              and continuously improving my problem-solving skills.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-gray-950 p-6 rounded-xl">
              <h4 className="text-3xl font-bold text-blue-500">
                Java
              </h4>
              <p className="text-gray-400 mt-2">
                Backend Development
              </p>
            </div>

            <div className="bg-gray-950 p-6 rounded-xl">
              <h4 className="text-3xl font-bold text-blue-500">
                Spring
              </h4>
              <p className="text-gray-400 mt-2">
                Enterprise Applications
              </p>
            </div>

            <div className="bg-gray-950 p-6 rounded-xl">
              <h4 className="text-3xl font-bold text-blue-500">
                React
              </h4>
              <p className="text-gray-400 mt-2">
                Frontend Development
              </p>
            </div>

             <div className="bg-gray-950 p-6 rounded-xl">
              <h4 className="text-3xl font-bold text-blue-500">
                AI ML 
              </h4>
              <p className="text-gray-400 mt-2">
                Rag Applications
              </p>
            </div>

            <div className="bg-gray-950 p-6 rounded-xl">
              <h4 className="text-3xl font-bold text-blue-500">
                DSA
              </h4>
              <p className="text-gray-400 mt-2">
                Problem Solving
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About