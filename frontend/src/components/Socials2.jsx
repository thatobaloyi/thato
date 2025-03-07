
import {FaInstagram, FaGithub, FaTwitch, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Socials2 = () => {
  return (
    <div className="socials2">
      <ul>
        <li>
          <a href="https://instagram.com/teamesb" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        <br />
        <li>
          <a href="https://github.com/thatobaloyi" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <br />
        <li>
          <a href="https://twitch.tv/teamesb03" target="_blank" rel="noopener noreferrer">
            <FaTwitch />
          </a>
        </li>
        <br />
        <li>
          <a href="https://www.youtube.com/channel/UCOikB53sDG15DCHOYJyIzbg" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </li>
        <br />
        <li>
          <a href="https://www.linkedin.com/in/thato-baloyi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        
      </ul>
    </div>
  );
}

export default Socials2;
