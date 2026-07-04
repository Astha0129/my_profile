import myimg from "../assets/image/about.jpeg";

function About() {
  return (
    <section className="container py-5" id="about">
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Me</h1>
        <p className="text-muted">
          Learn more about my background, skills, and passion for web development.
        </p>
      </div>

      <div className="row align-items-center">
        {/* Left Side */}
        <div className="col-lg-4 text-center mb-4">
          <img
            src={myimg}
            alt="About"
            className="img-fluid rounded shadow -lg"
            style={{ maxWidth: "300px" }}
          />
        </div>

        {/* Right Side */}
        <div className="col-lg-8 ps-lg-5">
          <h3 className="fw-bold mb-3">Full Stack Web Developer</h3>

          <p className="text-muted">
            I am a Computer Science Engineering student passionate about
            developing responsive and user-friendly web applications. I enjoy
            learning new technologies and building projects using the MERN
            stack.
          </p>

          <div className="row mt-4">
            <div className="col-md-6">
              <p><strong>Name:</strong> Aastha Dubey</p>
              <p><strong>Email:</strong> asthad431@gmail.com</p>
              <p><strong>Phone:</strong> +91 9336055960 </p>
             
            </div>

            <div className="col-md-6">
              <p><strong>Education:</strong> B.Tech CSE</p>
              <p><strong>Location:</strong> India</p>
              <p><strong>Status:</strong> Open to Internships</p>
            </div>
          </div>

          <a href="/resume.pdf" className="btn btn-info mt-3">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;