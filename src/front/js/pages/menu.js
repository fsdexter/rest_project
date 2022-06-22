import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Menu = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Menu</h1>
		</div>
	);
};
