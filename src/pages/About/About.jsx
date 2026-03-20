import { useState } from "react";
import profileImg from "../../assets/images/athul1.jpg";
import profileImg2 from "../../assets/images/athul2.jpg";
import "./About.css";
import Skills from "./Skills";
import { motion } from "framer-motion";

function About() {
  const [flip, setFlip] = useState(false);

  return (
    <motion.div
      className="about"
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      {/* TITLE */}
      <div className="title">
        <h2>About Me</h2>
      </div>

      {/* CONTENT */}
      <div className="content">

        {/* PHOTO CARD */}
        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >
          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT */}
            <div className="photo-front">
              <img src={profileImg2} alt="Athul Krishna" />
            </div>

            {/* BACK */}
            <div className="photo-back info-card">
              <h3>QA Tester</h3>
              <p>Selenium • Playwright • API Testing</p>
              <p>Manual + Automation</p>
            </div>

          </div>
        </div>

        {/* TEXT */}
        <div className="text-about">
          <p>
            Software Testing professional with hands-on experience in manual and automation testing. Skilled in functional, UI, and regression testing, with experience in Selenium WebDriver, Java, and API testing. Focused on delivering reliable, high-quality applications and improving user experience.
          </p>
        </div>

      </div>

      {/* SKILLS SECTION */}
      <Skills />

    </motion.div>
  );
}

export default About;