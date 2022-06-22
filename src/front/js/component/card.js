import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard(props) {
  return (
    <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.ingredients}
        </Card.Text>
        <Button variant="primary">{props.price}</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;