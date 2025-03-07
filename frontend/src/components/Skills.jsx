import React from 'react'
import { FaJava, FaNodeJs, FaPython, FaGit, FaGithub, FaHtml5, FaCss3, FaMicrosoft, FaGitAlt, FaReact, } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiMongodb, SiMongoose, SiExpress, SiJavascript, SiMysql, } from "react-icons/si"

function Skills() {
  return (
    <div id='skills' className='container'>
      <h1>Skills</h1>
      <center><hr /></center>
      <div className="skills-links">
        <div className='skilldiv'>
          <table>
            <tr>
              <td>
                <FaJava />
              </td>
              <td>Java</td>
            </tr>
          </table>
        </div>

        <div className='skilldiv'>
          <table>
            <tr>
              <td>
                <FaPython />
              </td>
              <td>Python</td>
            </tr>
          </table>
        </div>
        <div className='skilldiv'>
          <table>
            <tr>
              <td>
                <IoLogoJavascript />
              </td>
              <td>JavaScript</td>
            </tr>
          </table>
        </div>
        <div className='skilldiv'>
          <table>
            <tr>
              <td>
                <FaNodeJs />
              </td>
              <td>Node.js</td>
            </tr>
          </table>
        </div>
        <div className='skilldiv'>
          <table>
            <tr>
              <td>
                <SiExpress />
              </td>
              <td>Express.js</td>
            </tr>
          </table>
        </div>
        <div className='skilldiv'>
          <table>
            <tr>
              <td>
                <SiMongodb />
              </td>
              <td>MongoDB</td>
            </tr>
          </table>
        </div>
        <div className='skilldiv'>
          <table>
            <tr>
              <td>
                <SiMongoose />
              </td>
              <td>Mongoose</td>
            </tr>
          </table>
        </div>
        <div className='skilldiv'>
          <table>
            <tr>
              <td>
                <FaGitAlt />
              </td>
              <td>Git</td>
            </tr>
          </table>
        </div>
        <div className='skilldiv'>
          <table>
            <tr>
              <td>
                <FaGithub />
              </td>
              <td>Github</td>
            </tr>
          </table>
        </div>
        <div className='skilldiv'>
          <table>
            <tr>
              <td>
                <FaHtml5 />
              </td>
              <td>HTML</td>
            </tr>
          </table>
        </div>
        <div className='skilldiv'>
          <table>
            <tr>
              <td>
                <FaCss3 />
              </td>
              <td>CSS</td>
            </tr>
          </table>
        </div>
        <div className='skilldiv'>
          <table>
            <tr>
              <td>
                <SiMysql />
              </td>
              <td>MySQL</td>
            </tr>
          </table>
        </div>
        <div className='skilldiv'>
          <table>
            <tr>
              <td>
                <FaMicrosoft />
              </td>
              <td>Microsoft Office</td>
            </tr>
          </table>
        </div>
        <div className='skilldiv'>
          <table>
            <tr>
              <td>
                <FaReact />
              </td>
              <td>React</td>
            </tr>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Skills