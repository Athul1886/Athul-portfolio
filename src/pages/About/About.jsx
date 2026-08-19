import { useState, useEffect, useRef, useCallback } from "react";
import "./About.css";
import Skills from "./Skills";
import { motion } from "framer-motion";

const BUG_ICON_URL = "https://lh3.googleusercontent.com/aida/AP1WRLv51J-TbM7Vdoj-VcWIO8rcDmgZkQP8Mpv0QGXsDFQgKdbxmHWQDvx9nYQmb6mOhrX7h2mHm4Fhln1S-Rw_9B7VmLIrQ-4o1aa_IRKZqPYJGm6SqvS9EFjmKBspmdzo4wNHnmMn6Orffjxvb4_O0JS46kpuoYlky0Pw1ZC1UYpox6paAWm3pT1eH0dBHOMuJfdtRNT1KhL62zsohyxGYm3LfcIu8V_KsUbqEN-prbDFd_jkH-CQn9s2kj8";

function About() {
  const [bugsFound, setBugsFound] = useState(0);
  const [bugPos, setBugPos] = useState({ top: 45, left: 45 });
  const [isSquashed, setIsSquashed] = useState(false);
  const [squashPos, setSquashPos] = useState({ top: 45, left: 45 });
  const gameAreaRef = useRef(null);

  const moveBug = useCallback(() => {
    if (isSquashed) return;
    const newTop = Math.floor(Math.random() * 70) + 15;
    const newLeft = Math.floor(Math.random() * 70) + 15;
    setBugPos({ top: newTop, left: newLeft });
  }, [isSquashed]);

  // Bug periodically wanders
  useEffect(() => {
    const interval = setInterval(() => {
      moveBug();
    }, 2200);
    return () => clearInterval(interval);
  }, [moveBug]);

  const handleSquash = (e) => {
    e.stopPropagation();
    setSquashPos({ top: bugPos.top, left: bugPos.left });
    setIsSquashed(true);
    setBugsFound((prev) => prev + 1);

    setTimeout(() => {
      setIsSquashed(false);
      const newTop = Math.floor(Math.random() * 70) + 15;
      const newLeft = Math.floor(Math.random() * 70) + 15;
      setBugPos({ top: newTop, left: newLeft });
    }, 600);
  };

  return (
    <motion.section
      className="about cyber-about"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* SECTION HEADER */}
      <div className="cyber-section-header">
        {/* <span className="cyber-tag">// SENTINEL_TELEMETRY</span> */}
        <h2 className="cyber-title">
          About Me<span className="blink-cursor">_</span>
        </h2>
        <div className="header-divider"></div>
      </div>

      {/* TERMINAL READOUT CARD */}
      <div className="about-terminal-container">
        <div className="terminal-card about-terminal">
          {/* TERMINAL HEADER */}
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <span className="terminal-file">sys_bio.sh</span>
            <span className="terminal-status">STATUS: ONLINE</span>
          </div>

          <div className="terminal-content-grid">
            {/* LEFT: BUG HUNTER MINI-GAME / TESTER ILLUSTRATION */}
            <div className="bug-hunter-wrapper">
              <div className="bug-game-terminal" ref={gameAreaRef}>
                {/* CORNER BRACKETS */}
                <div className="hud-corner top-left"></div>
                <div className="hud-corner top-right"></div>
                <div className="hud-corner bottom-left"></div>
                <div className="hud-corner bottom-right"></div>

                {/* GAME HEADER */}
                <div className="bug-game-header">
                  <span className="game-title">&gt; BUG_HUNTER.EXE</span>
                  <span className="bug-counter">
                    SQUASHED: <span className="counter-val">{bugsFound}</span>
                  </span>
                </div>

                {/* GAME CANVAS */}
                <div className="bug-canvas" onClick={moveBug}>
                  {/* TARGET BUG */}
                  {!isSquashed && (
                    <img
                      src={BUG_ICON_URL}
                      alt="Bug target - click to squash"
                      className="target-bug"
                      style={{
                        top: `${bugPos.top}%`,
                        left: `${bugPos.left}%`,
                      }}
                      onClick={handleSquash}
                      title="Target acquired: Click to eliminate bug!"
                    />
                  )}

                  {/* SQUASHED POPUP */}
                  {isSquashed && (
                    <div
                      className="squash-effect glitch-text"
                      style={{
                        top: `${squashPos.top}%`,
                        left: `${squashPos.left}%`,
                      }}
                    >
                      SQUASHED!
                    </div>
                  )}

                  {/* SCANNER CROSSHAIR OVERLAY */}
                  <div className="crosshair-indicator">
                    <span className="crosshair-text">&gt; CLICK_TO_SQUASH</span>
                  </div>
                </div>

                {/* GAME FOOTER */}
                <div className="bug-game-footer">
                  <span className="game-stat">DEFECT_TRACKER: ACTIVE</span>
                  <span className="game-status text-teal">0 ZERO_DAY</span>
                </div>
              </div>
            </div>

            {/* RIGHT: PROMPT-STYLE BIO */}
            <div className="terminal-log-body">
              <div className="log-row">
                <span className="prompt-symbol">&gt;</span>
                <span className="log-label">IDENTIFIER:</span>
                <span className="log-value text-white">Athul Krishna // QA Sentinel</span>
              </div>
              <div className="log-row">
                <span className="prompt-symbol">&gt;</span>
                <span className="log-label">DIRECTIVE:</span>
                <span className="log-value text-teal">Defect Eradication & Test Automation</span>
              </div>
              <div className="log-row">
                <span className="prompt-symbol">&gt;</span>
                <span className="log-label">EXPERTISE:</span>
                <span className="log-value text-tertiary">Functional, UI, Regression, API & Mobile Testing</span>
              </div>
              <div className="log-divider"></div>
              <div className="log-text-block">
                <p className="prompt-p">
                  <span className="prompt-symbol">&gt;</span> Software Testing professional with hands-on experience in manual and automation testing. Skilled in functional, UI, and regression testing, with experience in Selenium WebDriver, Java, and API testing. Focused on delivering reliable, high-quality applications and improving user experience.
                </p>
                <p className="prompt-p mt-3">
                  <span className="prompt-symbol">&gt;</span> Methodologies: Rigorous stress testing, automated test suites, CI/CD pipeline verification, and exploratory deep dives across web and mobile platforms.
                </p>
              </div>
              <div className="log-footer-cursor">
                <span className="prompt-symbol">&gt;</span>
                <span className="blink-cursor">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS TOOL SLIDER */}
      <Skills />
    </motion.section>
  );
}

export default About;