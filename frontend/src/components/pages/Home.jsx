import React from 'react'
import AboutMe from '../AboutMe'
import Skills from '../Skills'
import Education from '../Education'
import Projects from '../Projects'
import WorkExperience from '../WorkExperience'
import Socials from '../Socials'

function Home() {

    return (
        <>
            <div className="main">
                <div className="skills-image d-md-flex gap-4 container" style={{ background: 'transparent', border: 'none', padding: '0' }}>
                    <div>
                        <AboutMe />
                        <br />
                        <Skills />
                    </div>

                    <div className="image-socials">
                        <br />
                        <Socials />
                    </div>
                </div>
                <br />
                <WorkExperience />
                <br />
                <Education />
                <br />
                <Projects />
            </div>
        </>
    )
}

export default Home