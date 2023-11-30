import Card from 'react-bootstrap/Card';
import Dating from '../../assets/Dating.png';
import Builder from '../../assets/Builder.png';
import Oakland from '../../assets/Oakland.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { CardGroup } from 'react-bootstrap';

function Writing() {
    return (
        <Container>
            <h2>Writing</h2>
            <p>Here are some of the technical writing samples I've worked on so far. Click on the links to view the documents.</p>
            <CardGroup>
                <Card className="bg-dark text-white" border="dark" style={{width: "18rem"}}>
                    <Card.Img src={Dating} alt='Card Image' />
                    <Card.Body>
                        <Card.Title>Comparing Dating Apps for Meaningful Connections</Card.Title> 
                        <Card.Text>How do you find a meaningful connection in a sea of dating apps? I compare four of the top dating apps to see which one is best for students.</Card.Text>
                        <Card.Link href='https://docs.google.com/document/d/e/2PACX-1vSGTmxOhSZLu3jQ0YDIQV7KkrfMoP2BLf-tRioUuo7cWrRswM34svhfzN1yNRQreiQjQZTVNYIj4iLm/pub'>View Here</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="bg-dark text-white" border="dark" style={{width: "18rem"}}>
                    <Card.Img src={Builder} alt='Card Image' />
                    <Card.Body>
                        <Card.Title>How To Build and Deploy a Website</Card.Title>
                        <Card.Text>How do you build and deploy a website? I walk you through the steps of building a website from scratch and deploying it to the web.</Card.Text>
                        <Card.Link href='https://docs.google.com/presentation/d/e/2PACX-1vT9R9bLIqWQsDIQQAHwA7aULqWWbZpj_FIKnO-vSiII2Bjbguv1B573nJe7G90_dU5nPDBx501bGLQp/pub?start=false&loop=false&delayms=10000'>View Here</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="bg-dark text-white" border="dark" style={{width: "18rem"}}>
                    <Card.Img src={Oakland} alt='Card Image' />
                    <Card.Body>
                        <Card.Title>Technical Analysis of Oakland.gov</Card.Title>
                        <Card.Text>What is the current state of the Oakland city government website? I performed an analysis of the site and summarized some strengths and suggestions to improve the user experience.</Card.Text>
                        <Card.Link href='https://docs.google.com/document/d/e/2PACX-1vSqrjnbgEy9kF47R0izMPe4KHX3iOckGuJC1yWnFBGkchG3y1MY3NIKFCWP5b1LXF9wzh9tuxrnJFa5/pub'>View Here</Card.Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
        
    )
}

export default Writing;