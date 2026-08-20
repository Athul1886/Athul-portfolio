import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Project.css";
import { FaChevronDown } from "react-icons/fa";

import xpanzImage from "../../assets/images/xpanz.png";
import sparksImage from "../../assets/images/sparks.png";
import tyiImage from "../../assets/images/tyi.png";
import nispandImage from "../../assets/images/nispand.png";
import firstcryImage from "../../assets/images/firstcry.webp";
import azeeziaImage from "../../assets/images/azeezia.jpg";
import workerImage from "../../assets/images/worker.png";
import workerImage1 from "../../assets/images/worker1.png";
import workerImage2 from "../../assets/images/worker2.png";
import workerImage3 from "../../assets/images/worker3.png";
import thalirilaImage from "../../assets/images/thalirila.png";
// Add these imports near your other image imports at the top of Project.jsx
import darshanpujaWebImage from "../../assets/images/darshanpuja-web.png";
import darshanpujaMobileImage from "../../assets/images/darshanpuja-mobile.png";
import nispandMobileImage from "../../assets/images/nispand-mobile.png";
import sparksMobileImage from "../../assets/images/sparks-mobile.png";
import { motion, AnimatePresence } from "framer-motion";

/* ===== DATA ===== */
const workProjects = [
  {
    title: "Xpanz – E-Commerce Application",
    difficulty: "MEDIUM",
    diffClass: "diff-medium",
    images: [xpanzImage],
    desc: "Tested user, admin, and vendor modules including product listing, cart, order processing, and inventory flows. Performed UI, functional, and regression testing across admin, vendor, and delivery modules. Identified and reported defects using Zoho with clear documentation and proper severity classification.",
    skills: ["Manual Testing", "UI", "Regression"]
  },
  {
    title: "Sparks – Dating & Travel Application",
    difficulty: "HARD",
    diffClass: "diff-hard",
    images: [sparksImage],
    desc: "Tested matchmaking, travel partner discovery, dining, and community features. Performed end-to-end API testing for flight, Hotel booking using TBO APIs. Identified and reported defects using Zoho with clear documentation and proper severity classification.",
    skills: ["API Testing", "Postman", "TBO APIs"]
  },
  {
    title: "TYI – The Yoga Institute Website",
    difficulty: "MEDIUM",
    diffClass: "diff-medium",
    images: [tyiImage],
    desc: "Validated migration from React to Next.js. Tested pages like Shop, About Us, Yoga Retreat, and Courses along with admin panel. Identified and reported defects using Zoho with clear documentation and proper severity classification.",
    skills: ["UI Testing", "Functional", "Regression"]
  },
  {
    title: "Nispand – Mobile Application",
    difficulty: "MEDIUM",
    diffClass: "diff-medium",
    images: [nispandImage],
    desc: "Tested features like playback, streak tracking, and trending media sections. Performed UI, functional, and regression testing.",
    skills: ["Manual Testing", "UI Testing", "Mobile"]
  },
  {
    title: "Thalirila – E-Commerce Application",
    difficulty: "HARD",
    diffClass: "diff-hard",
    images: [thalirilaImage],
    desc: "Tested Thalirila, a single-store e-commerce web application with Admin and Vendor portals, ensuring smooth functionality across all user roles. Executed manual test cases covering product management, user workflows, and order processing. Identified and reported defects using Zoho with clear documentation and proper severity classification. Performed testing and validated data flow between frontend and backend systems.",
    skills: ["Manual Testing", "UI", "Regression"]
  },
];

const academicProjects = [
  {
    title: "FirstCry Testing Project",
    difficulty: "EASY",
    diffClass: "diff-easy",
    images: [firstcryImage],
    desc: "Manual testing project based on the FirstCry e-commerce platform, where I designed and executed test cases across modules like login, product pages, and user management. I reported bugs with severity and priority, and documented the results in a structured test report. This helped validate the system's functionality and identify critical issues.",
    skills: ["Manual Testing", "Excel", "Bug Reports"]
  },
  {
    title: "Workers Portal",
    difficulty: "MEDIUM",
    diffClass: "diff-medium",
    images: [workerImage, workerImage1, workerImage2, workerImage3],
    desc: "A web-based home services application designed to connect users with service providers. The system includes three modules: admin, user, and worker. Users can browse and book services like electrician, plumbing, AC repair etc. Admin manages bookings, assigns workers, and controls the system, while workers receive and complete assigned tasks. The main objective of the project is to save users' time by providing quick and reliable home services through an online platform.",
    skills: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "Sqlite"]
  },

  {
    title: "Azeezia Hospital Automation",
    difficulty: "HARD",
    diffClass: "diff-hard",
    images: [azeeziaImage],
    desc: "Automated testing using Selenium, Java, and TestNG. Covered navigation, forms, and validations with screenshot capture. Project involved automating critical workflows of the Azeezia Hospital website along with performance testing using JMeter. I executed test scripts, identified defects, and validated system behavior to improve reliability and performance.",
    skills: ["Selenium", "Java", "TestNG", "JMeter"]

  }
];

