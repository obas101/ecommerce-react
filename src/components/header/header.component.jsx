import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/home-icon-silhouette-svgrepo-com.svg";
import { Link } from "react-router-dom";

const Header = () => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<div className="option" to="/shop">
				SHOP
			</div>
			<div className="option" to="/shop">
				CONTACT
			</div>
		</div>
	</div>
);
export default Header;
