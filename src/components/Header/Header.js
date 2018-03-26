import React from "react";
import './Header.css';

const Header = () => (
		<div className="header">
			<h1 className="title">Rick and Clicky</h1>
			<p className="score"><span>Score: </span><span>High Score: </span></p>
		</div>
	);

export default Header;
