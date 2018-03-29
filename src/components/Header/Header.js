import React from "react";
import './Header.css';

const Header = props => {
	console.log(props)
		
	return(
		<div className="header">
			<h1 className="title">Rick and Clicky</h1>
			<p className="message">{props.message}</p>
			<p className="score"><span>Score: {props.Score}</span><br></br><span>High Score:</span></p>
		</div>
	);
	
}

export default Header;
