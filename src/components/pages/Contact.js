// need to render the contact form, email input field needs to take valid email addresses
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup  from 'react-bootstrap/InputGroup';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';

function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
 
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true)
    }

    return (
        <Container>
            <h2>Contact Me</h2>
            <p>Feel free to reach out to with any questions or comments!</p>
            <p>Email: geovannih514@gmail.com</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="contactForm">
                <Col md="6">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="name">Name</InputGroup.Text>
                        <Form.Control required type="text" placeholder="Name" aria-label="Name" />
                        <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="email">Email</InputGroup.Text>
                        <Form.Control required type="email" placeholder="Email" aria-label="Email" />
                        <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup size="lg">
                        <InputGroup.Text id="message">Message</InputGroup.Text>
                        <Form.Control required as="textarea" placeholder="Message" aria-label="Message" />
                        <Form.Control.Feedback type="invalid">Please enter a message.</Form.Control.Feedback>
                    </InputGroup>
                    <br/>
                    <Button variant="primary" type="submit">Submit</Button>
                </Col>
            </Form>
        </Container>
    )
}

export default Contact;