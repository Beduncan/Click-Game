// importing react
import React from 'react';
// bringing in styling
import './CBtn.css';

 const CBtn = props => {
	console.log(props);
	// this is what I am rendering as well as the handling the onClick
	return ( 
		<button type="button" onClick={() => props.handleClick(props.id)}><img src={props.image} alt={props.alt} value={props.id} id="pic"></img></button>
	);
};
export default CBtn;
