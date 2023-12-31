import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// added bootstrap navbar
function Nav_({ currentPage, handlePageChange }) {
    return (
        <Navbar bg="dark" expand="lg" >
            <Container className="justify-content-center">
                {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
                {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link href="#about" onClick={() => handlePageChange("About Me")} className={currentPage === "About Me" ? "nav-link active" : "nav-link"}>About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#projects" onClick={() => handlePageChange("Projects")} className={currentPage === "Projects" ? "nav-link active" : "nav-link"}>Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#writing" onClick={() => handlePageChange("Writing")} className={currentPage === "Writing" ? "nav-link active" : "nav-link"}>Writing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contact" onClick={() => handlePageChange("Contact Me")} className={currentPage === "Contact Me" ? "nav-link active" : "nav-link"}>Contact Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>Resume</Nav.Link>
                        </Nav.Item>
                    </Nav>
                {/*</Navbar.Collapse>*/}
            </Container>
        </Navbar>
    )
}

export default Nav_;