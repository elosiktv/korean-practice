import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

import MainLoader from './shared/MainLoader/MainLoader';
import Nav from './components/Nav/Nav';
import Hello from './components/Hello/Hello';
import Register from './components/Auth/Register/Register';

function App() {
	return (
		<BrowserRouter>
		    <div className="App">
				<MainLoader />
				<Nav />
				<Switch>
					<Route exact path="/" component={Hello}/>
					<Route path="/register" component={Register}/>
				</Switch>
			</div>
		</BrowserRouter>
  	);
}

export default App;