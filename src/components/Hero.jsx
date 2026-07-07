function Hero({ hero }) {
  return (
    <section className="container py-4" id="home">
      <div className="row align-items-center">
        <div className="col-lg-7 text-center text-lg-start ps-lg-5">
          <h5 className="text-primary fw-bold mb-2">
            {hero.greeting}
          </h5>

          <h1 className="display-4 fw-bold">
            {hero.name}
          </h1>

          <h3 className="text-secondary mb-4">
            {hero.role}
          </h3>

          <p className="lead text-muted">
            {hero.description}
          </p>

          <div className="mt-4">
            <a
              href="#projects"
              className="btn btn-primary btn-lg me-3"
            >
              {hero.buttons.project}
            </a>

            <a
              href={hero.resume}
              className="btn btn-outline-primary btn-lg"
              download
            >
              {hero.buttons.resume}
            </a>
          </div>
        </div>

        <div className="col-lg-5 text-center">
          <img
            src={hero.image}
            alt={hero.name}
            className="img-fluid rounded-circle shadow-lg w-50"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;