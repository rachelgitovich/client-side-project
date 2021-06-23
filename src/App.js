import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import About from './components/About';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Checkout from './components/Checkout';
import Final from './components/Final';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<Router>
				
				<Switch>
					<Route path='/about'>
						<About>
							<h1>History of the store</h1>
							<h1>Reasons for opening the store</h1>
							<h1>The current status of the store</h1>
						</About>
					</Route>
					<Route path='/product' component={Product} />
					<Route path='/products' component={Products} />
					<Route path='/checkout' component={Checkout} />
					<Route path='/final-checkout' component={Final} />
					<Route path='/' component={Home} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
