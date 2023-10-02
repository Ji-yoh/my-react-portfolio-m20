import React from "react";

function Nav({ currentPage, handlePageChange }) {
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li className="nav-item">
                        <a href="#about" onClick={() => handlePageChange("About Me")} className={currentPage === "About Me" ? "nav-link active" : "nav-link"}>About Me</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" onClick={() => handlePageChange("Projects")} className={currentPage === "Projects" ? "nav-link active" : "nav-link"}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={() => handlePageChange("Contact Me")} className={currentPage === "Contact Me" ? "nav-link active" : "nav-link"}>Contact Me</a>
                    </li>
                    <li className="nav-item">
                        <a href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;