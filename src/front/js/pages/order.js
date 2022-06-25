import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Order = () => {
    const { store, actions } = useContext(Context);
    const [formValue, setFormValue] = useState({
        clientName: "",
        clientPhone: "",
    });

    const inputHandelChange = e => {
		//"[e.target.name]" is the name of form inputs
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};
    
    const handleSubmit = () => {
        actions.setClientInfo(formValue);
    }

    var yourOrder = store.order.map((item, index) => {

        return (
            <tr key={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>
                    <button className="btn btn-primary" onClick={()=> actions.removeFromOrder(index)}>
                        remove
                    </button>
                </td>
            </tr>
        )
    })

    var total = 0;

    for(let i=0; i<store.order.length; i++){
        total += store.order[i].price
    }

    return (
        <div className="container">
            <div class="row">
                <div className="col">
                    <Table striped>
                        <thead>
                        <th>Number</th>
                        <th>Dish Name</th>
                        <th>Dish Price</th>
                        </thead>
                        <tbody>
                            {yourOrder}
                        </tbody>
                    </Table>
                    <div>
                        <h1>Your total is {total.toFixed(2)} </h1>
                    </div> 
                </div> 
                <div className="col">
                    <h1>Confirm your order</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" 
                                name="clientName"
								onChange={inputHandelChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter phone number" 
                                name="clientPhone"
								onChange={inputHandelChange}/>
                        </Form.Group>

                        <Link to="/confirmation">
                            <Button variant="primary" onClick={handleSubmit}>
                                confirm
                            </Button>
						 </Link>
                    </Form>
                </div>
            </div>
        </div>
    )
}