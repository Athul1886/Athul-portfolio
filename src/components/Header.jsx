import "./Header.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`cyber-header ${scrolled ? "scrolled" : ""}`}>
            <div className="header-inner">
                {/* CYBER LOGO / CALLSIGN */}
                <a href="#hero" className="cyber-logo">
                    <span className="logo-bracket">[</span>
                    <span className="logo-text">ATHUL_KRISHNA</span>
                    <span className="logo-tag">// QA</span>
                    <span className="logo-bracket">]</span>
                </a>

                {/* NAV LINKS */}
                <nav className={`cyber-nav ${menuOpen ? "active" : ""}`}>
                    <ul className="nav-links">
                        <li>
                            <a href="#hero" onClick={() => setMenuOpen(false)}>
                                <span className="nav-index">01.</span>HOME
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => setMenuOpen(false)}>
                                <span className="nav-index">02.</span>ABOUT
                            </a>
                        </li>
                        <li>
                            <a href="#project" onClick={() => setMenuOpen(false)}>
                                <span className="nav-index">03.</span>PROJECTS
                            </a>
                        </li>
                        <li>
                            <a href="#services" onClick={() => setMenuOpen(false)}>
                                <span className="nav-index">04.</span>SERVICES
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setMenuOpen(false)}>
                                <span className="nav-index">05.</span>CONTACT
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* RIGHT ACTIONS */}
                <div className="header-actions">
                    {/* LINKEDIN */}
                    <a
                        href="https://www.linkedin.com/in/athul-krishna-u-2618aa333/"
                        target="_blank"
                        rel="noreferrer"
                        className="cyber-icon-link"
                        title="LinkedIn Profile"
                        aria-label="LinkedIn Profile"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    {/* RESUME DOWNLOAD */}
                    <a
                        href={`${import.meta.env.BASE_URL}ATHULKRISHNA_RESUME.pdf`}
                        target="_blank"
                        rel="noreferrer"
                        className="chamfer-btn resume-btn"
                        download
                    >
                        <span>RESUME.PDF</span>
                    </a>

                    {/* HAMBURGER FOR MOBILE */}
                    <button
                        className={`cyber-menu-btn ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )


}

export default Header