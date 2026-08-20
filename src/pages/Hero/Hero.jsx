import "./Hero.css";
import profileImg from "../../assets/images/athul.png";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const heroRef = useRef(null);
  const spotlightRef = useRef(null);
  const [spotlightVisible, setSpotlightVisible] = useState(false);

  useEffect(() => {
    const heroEl = heroRef.current;
    const spotlightEl = spotlightRef.current;
    if (!heroEl || !spotlightEl) return;

    const handleMouseMove = (e) => {
      const rect = heroEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlightEl.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseEnter = () => setSpotlightVisible(true);
    const handleMouseLeave = () => setSpotlightVisible(false);

    heroEl.addEventListener("mousemove", handleMouseMove);
    heroEl.addEventListener("mouseenter", handleMouseEnter);
    heroEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      heroEl.removeEventListener("mousemove", handleMouseMove);
      heroEl.removeEventListener("mouseenter", handleMouseEnter);
      heroEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero cyber-hero" id="hero" ref={heroRef}>
      {/* VIOLET CURSOR SPOTLIGHT */}
      <div
        className={`hero-spotlight ${spotlightVisible ? "visible" : ""}`}
        ref={spotlightRef}
        aria-hidden="true"
      />

      {/* AMBIENT CYBER BACKGROUND */}
      <div className="cyber-grid-bg" aria-hidden="true"></div>
      <div className="cyber-ambient-glow" aria-hidden="true"></div>

      <div className="hero-container">
        {/* LEFT COLUMN: TERMINAL & BIO */}
        <div className="hero-left">
          {/* SYSTEM STATUS TAG */}
          <div className="status-badge">
            <span className="status-dot"></span>
            <span className="status-text">&gt; INITIALIZING_QA_PROFILE...</span>
            <span className="status-version">V2.4</span>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="hero-title">
            Athul Krishna<span className="blink-cursor">_</span>
          </h1>

          {/* DYNAMIC CLASS / ROLE BADGE */}
          <div className="class-badge-container">
            <div className="cyber-class-badge">
              <span className="badge-prefix">CLASS:</span>
              <TypeAnimation
                sequence={[
                  "Quality Assurance Tester",
                  2000,
                  "Automation Testing",
                  2000,
                  "Bug Hunter",
                  2000,
                  "API & Performance Testing",
                  2000,
                  "Moile App Automation",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="type-role"
              />
              <span className="badge-level">LVL 99</span>
            </div>
          </div>

          {/* MISSION BRIEF / DESCRIPTION */}
          <p className="hero-description">
            Breaking systems before users do. Engineering high-precision test automation,
            isolating edge-case anomalies, and fortifying mission-critical software architectures.
          </p>

          {/* TECH CHIPS */}
          <div className="tech-chips">
            <span className="tech-chip">SELENIUM</span>
            <span className="tech-chip">PLAYWRIGHT</span>
            <span className="tech-chip">MAESTRO</span>
            <span className="tech-chip">POSTMAN</span>
            <span className="tech-chip">CYPRESS</span>
            <span className="tech-chip">CI/CD</span>
            <span className="tech-chip">REST API</span>
          </div>

          {/* ACTION BUTTONS */}
          <div className="hero-actions">
            <a href="#project" className="chamfer-btn">
              <span>EXPLORE_PROJECTS</span>
              <span className="btn-arrow">&rarr;</span>
            </a>
            <a href="#contact" className="chamfer-btn chamfer-btn-secondary">
              <span>CONTACT</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: CYBER HUD PROFILE FRAME */}
        <div className="hero-right">
          <div className="profile-hud-card">
            {/* CORNER BRACKETS */}
            <div className="hud-corner top-left"></div>
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <div className="hud-corner bottom-right"></div>

            {/* TOP CARD BAR */}
            <div className="hud-header">
              <span className="hud-title">ATHUL_KRISHNA // QA Engineer</span>
              <span className="hud-status">ONLINE</span>
            </div>

            {/* IMAGE CONTAINER WITH SCANLINE & DUOTONE EFFECT */}
            <div className="hud-img-wrapper">
              <img src={profileImg} alt="Athul Krishna - QA Engineer" className="profile-image" />
              <div className="duotone-overlay" aria-hidden="true"></div>
              <div className="hud-scanner-bar" aria-hidden="true"></div>
            </div>

            {/* BOTTOM CARD STATS */}
            <div className="hud-footer">
              <div className="hud-stat-item">
                <span className="stat-label">DEFECT DETECTION</span>
                <span className="stat-value">99.8%</span>
              </div>
              <div className="hud-stat-item">
                <span className="stat-label">SECURITY RATING</span>
                <span className="stat-value text-teal">CLEARED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLLING TICKER MARQUEE */}
      <div className="cyber-ticker-wrap">
        <div className="cyber-ticker">
          <span>AUTOMATION TESTING</span>
          <span className="ticker-sep">//</span>
          <span>API VALIDATION</span>
          <span className="ticker-sep">//</span>
          <span>SELENIUM</span>
          <span className="ticker-sep">//</span>
          <span>PLAYWRIGHT</span>
          <span className="ticker-sep">//</span>
          <span>CYPRESS</span>
          <span className="ticker-sep">//</span>
          <span>CI/CD PIPELINES</span>
          <span className="ticker-sep">//</span>
          <span>POSTMAN</span>
          <span className="ticker-sep">//</span>
          <span>GRAPHQL</span>
          <span className="ticker-sep">//</span>
          <span>JIRA</span>
          <span className="ticker-sep">//</span>
          <span>PERFORMANCE TESTING</span>
          <span className="ticker-sep">//</span>
          <span>EDGE CASE ERADICATION</span>
          <span className="ticker-sep">//</span>
        </div>
      </div>
    </section>
  );
}