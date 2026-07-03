import buildAI from "../assets/image/buildai.jpeg";
import coderush from "../assets/image/coderush.jpeg";
import pythonFSD from "../assets/image/pythonfsd.jpeg";

function Certification() {
  return (
    <>
      <section className="container py-5" id="certifications">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Certifications</h2>
          <p className="text-muted">
            Certifications and achievements that showcase my continuous learning
            and technical growth.
          </p>
        </div>

        <div className="row">

          {/* Certificate 1 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow"
            style={{ backgroundColor: "#f8f9fa" }} >

              <img
                src={buildAI}
                alt="Build with AI Certificate"
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "contain",
                  backgroundColor: "#fff",
                  padding: "10px"
                }}
              />

              <div className="card-body">
                <h5 className="card-title">Build with AI</h5>

                <p className="card-text">
                  Participated in the <strong>Build with AI</strong> workshop
                  organized by <strong>Google Developer Groups (GDG)</strong>,
                  where I explored Generative AI, AI tools, and practical AI
                  applications.
                </p>

                <span className="badge bg-primary">
                  Google Developer Groups
                </span>
              </div>

            </div>
          </div>

          {/* Certificate 2 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow"
            style={{ backgroundColor: "#f8f9fa" }}>

              <img
                src={coderush}
                alt="CodeRush Hackathon Certificate"
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "contain",
                  backgroundColor: "#fff",
                  padding: "10px"
                }}
              />

              <div className="card-body">
                <h5 className="card-title">CodeRush Hackathon</h5>

                <p className="card-text">
                  Participated in the <strong>CodeRush Hackathon</strong>,
                  collaborating with a team to design innovative software
                  solutions and strengthen problem-solving skills.
                </p>

                <span className="badge bg-success">
                  Hackathon
                </span>
              </div>

            </div>
          </div>

          {/* Certificate 3 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow" 
            style={{ backgroundColor: "#f8f9fa" }}>

              <img
                src={pythonFSD}
                alt="Full Stack Development with Python Certificate"
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "contain",
                  backgroundColor: "#fff",
                  padding: "10px"
                }}
              />

              <div className="card-body">
                <h5 className="card-title">
                  Full Stack Development with Python
                </h5>

                <p className="card-text">
                  Successfully completed training in
                  <strong> Full Stack Development with Python</strong>,
                  covering frontend development, backend development,
                  databases, REST APIs, and web application development.
                </p>

                <span className="badge bg-warning text-dark">
                  Full Stack Development
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Certification;

