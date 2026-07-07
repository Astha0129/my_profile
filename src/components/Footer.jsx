function Footer({ footer }) {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">

        <h5 className="fw-bold">{footer.name}</h5>

        <p className="mb-2">
          {footer.role}
        </p>

        <div className="mb-3">

          <a
            href={footer.github}
            target="_blank"
            rel="noreferrer"
            className="text-white fs-4 me-3"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href={footer.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-white fs-4 me-3"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href={footer.email}
            className="text-white fs-4"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>

        </div>

        <p className="mb-0">
          {footer.copyright}
        </p>

      </div>
    </footer>
  );
}

export default Footer;