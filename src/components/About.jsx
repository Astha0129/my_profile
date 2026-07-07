function About({ about }) {
  return (
    <section className="container py-5" id="about">
      <div className="text-center mb-5">
        <h1 className="fw-bold">{about.title}</h1>

        <p className="text-muted">
          {about.subtitle}
        </p>
      </div>

      <div className="row align-items-center">

        <div className="col-lg-4 text-center mb-4">
          <img
            src={about.image}
            alt="About"
            className="img-fluid rounded shadow-lg"
            style={{ maxWidth: "300px" }}
          />
        </div>

        <div className="col-lg-8 ps-lg-5">

          <h3 className="fw-bold mb-3">
            {about.role}
          </h3>

          <p className="text-muted">
            {about.description}
          </p>

          <div className="row mt-4">

            <div className="col-md-6">
              <p><strong>Name:</strong> {about.name}</p>
              <p><strong>Email:</strong> {about.email}</p>
              <p><strong>Phone:</strong> {about.phone}</p>
            </div>

            <div className="col-md-6">
              <p><strong>Education:</strong> {about.education}</p>
              <p><strong>Location:</strong> {about.location}</p>
              <p><strong>Status:</strong> {about.status}</p>
            </div>

          </div>

          <a
            href={about.resume}
            className="btn btn-info mt-3"
            download
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;