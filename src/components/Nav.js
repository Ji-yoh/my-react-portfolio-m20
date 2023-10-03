import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// added bootstrap navbar
function Nav_({ currentPage, handlePageChange }) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about" onClick={() => handlePageChange("About Me")} className={currentPage === "About Me" ? "nav-link active" : "nav-link"}>About Me</Nav.Link>
                        <Nav.Link href="#projects" onClick={() => handlePageChange("Projects")} className={currentPage === "Projects" ? "nav-link active" : "nav-link"}>Projects</Nav.Link>
                        <Nav.Link href="#contact" onClick={() => handlePageChange("Contact Me")} className={currentPage === "Contact Me" ? "nav-link active" : "nav-link"}>Contact Me</Nav.Link>
                        <NavDropdown title="Resume" id="basic-nav-dropdown">
                            <NavDropdown.Item>Take a look!</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Nav_;