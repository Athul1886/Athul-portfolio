import "./Skills.css";

import {
  FaJava,
  FaPython,
  FaDatabase,
  FaFileExcel,
  FaVial,
  FaMobileAlt,
  FaGlobe,
  FaCode,
  FaTheaterMasks,
  FaRobot
} from "react-icons/fa";

import {
  SiSelenium,
  SiPostman,
  SiJira,
  SiJavascript,
  SiApachejmeter,
  SiFigma
} from "react-icons/si";

import { TbBrandOpenai } from "react-icons/tb";

function Skills() {
  const qaTools = [
    { icon: <FaVial />, name: "Manual Testing" },
    { icon: <SiSelenium />, name: "Selenium + Java" },
    { icon: <FaTheaterMasks />, name: "Playwright + Java" },
    { icon: <FaMobileAlt />, name: "Mobile Automation" },
    { icon: <FaGlobe />, name: "Web Automation" },
    { icon: <FaMobileAlt />, name: "Maestro" },
    { icon: <FaCode />, name: "YAML" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <FaCode />, name: "API Testing" },
    { icon: <SiApachejmeter />, name: "JMeter" },
    { icon: <FaVial />, name: "TestNG" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <SiJira />, name: "Jira" },
    { icon: <FaFileExcel />, name: "Excel" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <FaRobot />, name: "Claude" },
    { icon: <TbBrandOpenai />, name: "ChatGPT" }
  ];

  return (
    <div className="skills">
      <div className="skills-slider">
        <div className="skills-track">
          {qaTools.map((tool, index) => (
            <div className="skill-item" key={index}>
              {tool.icon}
              <span>{tool.name}</span>
            </div>
          ))}
          {/* Duplicate for seamless scrolling */}
          {qaTools.map((tool, index) => (
            <div className="skill-item" key={`dup-${index}`}>
              {tool.icon}
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;