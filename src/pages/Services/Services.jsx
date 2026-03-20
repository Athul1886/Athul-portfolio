import "./Services.css";
import {
  FaCheckCircle,
  FaCogs,
  FaServer,
  FaJava,
  FaPython,
  FaDatabase,
  FaFileExcel
} from "react-icons/fa";

import { SiSelenium, SiPostman, SiJira, SiOpenai } from "react-icons/si";
import { motion } from "framer-motion";

function Skill() {
  const qaSkills = [
    { icon: <FaCheckCircle className="skill-icon" />, name: "Manual Testing" },
    { icon: <FaCogs className="skill-icon" />, name: "Automation Testing" },
    { icon: <FaServer className="skill-icon" />, name: "API Testing" },
    { icon: <SiSelenium className="skill-icon" />, name: "Selenium" },
    { icon: <SiPostman className="skill-icon" />, name: "Postman" },
    { icon: <FaJava className="skill-icon" />, name: "Java" },
    { icon: <FaPython className="skill-icon" />, name: "Python" },
    { icon: <FaDatabase className="skill-icon" />, name: "SQL" },
    { icon: <SiJira className="skill-icon" />, name: "Jira" },
    { icon: <FaFileExcel className="skill-icon" />, name: "Excel" },
    { icon: <SiOpenai className="skill-icon" />, name: "ChatGPT" }
  ];

  return (
    <motion.div
      className="skill"
      id="skill"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      {/* TITLE */}
      <div className="title">
        <h2>Skills</h2>
      </div>

      {/* SKILLS GRID */}
      <div className="skill-container">
        {qaSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill.icon}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

    </motion.div>
  );
}

export default Skill;