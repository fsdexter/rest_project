import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Admin = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container row text-center mt-5  d-flex justify-content-center">
			{!store.token ? (
				<>
					<h1>Error!!!</h1>
					<p>An error occurred during LOGIN please try again</p>
					<Link to="/Login">
						<button className="btn btn-primary">Pleas go to login</button>
					</Link>
				</>
			) : (
				<h1>
					ADMIN
				</h1>
			)}
		</div>
	);
};