import myimg from "../assets/image/about.jpeg";
import emergencySOS from "../assets/image/emergencysos.jpeg";
import jobTesting from "../assets/image/jobtesting.jpeg";
import studentData from "../assets/image/studentdata.jpeg";
import buildAI from "../assets/image/buildai.jpeg";
import coderush from "../assets/image/coderush.jpeg";
import pythonFSD from "../assets/image/pythonfsd.jpeg";

const mydata = {
  // ================= NAVBAR =================
  navbar: {
    brand: "Aastha Dubey",

    links: [
      {
       name: "Home",
       href: "#home",
      },
      {
        name: "About",
        href: "#about",
      },
      {
        name: "Skills",
        href: "#skills",
      },
      {
        name: "Projects",
        href: "#projects",
      },
      {
        name: "Certificates",
        href: "#certifications",
      },
      {
        name: "Contact",
        href: "#contact",
      },
    ],
  },

  // ================= HERO =================
  hero: {
    greeting: "👋 Hi, I'm",

    name: "Aastha Dubey",

    role: "Full Stack Developer",

    description:
      "Passionate about building responsive and scalable web applications using React, Node.js, Express.js, and MySQL. I enjoy solving real-world problems through clean code, intuitive user experiences, and continuous learning.",

    image: myimg,

    resume: "/resume.pdf",

    buttons: {
      project: "View Projects",
      resume: "Download Resume",
    },
  },

  // ================= ABOUT =================
  about: {
    title: "About Me",

    subtitle:
      "Learn more about my background, skills, and passion for web development.",

    image: myimg,

    role: "Full Stack Web Developer",

    description:
      "I am a Computer Science Engineering student passionate about developing responsive and user-friendly web applications. I enjoy learning new technologies and building projects using the MERN stack.",

    name: "Aastha Dubey",

    email: "asthad431@gmail.com",

    phone: "+91 9336055960",

    education: "B.Tech CSE",

    location: "India",

    status: "Open to Internships",

    resume: "/resume.pdf",
  },

  // ================= SKILLS =================
  skills: {
    title: "My Skills",

    subtitle:
      "Technologies and tools I use to build modern web applications.",

    items: [
      {
        name: "HTML5",
        icon: "html",
      },
      {
        name: "CSS3",
        icon: "css",
      },
      {
        name: "JavaScript",
        icon: "js",
      },
      {
        name: "React.js",
        icon: "react",
      },
      {
        name: "Node.js",
        icon: "node",
      },
      {
        name: "Express.js",
        icon: "express",
      },
      {
        name: "Python",
        icon: "python",
      },
      {
        name: "MySQL",
        icon: "mysql",
      },
      {
        name: "Git",
        icon: "git",
      },
      {
        name: "GitHub",
        icon: "github",
      },
      {
        name: "REST API",
        icon: "api",
      },
    ],
  },

  // ================= PROJECTS =================
  projects: {
    title: "My Projects",

    subtitle: "Here are some of the projects I have worked on.",

    items: [
      {
        title: "Emergency SOS",

        type: "Team Project",

        image: emergencySOS,

        description:
          "A web application that enables users to send emergency alerts and share their live location with trusted contacts during emergencies.",

        skills: [
          "React.js",
          "Node.js & Express.js",
          "REST API Development",
          "Location Integration",
          "MySQL Database",
          "Git & GitHub",
        ],

        github: "https://github.com/Cody-Abhi/CrisisBridge",
      },

      {
        title: "Job Testing Application",

        type: "Individual Project",

        image: jobTesting,

        description:
          "An online platform where users can take aptitude and technical tests, receive instant scores, and prepare for interviews.",

        skills: [
          "HTML5 & CSS3",
          "JavaScript",
          "React.js",
          "Responsive Design",
          "Form Validation",
          "Git & GitHub",
        ],

        github: "https://github.com/Astha0129/web-job-testing",
      },

      {
        title: "Student Data Collection System",

        type: "Individual Project",

        image: studentData,

        description:
          "A Flask-based application with a REST API and MySQL database for storing and managing student information securely.",

        skills: [
          "Python & Flask",
          "REST API",
          "MySQL",
          "CRUD Operations",
          "Backend Development",
          "Database Management",
        ],

        github:
          "https://github.com/Astha0129/student-management-api",
      },
    ],
  },

  // ================= CERTIFICATIONS =================
  certifications: {
    title: "Certifications",

    subtitle:
      "Certifications and achievements that showcase my continuous learning and technical growth.",

    items: [
      {
        title: "Build with AI",

        image: buildAI,

        description:
          "Participated in the Build with AI workshop organized by Google Developer Groups (GDG), where I explored Generative AI, AI tools, and practical AI applications.",

        badge: "Google Developer Groups",

        badgeColor: "primary",
      },

      {
        title: "CodeRush Hackathon",

        image: coderush,

        description:
          "Participated in the CodeRush Hackathon, collaborating with a team to design innovative software solutions and strengthen problem-solving skills.",

        badge: "Hackathon",

        badgeColor: "success",
      },

      {
        title: "Full Stack Development with Python",

        image: pythonFSD,

        description:
          "Successfully completed training in Full Stack Development with Python covering frontend development, backend development, databases, REST APIs, and web application development.",

        badge: "Full Stack Development",

        badgeColor: "warning text-dark",
      },
    ],
  },

  // ================= CONTACT =================
  contact: {
    title: "Contact Me",

    subtitle:
      "Feel free to connect with me for internships, collaborations, or software development opportunities.",

    heading: "Get In Touch",

    email: "asthad431@gmail.com",

    phone: "+91 9336055960",

    location: "Uttar Pradesh, India",

    github: {
      title: "GitHub Profile",
      link: "https://github.com/Astha0129",
    },

    linkedin: {
      title: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/aastha-dubey-9a3886383",
    },

    form: {
      title: "Send Message",

      namePlaceholder: "Your Name",

      emailPlaceholder: "Your Email",

      messagePlaceholder: "Your Message",

      button: "Send Message",
    },
  },

  // ================= FOOTER =================
  footer: {
    name: "Aastha Dubey",

    role: "Full Stack Developer | B.Tech CSE Student",

    github: "https://github.com/Astha0129",

    linkedin: "https://www.linkedin.com/in/aastha-dubey-9a3886383",

    email: "mailto:asthad431@gmail.com",

    copyright: "© 2026 Aastha Dubey. All Rights Reserved.",
  },
};

export default mydata;