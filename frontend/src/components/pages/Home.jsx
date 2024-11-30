import React from 'react'
import AboutMe from '../AboutMe'
import Skills from '../Skills'
import Education from '../Education'
import Image from '../Image'
import Projects from '../Projects'
import Blogs from '../Blogs'
import WorkExperience from '../WorkExperience'
import Socials from '../Socials'

function Home() {

    return (
        <>
            <div className="main">
            <div className="skills-image d-md-flex gap-3 container" style={{background:'transparent', border:'none', padding:'0'}}>
                    <div>
                        <AboutMe />
                        <br />
                        <Skills />
                        <br />
                        <WorkExperience />
                    </div>
                    <br />
                    <div className="image-socials">
                        <Image />
                        <br />
                        <Socials />
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="d-lg-flex-column">
                        <Education />
                        <Projects />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home