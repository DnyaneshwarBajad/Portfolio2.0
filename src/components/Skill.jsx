
import {
  FaJava,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiApachemaven,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "Java", category: "Backend", icon: FaJava },
  { name: "Spring Boot", category: "Backend", icon: SiSpringboot },
  { name: "Spring Security", category: "Backend", icon: SiSpringboot },
  { name: "REST API", category: "Backend", icon: FaDatabase },

  { name: "React", category: "Frontend", icon: FaReact },
  { name: "JavaScript", category: "Frontend", icon: FaJs },
  { name: "HTML", category: "Frontend", icon: FaHtml5 },
  { name: "CSS", category: "Frontend", icon: FaCss3Alt },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss },

  { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
  { name: "MySQL", category: "Database", icon: SiMysql },
  { name: "MongoDB", category: "Database", icon: SiMongodb },
  { name: "Redis", category: "Database", icon: SiRedis },

  { name: "Docker", category: "DevOps", icon: FaDocker },
  { name: "Git & GitHub", category: "Tools", icon: FaGitAlt },
  { name: "Apache Kafka", category: "Tools", icon: SiApachekafka },
  { name: "Maven", category: "Tools", icon: SiApachemaven },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs },
  { name: "Express.js", category: "Backend", icon: SiExpress },

  { name: "AI / ML", category: "AI / ML", icon: FaBrain },
  { name: "DBMS", category: "Computer Science", icon: FaDatabase },
  { name: "Computer Networks", category: "Computer Science", icon: FaDatabase },
  { name: "DSA & OOP", category: "Computer Science", icon: FaDatabase },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-gray-950 text-white py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-500 font-semibold mb-2">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies & Concepts
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4
                           hover:border-blue-500 hover:-translate-y-1
                           transition-all duration-300"
              >
                <Icon className="text-blue-500 text-3xl mb-3" />

                <h3 className="text-base font-semibold mb-2">
                  {skill.name}
                </h3>

                <p className="text-gray-400 text-xs">
                  {skill.category}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
