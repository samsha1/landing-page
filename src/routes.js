import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ErrorPage from './components/common/ErrorPage';

export default (
	<BrowserRouter path="/" component={App}>
		<Switch>
			
				<Route path="/" component={HomePage} exact />
				<Route path="/about" component={AboutPage} />
				<Route component={ErrorPage} />
			
		</Switch>
	</BrowserRouter>


	);
