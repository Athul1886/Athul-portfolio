import "./Hero.css";
import profileImg from "../../assets/images/athul.png";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {

  useEffect(() => {
    const glow = document.querySelector(".mouse-glow");

    const moveGlow = (e) => {
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", moveGlow);

    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <div className="hero" id="hero">

      {/* 🔥 BACKGROUND LAYERS */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="mouse-glow"></div>

      <div className="content">

        <div className="hero-left">
          <h1>Athul Krishna</h1>
          <h2>Quality Assurance Tester</h2>
          <p>
            Manual Testing | Automation Testing | Selenium | Playwright | API Testing
          </p>

          <div className="buttons-container">
            <a href="#project" className="button">View Projects</a>
            <a href="#contact" className="button">Contact Me</a>
          </div>
        </div>

        <div className="hero-right">
          <img src={profileImg} alt="Athul Krishna" />
        </div>

      </div>

    </div>
  );
}