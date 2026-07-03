import myimg from '../assets/image/about.jpeg';

function Hero() {
  return (
    <>
      <section className="container py-4">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start ps-lg-5">
            <h5 className="text-primary fw-bold mb-2">
              👋 Hi, I'm
            </h5>

            <h1 className="display-4 fw-bold">
              Aastha Dubey
            </h1>

            <h3 className="text-secondary mb-4">
              Full Stack Developer
            </h3>

            <p className="lead text-muted">
              Passionate about building responsive and scalable web
              applications using React, Node.js, Express.js, and MySQL.
              I enjoy solving real-world problems through clean code,
              intuitive user experiences, and continuous learning.
            </p>
            <div className="mt-4">

              <a
                href="#projects"
                className="btn btn-primary btn-lg me-3"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="btn btn-outline-primary btn-lg"
                download
              >
                Download Resume
              </a>

            </div>
          </div>

          <div className="col-lg-5 text-center">
            <img
              src={myimg}
              alt="My Image"
  className="img-fluid rounded-circle shadow-lg w-50"
               />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
