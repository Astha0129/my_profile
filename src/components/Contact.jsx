import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact({ contact }) {
  return (
    <section className="container py-5" id="contact">
      <div className="text-center mb-5">
        <h2 className="fw-bold">{contact.title}</h2>

        <p className="text-muted">
          {contact.subtitle}
        </p>
      </div>

      <div className="row g-4">

        {/* Contact Information */}
        <div className="col-lg-5">
          <div className="card shadow border-0 h-100 p-4">

            <h4 className="mb-4">{contact.heading}</h4>

            <p>
              <FaEnvelope className="me-2 text-primary" />
              {contact.email}
            </p>

            <p>
              <FaPhone className="me-2 text-success" />
              {contact.phone}
            </p>

            <p>
              <FaMapMarkerAlt className="me-2 text-danger" />
              {contact.location}
            </p>

            <p>
              <FaGithub className="me-2" />

              <a
                href={contact.github.link}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-dark"
              >
                {contact.github.title}
              </a>
            </p>

            <p>
              <FaLinkedin className="me-2 text-primary" />

              <a
                href={contact.linkedin.link}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-dark"
              >
                {contact.linkedin.title}
              </a>

            </p>

          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="card shadow border-0 p-4">

            <h4 className="mb-4">
              {contact.form.title}
            </h4>

            <form>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder={contact.form.namePlaceholder}
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder={contact.form.emailPlaceholder}
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder={contact.form.messagePlaceholder}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-dark"
              >
                {contact.form.button}
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;