function Project({ projects }) {
  return (
    <section className="container py-5" id="projects">

      <div className="text-center mb-5">
        <h2 className="fw-bold">{projects.title}</h2>

        <p className="text-muted">
          {projects.subtitle}
        </p>
      </div>

      <div className="row">

        {projects.items.map((project, index) => (

          <div className="col-lg-4 mb-4" key={index}>

            <div className="card h-100 shadow">

              <img
                src={project.image}
                alt={project.title}
                className="card-img-top"
                style={{
                  height: "220px",
                  objectFit: "contain",
                }}
              />

              <div className="card-body">

                <h5 className="card-title">
                  {project.title}
                </h5>

                <p className="text-primary fw-semibold">
                  {project.type}
                </p>

                <p className="card-text">
                  {project.description}
                </p>

                <h6>Skills Learned</h6>

                <ul>
                  {project.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>

                <a
                  href={project.github}
                  className="btn btn-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Project;