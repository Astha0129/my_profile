import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <section className="container py-5" id="contact">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Me</h2>
          <p className="text-muted">
            Feel free to connect with me for internships, collaborations, or
            software development opportunities.
          </p>
        </div>

        <div className="row g-4">

          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="card shadow border-0 h-100 p-4">

              <h4 className="mb-4">Get In Touch</h4>

              <p>
                <FaEnvelope className="me-2 text-primary" />
                asthad431@gmail.com
              </p>

              <p>
                <FaPhone className="me-2 text-success" />
                +91 9336055960
              </p>

              <p>
                <FaMapMarkerAlt className="me-2 text-danger" />
                Uttar Pradesh, India
              </p>

              <p>
                <FaGithub className="me-2" />
                <a
                  href="https://github.com/Astha0129"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-dark"
                >
                  GitHub Profile
                </a>
              </p>

              <p>
                <FaLinkedin className="me-2 text-primary" />
                <a
                  href="https://www.linkedin.com/in/aastha-dubey-9a3886383"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-dark"
                >
                  LinkedIn Profile
                </a>
              </p>

            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card shadow border-0 p-4">

              <h4 className="mb-4">Send Message</h4>

              <form>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark">
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;