import "./Contact.css";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheck } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Keep standard contact submission logic
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section className="contact cyber-contact" id="contact">
      {/* SECTION HEADER */}
      <div className="cyber-section-header">
        <span className="cyber-tag">// SECURE_UPLINK</span>
        <h2 className="cyber-title">
          Get In Touch<span className="blink-cursor">_</span>
        </h2>
        <p className="cyber-subtitle">
          Initiate encrypted comms or collaborate on mission-critical QA engineering challenges.
        </p>
      </div>

      <div className="contact-container">
        {/* LEFT COLUMN: CYBER TERMINAL READOUT */}
        <div className="terminal-card contact-terminal">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <span className="terminal-file">sys_comms.sh</span>
            <span className="terminal-status">ENC: AES-256</span>
          </div>

          <div className="terminal-body">
            <div className="terminal-log">
              <p className="log-line">
                <span className="prompt-symbol">&gt;</span> STATUS: <span className="text-teal">ONLINE // ACCEPTING_TRANSMISSIONS</span>
              </p>
              <p className="log-line">
                <span className="prompt-symbol">&gt;</span> TARGET_ROLE: <span className="text-tertiary">QA Engineer / Automation</span>
              </p>
              <p className="log-line">
                <span className="prompt-symbol">&gt;</span> READY_FOR: Contract, Full-time, Automated QA pipelines.
              </p>
            </div>

            {/* DIRECT COMMS CHANNELS */}
            <div className="channel-list">
              <div className="channel-title">
                <span className="prompt-symbol">&gt;</span> DIRECT_COMMON_CHANNELS:
              </div>

              <a
                href="mailto:athul1886@gmail.com"
                className="channel-item"
                title="Send Email"
              >
                <span className="channel-arrow">&gt;</span>
                <FaEnvelope className="channel-icon" />
                <span className="channel-text">athul1886@gmail.com</span>
                <span className="channel-badge">PRIMARY</span>
              </a>

              <a
                href="https://www.linkedin.com/in/athul-krishna-u-2618aa333/"
                target="_blank"
                rel="noreferrer"
                className="channel-item"
                title="LinkedIn Profile"
              >
                <span className="channel-arrow">&gt;</span>
                <FaLinkedin className="channel-icon" />
                <span className="channel-text">CONNECT_LINKEDIN</span>
                <span className="channel-badge">NETWORK</span>
              </a>

              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="channel-item"
                title="GitHub Repositories"
              >
                <span className="channel-arrow">&gt;</span>
                <FaGithub className="channel-icon" />
                <span className="channel-text">ACCESS_GITHUB</span>
                <span className="channel-badge">CODEBASE</span>
              </a>
            </div>

            {/* LOCATION COORDINATES */}
            <div className="location-readouts">
              <div className="location-item">
                <FaMapMarkerAlt className="loc-icon" />
                <span>BASE_01: Kochi, Kerala, India</span>
              </div>
              <div className="location-item">
                <FaMapMarkerAlt className="loc-icon" />
                <span>BASE_02: Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CYBER TRANSMISSION FORM */}
        <div className="terminal-card form-terminal">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <span className="terminal-file">transmit_message.exe</span>
            <span className="terminal-status">PORT: 443</span>
          </div>

          <div className="form-body">
            {submitted ? (
              <div className="submission-success">
                <div className="success-icon-wrap">
                  <FaCheck className="success-icon" />
                </div>
                <h3 className="success-title">TRANSMISSION_DISPATCHED</h3>
                <p className="success-msg">
                  &gt; Payload received and logged to secure memory buffer. Expect response shortly.
                </p>
              </div>
            ) : (
              <form className="cyber-form" onSubmit={handleSubmit}>
                {/* NAME INPUT */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    <span className="prompt-symbol">&gt;</span> INPUT_CODENAME [ENTER YOUR NAME]
                  </label>
                  <div className="input-wrapper">
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe / Recruiter"
                      required
                      className="cyber-input"
                    />
                  </div>
                </div>

                {/* EMAIL INPUT */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    <span className="prompt-symbol">&gt;</span> RETURN_SIGNAL [ENTER YOUR EMAIL]
                  </label>
                  <div className="input-wrapper">
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. contact@company.com"
                      required
                      className="cyber-input"
                    />
                  </div>
                </div>

                {/* MESSAGE INPUT */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    <span className="prompt-symbol">&gt;</span> TRANSMIT_PAYLOAD [ENTER YOUR MESSAGE]
                  </label>
                  <div className="input-wrapper">
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter project specifications, test scope, or inquiry details..."
                      rows="5"
                      required
                      className="cyber-textarea"
                    ></textarea>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button type="submit" className="chamfer-btn submit-btn">
                  <FaPaperPlane className="submit-icon" />
                  <span>TRANSMIT_MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;