import { useState, useEffect, useRef, useCallback } from "react";
import "./About.css";
import Skills from "./Skills";
import { motion } from "framer-motion";

const BUG_ICON_URL = "https://lh3.googleusercontent.com/aida/AP1WRLv51J-TbM7Vdoj-VcWIO8rcDmgZkQP8Mpv0QGXsDFQgKdbxmHWQDvx9nYQmb6mOhrX7h2mHm4Fhln1S-Rw_9B7VmLIrQ-4o1aa_IRKZqPYJGm6SqvS9EFjmKBspmdzo4wNHnmMn6Orffjxvb4_O0JS46kpuoYlky0Pw1ZC1UYpox6paAWm3pT1eH0dBHOMuJfdtRNT1KhL62zsohyxGYm3LfcIu8V_KsUbqEN-prbDFd_jkH-CQn9s2kj8";

// Difficulty tuning
const BASE_INTERVAL_MS = 2200;
const MIN_INTERVAL_MS = 700;
const INTERVAL_STEP_MS = 110;

const BASE_SIZE_PX = 46;
const MIN_SIZE_PX = 22;
const SIZE_STEP_PX = 1.5;

const EVADE_RADIUS_PERCENT = 16; // how close (in % of canvas) before it flees
const EVADE_COOLDOWN_MS = 180;   // prevents jitter-spam while cursor lingers nearby

function About() {
  const [bugsFound, setBugsFound] = useState(0);
  const [bugPos, setBugPos] = useState({ top: 45, left: 45 });
  const [isSquashed, setIsSquashed] = useState(false);
  const [squashPos, setSquashPos] = useState({ top: 45, left: 45 });
  const gameAreaRef = useRef(null);
  const canvasRef = useRef(null);
  const lastEvadeRef = useRef(0);

  const bugSize = Math.max(MIN_SIZE_PX, BASE_SIZE_PX - bugsFound * SIZE_STEP_PX);
  const wanderInterval = Math.max(MIN_INTERVAL_MS, BASE_INTERVAL_MS - bugsFound * INTERVAL_STEP_MS);

  const randomPos = () => ({
    top: Math.floor(Math.random() * 70) + 15,
    left: Math.floor(Math.random() * 70) + 15,
  });

  const moveBug = useCallback(() => {
    if (isSquashed) return;
    setBugPos(randomPos());
  }, [isSquashed]);

  // Bug periodically wanders — speed scales with score
  useEffect(() => {
    const interval = setInterval(() => {
      moveBug();
    }, wanderInterval);
    return () => clearInterval(interval);
  }, [moveBug, wanderInterval]);

  // EVADE-ON-APPROACH: track pointer position over the canvas;
  // if it gets close to the bug, flee to a new spot before it can be clicked
  const handlePointerMove = (e) => {
    if (isSquashed || !canvasRef.current) return;

    const now = Date.now();
    if (now - lastEvadeRef.current < EVADE_COOLDOWN_MS) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const pointerLeftPercent = ((clientX - rect.left) / rect.width) * 100;
    const pointerTopPercent = ((clientY - rect.top) / rect.height) * 100;

    const dx = pointerLeftPercent - bugPos.left;
    const dy = pointerTopPercent - bugPos.top;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < EVADE_RADIUS_PERCENT) {
      lastEvadeRef.current = now;
      setBugPos(randomPos());
    }
  };

  const handleSquash = (e) => {
    e.stopPropagation();
    setSquashPos({ top: bugPos.top, left: bugPos.left });
    setIsSquashed(true);
    setBugsFound((prev) => prev + 1);

    setTimeout(() => {
      setIsSquashed(false);
      setBugPos(randomPos());
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
        <h2 className="cyber-title">
          About Me<span className="blink-cursor">_</span>
        </h2>
        <div className="header-divider"></div>
      </div>

      {/* TERMINAL READOUT CARD */}
      <div className="about-terminal-container">
        <div className="terminal-card about-terminal">
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
            {/* LEFT: BUG HUNTER MINI-GAME */}
            <div className="bug-hunter-wrapper">
              <div className="bug-game-terminal" ref={gameAreaRef}>
                <div className="hud-corner top-left"></div>
                <div className="hud-corner top-right"></div>
                <div className="hud-corner bottom-left"></div>
                <div className="hud-corner bottom-right"></div>

                <div className="bug-game-header">
                  <span className="game-title">&gt; BUG_HUNTER.EXE</span>
                  <span className="bug-counter">
                    SQUASHED: <span className="counter-val">{bugsFound}</span>
                  </span>
                </div>

                <div
                  className="bug-canvas"
                  ref={canvasRef}
                  onClick={moveBug}
                  onMouseMove={handlePointerMove}
                  onTouchMove={handlePointerMove}
                >
                  {!isSquashed && (
                    <img
                      src={BUG_ICON_URL}
                      alt="Bug target - click to squash"
                      className="target-bug"
                      style={{
                        top: `${bugPos.top}%`,
                        left: `${bugPos.left}%`,
                        width: `${bugSize}px`,
                        height: `${bugSize}px`,
                      }}
                      onClick={handleSquash}
                      title="Target acquired: Click to eliminate bug!"
                    />
                  )}

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

                  <div className="crosshair-indicator">
                    <span className="crosshair-text">&gt; CLICK_TO_SQUASH</span>
                  </div>
                </div>

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
                <span className="log-value text-white">Athul Krishna // QA Engineer</span>
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

      <Skills />
    </motion.section>
  );
}

export default About;