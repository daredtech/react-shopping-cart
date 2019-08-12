import React from 'react';

import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';


const Item = props => {

	const {cart} = useContext(CartContext);

	console.log('props is', props.id);
	
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};













// const Item = props => {

// 	return (
// 		<div className="shopping-cart_item">
// 			<img src={props.image} alt={`${props.title} book`} />


// 			<div>
// 				<h1>{props.title}</h1>
// 				<p>$ {props.price}</p>
// 				<button>Remove from cart</button>
// 			</div>
// 		</div>
// 	);
// };

export default Item;
