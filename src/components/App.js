import React from 'react';
//import PropTypes from 'prop-types';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import ContactPage from './contact/ContactPage';
import ProjectPage from './projects/ProjectPage';
import ErrorPage from './common/ErrorPage';
import Header from './common/Header';
import ParticlesJS from './common/ParticleJs';

class App extends React.Component{
	render(){
		return(	
			<BrowserRouter>

			<div className="container-fluid">
			<ParticlesJS/>
					<Header/>
					<Switch>
						<Route path="/" component={HomePage} exact />
						<Route path="/about" component={AboutPage} />
						<Route path="/projects" component={ProjectPage} />
						<Route path="/contact" component={ContactPage} />
						<Route component={ErrorPage} />
					</Switch>
			</div>
			</BrowserRouter>
			
			);
	};
}
// App.propTypes = {
// 	children:PropTypes.object.isRequired
// };

export default App;