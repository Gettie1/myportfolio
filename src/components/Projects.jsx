
import Footer from "../components/Footer.jsx";
const projects = [
  {
    title: "Hospital Management System",
    description:
      "A comprehensive system for managing hospital operations, including patient records, doctor schedules, and billing.",
    link: "https://github.com/Gettie1/hope-level-4-hospital-website", // Replace with actual project link
  },
  {
    title: "Technology Hub",
    description:
      "An innovative platform connecting developers, engineers, and tech enthusiasts to collaborate and share knowledge.",
    link: "https://github.com/Gettie1/TechnologyHub-Website", // Replace with actual project link
  },
];

function Projects() {
    return (
      <>
    <div className="project-container">
                <h2 className="project-title">My Projects</h2>
                <p className="project-intro">
                    Here are some of the projects I have worked on. Click on the links to view the projects.
                </p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
            </div>
            <Footer />
      </>
  );
}

export default Projects;