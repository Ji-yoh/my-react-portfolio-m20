// import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Me from "../assets/me.png";

function Header() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="header">
                        <h1>Geovanni Hernandez</h1>
                        <h6>One step at a time.</h6>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <Image src={Me} alt="Geovanni Hernandez" thumbnail />
                </Col>
            </Row>
        </Container>
    )
}

export default Header;