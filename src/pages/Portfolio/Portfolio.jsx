import Project from '../../Project/Project';
import './Portfolio.css';

function Portfolio() {
  // Array of your projects - you can add/modify these
  const projects = [
    {
      title: "Project 1",
      image: "/path-to-image.jpg",
      deployedLink: "https://deployed-site.com",
      githubLink: "https://github.com/your-repo",
      description: "Brief project description"
    },
    // Add more projects here
  ];

  return (
    <section className="portfolio">
      <h2>My Work</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;