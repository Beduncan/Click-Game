// import react
import React from "react";
// importing styling
import './Header.css';
// header component
const Header = props => {
	// so i know what is in my 
	console.log(props)
		// this is the html that I am rendering
	return(
		<div className="header">
			<h1 className="title">Car Shuffler</h1>
			<p className="message">{props.message}</p>
			<p className="score"><span>Score: {props.Score}</span><br></br><span>High Score: {props.topScore}</span></p>
		</div>
	);
	
}
// export 
export default Header;
