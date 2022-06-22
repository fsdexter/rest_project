import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import MyCard from '../component/card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Menu = () => {
	const { store, actions } = useContext(Context);

	const makeMenu = store.menu.map((item, index)=>{
		return(
			<div className="" key={index}>
				<MyCard 
				name={item.name}
				ingredients={item.ingredients}
				price={item.price}
				vegetarian={item.vegetarian}
				vegan={item.vegan}
				special={item.special}
				/>
			</div>
		)
	})

	return (
		<div className="container">
			<h1>Menu</h1>
			<div className="gallery">
				{makeMenu}
			</div>
		</div>
	);
};
