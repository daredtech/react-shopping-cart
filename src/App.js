import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import {ProductContext} from './contexts/ProductContext';

function App() {
	// state properties, 
	// products keeps track of all available products
	// cart keeps track of all items in the cart
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
		<ProductContext.Provider value={{ products, addItem }}>
			
			{/* Navigation */}
			<Navigation cart={cart} />
			
			{/* Routes */}
			<Route
				exact path="/" component={Products}/>
			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>

		</ProductContext.Provider>
		</div>
	);
}

export default App;
