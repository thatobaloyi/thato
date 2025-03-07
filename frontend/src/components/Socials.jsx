
import {FaInstagram, FaGithub, FaInbox, FaPhone, FaTwitch, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Image from './Image';
const Socials = () => {
  return (
    <div className="container socials">
      <center><Image></Image></center>
      <br />
    
      <center><h3>Connect with me:</h3></center>
      <center><hr /></center>
      <ul>
        <li> 
            <FaPhone /> <a href="tel:+27797439455">(+27) 79 743 9455</a> 
        </li>
        <br />
        <li> 
            <FaInbox /> <a href="mailto:thato2313321@gmail.com">thato2313321@gmail.com</a>
        </li>
        <br />
        <li>
          <a href="https://instagram.com/teamesb" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
        </li>
        <br />
        <li>
          <a href="https://github.com/thatobaloyi" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </li>
        <br />
        <li>
          <a href="https://twitch.tv/teamesb03" target="_blank" rel="noopener noreferrer">
            <FaTwitch /> Twitch
          </a>
        </li>
        <br />
        <li>
          <a href="https://www.youtube.com/channel/UCOikB53sDG15DCHOYJyIzbg" target="_blank" rel="noopener noreferrer">
            <FaYoutube /> YouTube
          </a>
        </li>
        <br />
        <li>
          <a href="https://www.linkedin.com/in/thato-baloyi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
