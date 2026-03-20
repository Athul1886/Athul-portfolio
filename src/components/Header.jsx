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
        <header className={scrolled ? "header scroll" : "header"}>

            {/* LOGO */}
            <div className="logo">
                <h1>Athul Krishna</h1>
            </div>

            {/* NAV LINKS */}
            <ul className={menuOpen ? "links active" : "links"}>
                <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#project" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#skill" onClick={() => setMenuOpen(false)}>Skills</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>

            {/* RIGHT SIDE */}
            <div className="right-section">

                {/* ICONS */}
                <ul className="icons">
                    <li>
                        <a href="https://www.linkedin.com/in/athul-krishna-u-2618aa333/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>

                    <li>
                        <a
                            href={`${import.meta.env.BASE_URL}ATHULKRISHNA_RESUME.pdf`}
                            target="_blank"
                            rel="noreferrer"
                            className="resume-btn"
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                {/* HAMBURGER */}
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

            </div>

        </header>
    )
}

export default Header