import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Table from 'react-bootstrap/Table';


export const ConfirmedOrder = () => {
    const { store, actions } = useContext(Context);

    var yourOrder = store.order.map((item, index) => {

        return (
            <tr key={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.price.toFixed(2)}</td>
            </tr>
        )
    }
    )

    var total = 0;

    for (let i = 0; i < store.order.length; i++) {
        total += store.order[i].price
    }

    return (
        <div className="container">
            <div>
                <h1>Your order has been successfully placed</h1>

                <div>
                    <h3>Client Name {store.client.clientName}</h3>
                    <h3>Client Phone {store.client.clientPhone} </h3>
                    <h3>Your total is {total.toFixed(2)} </h3>
                </div>

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

                <h1>Your order has been successfully placed</h1>

            </div>
        </div>
    )
}
