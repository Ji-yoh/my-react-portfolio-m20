// add google drive link to resume
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResumePDF from "../../assets/Resume.pdf";

function Resume() {
    return (
        <div>
            <Container>
                <Row>
                    <h2>Resume</h2>
                    <p>Download my <a href={ResumePDF} download="My Resume">resume</a>!</p>
                </Row>
                <Row>
                    <Col>
                        <h2>Front-end Proficiencies</h2>
                        <ListGroup variant="dark" className="frontEndList">
                            <ListGroup.Item>HTML</ListGroup.Item>
                            <ListGroup.Item>CSS</ListGroup.Item>
                            <ListGroup.Item>JavaScript</ListGroup.Item>
                            <ListGroup.Item>React</ListGroup.Item>
                            <ListGroup.Item>Bootstrap</ListGroup.Item>
                            <ListGroup.Item>jQuery</ListGroup.Item>
                            <ListGroup.Item>Responsive Design</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h2>Back-end Proficiencies</h2>
                        <ListGroup className="backEndList">
                            <ListGroup.Item variant="dark">Node JS</ListGroup.Item>
                            <ListGroup.Item variant="dark">Express JS</ListGroup.Item>
                            <ListGroup.Item variant="dark">REST APIs</ListGroup.Item>
                            <ListGroup.Item variant="dark">MySQL2</ListGroup.Item>
                            <ListGroup.Item variant="dark">Sequelize</ListGroup.Item>
                            <ListGroup.Item variant="dark">MongoDB</ListGroup.Item>
                            <ListGroup.Item variant="dark">GraphQL</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container> 
        </div>
    )
}

export default Resume;