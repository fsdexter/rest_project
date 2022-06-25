import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Table from 'react-bootstrap/Table';

export const Order = () => {
    const { store, actions } = useContext(Context);

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
            <div className="col">
            <Table striped>
                <thead>
                <th>#</th>
                <th>Order Number</th>
                <th>Dish Name</th>
                <th>Dish Price</th>
                </thead>
                <tbody>
                    {yourOrder}
                </tbody>
            </Table>
                <div>
                    {total.toFixed(2)}
                </div> 
            </div> 
            <div className="col">
                <h1>confirme</h1>
            </div>
        </div>
    )
}