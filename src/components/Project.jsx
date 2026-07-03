import emergencySOS from "../assets/image/emergencysos.jpeg";
import jobTesting from "../assets/image/jobtesting.jpeg";
import studentData from "../assets/image/studentdata.jpeg";
function Project() {
    return (
        <>
            <section className="container py-5" id="projects">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">My Projects</h2>
                    <p className="text-muted">
                        Here are some of the projects I have worked on.
                    </p>
                </div>

                <div className="row">
                    {/* Project 1 */}
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100 shadow">
                            <img
                                src={emergencySOS}
                                className="card-img-top"
                                alt="Emergency SOS"
                                style={{
                                    height: "220px",
                                    objectFit:"contain"
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Emergency SOS</h5>
                                <p className="text-primary fw-semibold">
                                    Team Project
                                </p>

                                <p className="card-text">
                                    A web application that enables users to send emergency alerts and
                                    share their live location with trusted contacts during emergencies.
                                </p>

                                <h6>Skills Learned</h6>
                                <ul>
                                    <li>React.js</li>
                                    <li>Node.js & Express.js</li>
                                    <li>REST API Development</li>
                                    <li>Location Integration</li>
                                    <li>MySQL Database</li>
                                    <li>Git & GitHub</li>
                                </ul>

                                <a
                                    href="https://github.com/Cody-Abhi/CrisisBridge"
                                    className="btn btn-dark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100 shadow">
                            <img
                                src={jobTesting}
                                className="card-img-top"
                                alt="Job Testing Application"
                                style={{
                                    height: "220px",
                                    objectFit:"contain"
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Job Testing Application</h5>

                                <p className="card-text">
                                    An online platform where users can take aptitude and technical
                                    tests, receive instant scores, and prepare for interviews.
                                </p>

                                <h6>Skills Learned</h6>
                                <ul>
                                    <li>HTML5 & CSS3</li>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                    <li>Responsive Design</li>
                                    <li>Form Validation</li>
                                    <li>Git & GitHub</li>
                                </ul>

                                <a
                                    href="https://github.com/Astha0129/web-job-testing"
                                    className="btn btn-dark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100 shadow">
                            <img
                                src={studentData}
                                className="card-img-top"
                                alt="Student Data Collection System"
                                style={{
                                    height: "220px",
                                    objectFit: "contain"
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Student Data Collection System</h5>

                                <p className="card-text">
                                    A Flask-based application with a REST API and MySQL database for
                                    storing and managing student information securely.
                                </p>

                                <h6>Skills Learned</h6>
                                <ul>
                                    <li>Python & Flask</li>
                                    <li>REST API</li>
                                    <li>MySQL</li>
                                    <li>CRUD Operations</li>
                                    <li>Backend Development</li>
                                    <li>Database Management</li>
                                </ul>

                                <a
                                    href="https://github.com/Astha0129/student-management-api"
                                    className="btn btn-dark"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Project;
