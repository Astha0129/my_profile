function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">

        <h5 className="fw-bold">Aastha Dubey</h5>

        <p className="mb-2">
          Full Stack Developer | B.Tech CSE Student
        </p>

        <div className="mb-3">

          <a
            href="https://github.com/Astha0129"
            target="_blank"
            rel="noreferrer"
            className="text-white fs-4 me-3"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/aastha-dubey/"
            target="_blank"
            rel="noreferrer"
            className="text-white fs-4 me-3"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="mailto:asthad431@gmail.com"
            className="text-white fs-4"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>

        </div>

        <p className="mb-0">
          © 2026 Aastha Dubey. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
