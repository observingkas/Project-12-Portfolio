//Import styling

import './About.css';

function About() {
    return (
        <section className="about">
            <h2>About Me</h2>
            
            {/* Profile image container */}
            <div className="profile-image">
                <img src="/"C:\Users\kKat\Pictures\bleh.jpg" alt="Full-Stack Web Developer" />
                </div>

                {/* Bio content */}
                <div className="bio">
                <p>
                Welcome! I'm Kassandra, a full-stack web developer passionate about 
                creating responsive and user-friendly applications. I strive to bring a unique perspective to every project.
                    </p>
                    </div>
    </section>
  );
}

export default About;