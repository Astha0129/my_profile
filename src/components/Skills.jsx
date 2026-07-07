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

function Skills({ skills }) {
  const icons = {
    html: <FaHtml5 size={60} color="#E34F26" />,
    css: <FaCss3Alt size={60} color="#1572B6" />,
    js: <FaJs size={60} color="#F7DF1E" />,
    react: <FaReact size={60} color="#61DAFB" />,
    node: <FaNodeJs size={60} color="#339933" />,
    express: <SiExpress size={60} />,
    python: <FaPython size={60} color="#3776AB" />,
    mysql: <SiMysql size={60} color="#4479A1" />,
    git: <FaGitAlt size={60} color="#F05032" />,
    github: <FaGithub size={60} />,
    api: <FaDatabase size={60} color="#6C63FF" />,
  };

  return (
    <section className="container py-5" id="skills">
      <div className="text-center mb-5">
        <h2 className="fw-bold">{skills.title}</h2>

        <p className="text-muted">
          {skills.subtitle}
        </p>
      </div>

      <div className="row justify-content-center">
        {skills.items.map((skill, index) => (
          <div className="col-lg-2 col-md-3 col-6 mb-4" key={index}>
            <div className="card shadow border-0 h-100 text-center p-4">

              <div className="mb-3">
                {icons[skill.icon]}
              </div>

              <h6>{skill.name}</h6>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;