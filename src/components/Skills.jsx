import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import { SiExpress, SiMysql } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={60} color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={60} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs size={60} color="#F7DF1E" /> },
    { name: "React.js", icon: <FaReact size={60} color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={60} color="#339933" /> },
    { name: "Express.js", icon: <SiExpress size={60} /> },
    { name: "Python", icon: <FaPython size={60} color="#3776AB" /> },
    { name: "MySQL", icon: <SiMysql size={60} color="#4479A1" /> },
    { name: "Git", icon: <FaGitAlt size={60} color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub size={60} /> },
    { name: "REST API", icon: <FaDatabase size={60} color="#6C63FF" /> },
  ];

  return (
    <section className="container py-5" id="skills">
      <div className="text-center mb-5">
        <h2 className="fw-bold">My Skills</h2>
        <p className="text-muted">
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div className="col-lg-2 col-md-3 col-6 mb-4" key={index}>
            <div className="card shadow border-0 h-100 text-center p-4">
              <div className="mb-3">{skill.icon}</div>
              <h6>{skill.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;