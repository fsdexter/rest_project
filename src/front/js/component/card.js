import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/appContext";


function MyCard(props) {
  const { store, actions } = useContext(Context);

  return (
    <Card onClick={() => actions.makeOrder(props.index)}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.ingredients}
        </Card.Text>
        <Button variant="primary">{props.price.toFixed(2)}</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;