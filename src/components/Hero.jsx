import myimg from '../assets/image/about.jpeg';

function Hero() {
  return (
    <>
      <section className="container py-5">
        <div className="row align-item-center">
          <div className="col-lg-6">
            <h2> Hello, I,m</h2>
            <h1>Aastha Dubey</h1>
            <h3>  Full Stack Developer </h3>
            <p>Passionate Full Stack Web Developer with experience in building
              responsive and user-friendly web applications. Skilled in HTML,
              CSS, JavaScript, React.js, Node.js, Express.js, and MySQL.
              Dedicated to creating clean, efficient, and scalable solutions
              while continuously learning new technologies</p>
            <button className="btn btn-primary p -2 mx-2">Hire Me </button>
            <button>   Download CV
            </button>
          </div>

          <div className="col-lg-6 -center">
            <img
              src={myimg}
              alt="My Image"
              className='img-fluid rounded-circle shadow-lg w-50' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;