/* NEW: AUTOMATION PROJECTS SECTOR */
const automationProjects = [
  {
    title: "DarshanPuja – Web Automation",
    difficulty: "HARD",
    diffClass: "diff-hard",
    images: [darshanpujaWebImage],
    desc: "Built a scalable Selenium-style automation framework using Playwright with Java, following the Page Object Model (POM) design pattern for maintainability and reusability. Automated key user flows across temple browsing, puja booking, and chadhava offerings. Integrated automated HTML/Extent report generation with email trigger functionality to send test execution summaries after every run.",
    skills: ["Playwright", "Java", "POM", "Report Generation", "Email Trigger"]
  },
  {
    title: "Sparks – Mobile Automation",
    difficulty: "HARD",
    diffClass: "diff-hard",
    images: [sparksMobileImage],
    desc: "Automated core mobile flows of the Sparks dating & travel app using Maestro, writing test flows in YAML with custom JS logic for dynamic assertions. Covered onboarding, matchmaking, and discovery screens. Integrated automated report generation with email trigger after test execution.",
    skills: ["Maestro", "YAML", "JavaScript", "Android Studio", "Report Generation", "Email Trigger"]
  },
  {
    title: "Nispand – Mobile Automation",
    difficulty: "MEDIUM",
    diffClass: "diff-medium",
    images: [nispandMobileImage],
    desc: "Automated the Nispand wellness app (powered by The Yoga Institute) using Maestro, scripting flows in YAML with JS-based validations. Covered playback, streak tracking, and personalized program screens. Test runs generate automated reports with email trigger notifications.",
    skills: ["Maestro", "YAML", "JavaScript", "Android Studio", "Report Generation", "Email Trigger"]
  },
  {
    title: "DarshanPuja – Mobile Automation",
    difficulty: "HARD",
    diffClass: "diff-hard",
    images: [darshanpujaMobileImage],
    desc: "Automated the DarshanPuja mobile app covering temple darshan browsing, puja booking, and chadhava flows using Maestro with YAML-based test flows and JS logic for validations. Set up in Android Studio for local test execution. Integrated automated report generation with email trigger after each run.",
    skills: ["Maestro", "YAML", "JavaScript", "Android Studio", "Report Generation", "Email Trigger"]
  }
];

/* ===== CATEGORIES CONFIG ===== */
const categories = [
  { id: "sector01", tag: "SECTOR_01", title: "Work Experience Projects", projects: workProjects },
  { id: "sector02", tag: "SECTOR_02", title: "Automation Projects", projects: automationProjects },
  { id: "sector03", tag: "SECTOR_03", title: "Academic Testing Projects", projects: academicProjects }
];

/* ===== REUSABLE BOSS BATTLE CARD COMPONENT ===== */
function ProjectCard({ project }) {
  return (
    <div className="neon-card boss-battle-card group">
      <div className="boss-banner">
        {project.images.length > 1 ? (
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            slidesPerView={1}
            className="project-swiper"
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={project.title} className="boss-img" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img src={project.images[0]} alt={project.title} className="boss-img" />
        )}

        <div className="duotone-overlay" aria-hidden="true"></div>

        <div className={`difficulty-badge ${project.diffClass}`}>
          DIFF: {project.difficulty}
        </div>

        <div className="victory-stamp">
          <span>VICTORY</span>
        </div>
      </div>

      <div className="boss-content">
        <h3 className="boss-title">{project.title}</h3>
        <p className="boss-desc">{project.desc}</p>

        <div className="loot-container">
          {project.skills.map((skill, i) => (
            <span key={i} className="loot-tag">
              <span className="loot-prefix"></span> {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===== COLLAPSIBLE SECTOR COMPONENT ===== */
function ProjectSector({ category, isOpen, onToggle }) {
  return (
    <div className="project-category">
      <button
        className={`category-header sector-toggle ${isOpen ? "open" : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="category-tag">&gt; {category.tag}</span>
        <h3 className="category-title">{category.title}</h3>
        <span className="sector-count">
          [{category.projects.length} {category.projects.length === 1 ? "MISSION" : "MISSIONS"}]
        </span>
        <FaChevronDown className="sector-chevron" />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="projects-container">
              {category.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ===== MAIN COMPONENT ===== */
export default function Project() {
  const [openSector, setOpenSector] = useState("sector01"); // first sector open by default

  const toggleSector = (id) => {
    setOpenSector((prev) => (prev === id ? null : id));
  };

  return (
    <motion.section
      className="project cyber-project"
      id="project"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="cyber-section-header">
        <span className="cyber-tag">Deployed. Tested. Verified. A log of missions across web, mobile, and automation frontlines.</span>
        <h2 className="cyber-title">
          Projects<span className="blink-cursor">_</span>
        </h2>
        <div className="header-divider"></div>
      </div>

      {categories.map((category) => (
        <ProjectSector
          key={category.id}
          category={category}
          isOpen={openSector === category.id}
          onToggle={() => toggleSector(category.id)}
        />
      ))}
    </motion.section>
  );
}