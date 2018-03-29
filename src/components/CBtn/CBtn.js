import React from 'react';
import './CBtn.css';

 const CBtn = props => {
	console.log(props);
	// you need an onclick here
	return ( 
		<button type="button" onClick={() => props.handleClick(props.id)}><img src={props.image} alt={props.alt} value={props.id} id="pic"></img></button>
	);
};
export default CBtn;
