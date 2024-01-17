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
                <br />
                <div className="skills-image">
                    <div>
                        <AboutMe />
                        <br />
                        <Skills />
                        <br />
                        <WorkExperience />
                    </div>
                    <div className="image-socials">
                        <Image />
                        <br />
                        <Socials />
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="d-lg-flex">
                        <Education />
                        <Projects />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home