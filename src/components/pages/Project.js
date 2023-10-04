import React from 'react';
import Card from 'react-bootstrap/Card';
import LittleShop from '../../assets/logo_BG_final Medium.png';
import JateIcon from '../../assets/jate_icon_384x384.png';
import NoteTaking from '../../assets/note-taking-expressly.png'

function Project() {
    return (
        <div className="project">
            
            <Card className="bg-dark text-white" style={{width: "18rem"}}>
                <Card.Img src={LittleShop} alt="Card Image"/>
                <Card.Body>
                    <Card.Title>Little Shop of Horticulture</Card.Title>
                    <Card.Text>A site utilizing the MVC framework to create a members-only shop for plants with user authentication.</Card.Text>
                    <Card.Link href="https://little-shop-of-horticulture-32ff4a69c480.herokuapp.com/">Deployed Site</Card.Link>
                    <br/>
                    <a href="https://github.com/melkali42/the_LittleShopofHorticulture"><i className="fa fa-github fa-2x"></i></a>
                </Card.Body>
            </Card>
            <br/>
            <Card className="bg-dark text-white" style={{width: "18rem"}}>
                <Card.Img src={JateIcon} alt="Card Image"/>
                <Card.Body>
                    <Card.Title>J.A.T.E</Card.Title>
                    <Card.Text>Just Another Text Editor. An in-browser text editor built with webpack that can be downloaded for offline use.</Card.Text>
                    <Card.Link href="https://jate-offline-m19-75f9c3c7761e.herokuapp.com/">Deployed Site</Card.Link>
                    <br/>
                    <a href="https://github.com/Ji-yoh/jate-offline-m19"><i className="fa fa-github fa-2x"></i></a>
                </Card.Body>
            </Card>
            <Card className="bg-dark text-white" style={{width: "18rem"}}>
                <Card.Img src={NoteTaking} alt="Card Image"/>
                <Card.Body>
                    <Card.Title>Note-Taking-Expressly</Card.Title>
                    <Card.Text>A browser application built with Express JS that helps keep track of your notes!</Card.Text>
                    <Card.Link href="https://note-taking-expressly-76ab0985a84c.herokuapp.com/">Deployed Site</Card.Link>
                    <br/>
                    <a href="https://github.com/Ji-yoh/note-taking-express"><i className="fa fa-github fa-2x"></i></a>
                </Card.Body>
            </Card>
        </div>
    )
};

export default Project;