import './Project.css';

function Project({ title, image, deployedLink, githubLink, description}) {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
                <div  className="project-overlay">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="project-links">
                    <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live Site</a>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    </div>
                    </div>
                    </div>
    );
}

export default Project;