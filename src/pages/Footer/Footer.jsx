import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        <p>ATHUL KRISHNA</p>

        <div className="social-icons">

          {/* <a href="#"><FaGithub/></a> */}
          <a href="https://www.linkedin.com/in/athul-krishna-u-2618aa333/"><FaLinkedin /></a>
          {/* <a href="#"><FaInstagram/></a> */}

        </div>

      </div>

    </footer>

  )

}

export default Footer;