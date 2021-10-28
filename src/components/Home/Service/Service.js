import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { _id, name, description, price, img } = service;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: {price}</Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/booking/${_id}`}>
                        <Button className="btn btn-warning" variant="primary"> Book {name}</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;