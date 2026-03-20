import "./Skills.css";

import {
  FaJava,
  FaPython,
  FaDatabase,
  FaFileExcel,
  FaCogs
} from "react-icons/fa";

import {
  SiSelenium,
  SiPostman,
  SiJira
} from "react-icons/si";

import { TbBrandOpenai } from "react-icons/tb";

function Skills() {
  const qaTools = [
    { icon: <SiSelenium />, name: "Selenium" },
    { icon: <FaCogs />, name: "Playwright" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <SiJira />, name: "Jira" },
    { icon: <FaFileExcel />, name: "Excel" },
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