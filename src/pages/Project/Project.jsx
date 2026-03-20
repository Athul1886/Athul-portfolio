
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Project.css";

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
import { motion } from "framer-motion";

/* ===== DATA ===== */
const workProjects = [
  {
    title: "Xpanz – E-Commerce Application",
    images: [xpanzImage],
    desc: "Tested user, admin, and vendor modules including product listing, cart, order processing, and inventory flows. Performed UI, functional, and regression testing across admin, vendor, and delivery modules. Identified and reported defects using Zoho with clear documentation and proper severity classification",
    skills: ["Manual Testing", "UI", "Regression"]
  },
  {
    title: "Sparks – Dating & Travel Application",
    images: [sparksImage],
    desc: "Tested matchmaking, travel partner discovery, dining, and community features. Performed end-to-end API testing for flight,Hotel booking using TBO APIs. Identified and reported defects using Zoho with clear documentation and proper severity classification",
    skills: ["API Testing", "Postman", "TBO APIs"]
  },
  {
    title: "TYI – The Yoga Institute Website",
    images: [tyiImage],
    desc: "Validated migration from React to Next.js. Tested pages like Shop, About Us, Yoga Retreat, and Courses along with admin panel. Identified and reported defects using Zoho with clear documentation and proper severity classification",
    skills: ["UI Testing", "Functional", "Regression"]
  },
  {
    title: "Nispand – Mobile Application",
    images: [nispandImage],
    desc: "Tested features like playback, streak tracking, and trending media sections. Performed UI, functional, and regression testing.",
    skills: ["Manual Testing", "UI Testing", "Mobile"]
  },
  {
    title: "Thalirila – E-Commerce Application",
    images: [thalirilaImage],
    desc: "Tested Thalirila, a single-store e-commerce web application with Admin and Vendor portals, ensuring smooth functionality across all user roles. Executed manual test cases covering product management, user workflows, and order processing. Identified and reported defects using Zoho with clear documentation and proper severity classification. Performed testing and validated data flow between frontend and backend systems.",
    skills: ["Manual Testing", "UI", "Regression"]
  },
];

const academicProjects = [
  {
    title: "FirstCry Testing Project",
    images: [firstcryImage],
    desc: "Manual testing project based on the FirstCry e-commerce platform, where I designed and executed test cases across modules like login, product pages, and user management. I reported bugs with severity and priority, and documented the results in a structured test report. This helped validate the system’s functionality and identify critical issues.",
    skills: ["Manual Testing", "Excel", "Bug Reports"]
  },
  {
    title: "Azeezia Hospital Automation",
    images: [azeeziaImage],
    desc: "Automated testing using Selenium, Java, and TestNG. Covered navigation, forms, and validations with screenshot capture.project involved automating critical workflows of the Azeezia Hospital website along with performance testing using JMeter. I executed test scripts, identified defects, and validated system behavior to improve reliability and performance",
    skills: ["Selenium", "Java", "TestNG", "JMeter"]
  },
  {
    title: "Workers Portal",
    images: [workerImage, workerImage1, workerImage2, workerImage3],
    desc: "A web-based home services application designed to connect users with service providers. The system includes three modules: admin, user, and worker. Users can browse and book services like electrician, plumbing, AC repair etc. Admin manages bookings, assigns workers, and controls the system, while workers receive and complete assigned tasks. The main objective of the project is to save users’ time by providing quick and reliable home services through an online platform",
    skills: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "Sqlite"]
  }
];

/* ===== REUSABLE CARD COMPONENT ===== */
function ProjectCard({ project }) {
  return (
    <div className="project-card">

      {/* ✅ CONDITIONAL SWIPER */}
      {project.images.length > 1 ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,          // time between slides (ms)
            disableOnInteraction: false, // keeps autoplay after swipe
            pauseOnMouseEnter: true      // stops when user hovers
          }}
          loop={true}             // infinite loop
          slidesPerView={1}
          className="project-swiper"
        >
          {project.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={project.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <img src={project.images[0]} alt={project.title} />
      )}

      <h3>{project.title}</h3>
      <p>{project.desc}</p>

      <div className="skills">
        {project.skills.map((skill, i) => (
          <span key={i}>{skill}</span>
        ))}
      </div>

    </div>
  );
}

/* ===== MAIN COMPONENT ===== */
export default function Project() {
  return (
    <motion.section
      className="project"
      id="project"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* TITLE */}
      <div className="title">
        <h2>Projects</h2>
      </div>

      {/* WORK PROJECTS */}
      <div className="project-category">
        <h3 className="category-title">Work Projects</h3>

        <div className="projects-container">
          {workProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* ACADEMIC PROJECTS */}
      <div className="project-category" style={{ marginTop: "80px" }}>
        <h3 className="category-title">Academic Testing Projects</h3>

        <div className="projects-container">
          {academicProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

    </motion.section>
  );
}