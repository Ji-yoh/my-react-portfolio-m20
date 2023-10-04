import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import LittleShop from '../../assets/logo_BG_final Medium.png';
import JateIcon from '../../assets/jate_icon_384x384.png';
import NoteTaking from '../../assets/note-taking-expressly.png';
import MongoIcon from '../../assets/MongoDB_SpringGreen Small.png';
import SQLIcon from '../../assets/logo-mysql-170x115.png'
import TierRank from '../../assets/tier_ranker Small.png'

function Project() {
    return (
        <div className="project">
            <CardGroup>
                <Card className="bg-dark text-white" style={{width: "18rem"}} border="light">
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
                <Card className="bg-dark text-white" style={{width: "18rem"}} border="light">
                    <Card.Img src={JateIcon} alt="Card Image"/>
                    <Card.Body>
                        <Card.Title>J.A.T.E</Card.Title>
                        <Card.Text>Just Another Text Editor. An in-browser text editor built with webpack that can be downloaded for offline use.</Card.Text>
                        <Card.Link href="https://jate-offline-m19-75f9c3c7761e.herokuapp.com/">Deployed Site</Card.Link>
                        <br/>
                        <a href="https://github.com/Ji-yoh/jate-offline-m19"><i className="fa fa-github fa-2x"></i></a>
                    </Card.Body>
                </Card>
                <Card className="bg-dark text-white" style={{width: "18rem"}} border="light">
                    <Card.Img src={NoteTaking} alt="Card Image"/>
                    <Card.Body>
                        <Card.Title>Note-Taking-Expressly</Card.Title>
                        <Card.Text>A browser application built with Express JS that helps keep track of your notes!</Card.Text>
                        <Card.Link href="https://note-taking-expressly-76ab0985a84c.herokuapp.com/">Deployed Site</Card.Link>
                        <br/>
                        <a href="https://github.com/Ji-yoh/note-taking-express"><i className="fa fa-github fa-2x"></i></a>
                    </Card.Body>
                </Card>
            </CardGroup>
            <br/>
            <CardGroup>
                <Card className="bg-dark text-white" style={{width: "18rem"}} border="light">
                    <Card.Img src={MongoIcon} alt="Card Image"/>
                    <Card.Body>
                        <Card.Title>Panco Mongo API</Card.Title>
                        <Card.Text>An API for a fictional social networking company that stores users and posts in MongoDB documents.</Card.Text>
                        <Card.Link href="https://drive.google.com/file/d/1boUaZuu1LH5C7h0o6kIvoYD4jh6kTfzP/view">Demo Video</Card.Link>
                        <br/>
                        <a href="https://github.com/Ji-yoh/panco-mongo-api-m18"><i className="fa fa-github fa-2x"></i></a>
                    </Card.Body>
                </Card>
                <Card className="bg-dark text-white" style={{width: "18rem"}} border="light">
                    <Card.Img src={SQLIcon} alt="Card Image"/>
                    <Card.Body>
                        <Card.Title>SQL Employee Manager</Card.Title>
                        <Card.Text>A command line application that manages a SQL database for a fictional company.</Card.Text>
                        <Card.Link href="https://drive.google.com/file/d/1AC2BBnujMmgRbq5NUHuZnGfMxbw8Vb0x/view">Demo Video</Card.Link>
                        <br/>
                        <a href="https://github.com/Ji-yoh/employee-manager-m12"><i className="fa fa-github fa-2x"></i></a>
                    </Card.Body>
                </Card>
                <Card className="bg-dark text-white" style={{width: "18rem"}} border="light">
                    <Card.Img src={TierRank} alt="Card Image"/>
                    <Card.Body>
                        <Card.Title>Tier Ranker</Card.Title>
                        <Card.Text>A web app that will allow users to search the Marvel, OMDB, and Jikan.moe APIs. Users will be able to add results to a ranked list.</Card.Text>
                        <Card.Link href="https://ji-yoh.github.io/deploy-tier-ranker/">Demo Site</Card.Link>
                        <br/>
                        <a href="https://github.com/Ji-yoh/deploy-tier-ranker"><i className="fa fa-github fa-2x"></i></a>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
};

export default Project;