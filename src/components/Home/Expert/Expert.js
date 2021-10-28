import React from 'react';
import { Card } from 'react-bootstrap';
import "./Expert.css"

const Expert = ({ expert }) => {

    const { name, img, expertize } = expert;

    return (

        <Card className="col-lg-4 col-md-6 col-sm-12">
            <Card.Img className="p-3" variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Expertize: {expertize} </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default Expert;