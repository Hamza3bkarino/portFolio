import {
  FiCode,
  FiLayout,
  FiDatabase,
  FiSmartphone,
  FiGitBranch,
  FiExternalLink,
} from "react-icons/fi";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLaravel,
  FaPython,
  FaFigma,
} from "react-icons/fa";

import {
  SiMysql,
  SiTailwindcss,
  SiTrello,
  SiJira,
  SiOpenai,
} from "react-icons/si";


export default function ProjectsPage() {
  const skills = [
  // 🌐 Frontend
  { name: "React", icon: FaReact, level: "Advanced", color: "text-cyan-400" },
  { name: "Next.js", icon: FiCode, level: "Advanced", color: "text-gray-800" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", color: "text-sky-400" },
  { name: "Responsive Design", icon: FiSmartphone, level: "Advanced", color: "text-purple-500" },

  // ⚙ Backend
  { name: "Node.js", icon: FaNodeJs, level: "Intermediate", color: "text-green-500" },
  { name: "Laravel", icon: FaLaravel, level: "Intermediate", color: "text-red-500" },
  { name: "Python", icon: FaPython, level: "Intermediate", color: "text-yellow-400" },

  //  Databases
  { name: "MySQL", icon: SiMysql, level: "Intermediate", color: "text-blue-500" },
{ name: "MongoDB", icon: FiDatabase, level: "Intermediate", color: "text-emerald-500" },


  //  Version Control
  { name: "Git", icon: FiGitBranch, level: "Advanced", color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, level: "Advanced", color: "text-gray-700" },

  //  Design
  { name: "Figma", icon: FaFigma, level: "Intermediate", color: "text-pink-500" },

  //  Project Management
  { name: "Trello", icon: SiTrello, level: "Intermediate", color: "text-blue-600" },
  { name: "Jira", icon: SiJira, level: "Intermediate", color: "text-indigo-600" },

  //  AI
  { name: "Prompt Engineering", icon: SiOpenai, level: "Advanced", color: "text-emerald-500" },
];

  const projects = [
    {
      title: "Event Ticket Platform",
      description: "Full event system with cart, checkout, admin dashboard and email automation.",
      tech: ["React", "Redux", "n8n"],
      github: "#",
      live: "#",
    },
    {
      title: "E-commerce Website",
      description: "Modern e-commerce platform with authentication and order management.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio with animations, dark mode and SEO optimization.",
      tech: ["Next.js", "Tailwind"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">

      {/* ===== HERO ===== */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Projects & Skills
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I build modern, scalable and high-performance web applications using the latest technologies.
        </p>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">Skills</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-gray-200 
                hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gray-100 
                    group-hover:rotate-6 transition-transform`}
                  >
                    <Icon className={`text-3xl ${skill.color}`} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {skill.name}
                    </h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-gray-200 p-6 
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-5">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition"
                >
                  <FiExternalLink /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
