import React from 'react';
import Card from 'react-bootstrap/Card';
import LittleShop from '../../assets/logo_BG_final Medium.png';

function Project() {
    return (
        <div className="project">
            <h2>Project</h2>
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
        </div>
    )
};

export default Project;