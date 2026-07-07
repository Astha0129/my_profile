function Certification({ certifications }) {
  return (
    <section className="container py-5" id="certifications">

      <div className="text-center mb-5">
        <h2 className="fw-bold">
          {certifications.title}
        </h2>

        <p className="text-muted">
          {certifications.subtitle}
        </p>
      </div>

      <div className="row">

        {certifications.items.map((certificate, index) => (

          <div className="col-lg-4 col-md-6 mb-4" key={index}>

            <div
              className="card h-100 shadow"
              style={{ backgroundColor: "#f8f9fa" }}
            >

              <img
                src={certificate.image}
                alt={certificate.title}
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "contain",
                  backgroundColor: "#fff",
                  padding: "10px",
                }}
              />

              <div className="card-body">

                <h5 className="card-title">
                  {certificate.title}
                </h5>

                <p className="card-text">
                  {certificate.description}
                </p>

                <span className={`badge bg-${certificate.badgeColor}`}>
                  {certificate.badge}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certification;