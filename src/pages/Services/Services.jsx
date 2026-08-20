import "./Services.css";
import { useState } from "react";
import {
  FaCheckCircle,
  FaCogs,
  FaServer,
  FaJava,
  FaPython,
  FaDatabase,
  FaFileExcel,
  FaVial,
  FaGitAlt,
  FaTasks,
  FaTheaterMasks,
  FaChevronDown,
  FaChevronUp,
  FaRobot
} from "react-icons/fa";

import { SiSelenium, SiPostman, SiJira, SiApachejmeter, SiFigma } from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { motion } from "framer-motion";

function Skill() {
  const qaSkills = [
    { icon: <FaCheckCircle className="skill-icon" />, name: "Manual Testing", level: "LVL 99", filled: 5 },
    { icon: <FaCogs className="skill-icon" />, name: "Automation Testing", level: "LVL 95", filled: 5 },
    { icon: <FaServer className="skill-icon" />, name: "API Testing", level: "LVL 92", filled: 5 },
    { icon: <SiSelenium className="skill-icon" />, name: "Selenium", level: "LVL 90", filled: 4 },
    { icon: <FaTheaterMasks className="skill-icon" />, name: "Playwright", level: "LVL 88", filled: 4 },
    { icon: <SiPostman className="skill-icon" />, name: "Postman", level: "LVL 95", filled: 5 },
    { icon: <FaJava className="skill-icon" />, name: "Java", level: "LVL 85", filled: 4 },
    { icon: <FaPython className="skill-icon" />, name: "Python", level: "LVL 80", filled: 4 },
    { icon: <FaDatabase className="skill-icon" />, name: "SQL", level: "LVL 88", filled: 4 },
    { icon: <SiJira className="skill-icon" />, name: "Jira", level: "LVL 95", filled: 5 },
    { icon: <FaGitAlt className="skill-icon" />, name: "Git", level: "LVL 85", filled: 4 },
    { icon: <SiApachejmeter className="skill-icon" />, name: "JMeter", level: "LVL 78", filled: 4 },
    { icon: <FaVial className="skill-icon" />, name: "TestNG", level: "LVL 82", filled: 4 },
    { icon: <FaTasks className="skill-icon" />, name: "Agile / Scrum", level: "LVL 90", filled: 4 },
    { icon: <SiFigma className="skill-icon" />, name: "Figma", level: "LVL 75", filled: 3 },
    { icon: <FaFileExcel className="skill-icon" />, name: "Excel", level: "LVL 90", filled: 4 },
    { icon: <TbBrandOpenai className="skill-icon" />, name: "ChatGPT", level: "LVL 92", filled: 5 },
    { icon: <FaRobot className="skill-icon" />, name: "Claude", level: "LVL 92", filled: 5 }
  ];

  const INITIAL_COUNT = 6;
  const [expanded, setExpanded] = useState(false);
  const hasMore = qaSkills.length > INITIAL_COUNT;
  const visibleSkills = expanded ? qaSkills : qaSkills.slice(0, INITIAL_COUNT);

  return (
    <motion.section
      className="skill cyber-skills"
      id="skill"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* SECTION HEADER */}
      <div className="cyber-section-header">
        <span className="cyber-tag"> </span>
        <h2 className="cyber-title">
          Skills<span className="blink-cursor">_</span>
        </h2>
        <div className="header-divider"></div>
      </div>

      {/* LEVEL SELECT GRID */}
      <div className="skill-container">
        {visibleSkills.map((skill, index) => (
          <div className="neon-card level-select-card" key={index}>
            <div className="level-badge-header">
              <span className="level-badge">{skill.level}</span>
              <span className="xp-label">XP_STAT</span>
            </div>

            <div className="level-card-main">
              {skill.icon}
              <h3 className="level-skill-title">{skill.name}</h3>
            </div>

            <div className="segmented-bar-container">
              <div className="segmented-bar">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`segment ${i < skill.filled ? "filled" : ""}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* READ MORE / SHOW LESS TOGGLE */}
      {hasMore && (
        <div className="skill-toggle-wrapper">
          <button
            className="cyber-toggle-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                Show Less <FaChevronUp />
              </>
            ) : (
              <>
                Read More ({qaSkills.length - INITIAL_COUNT}+ more) <FaChevronDown />
              </>
            )}
          </button>
        </div>
      )}
    </motion.section>
  );
}

export default Skill;