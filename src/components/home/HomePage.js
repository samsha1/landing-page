import React from 'react';
import './homePage.css';
import SocialIcons from './SocialIcons';

class HomePage extends React.Component{

	render(){
		return(
				<div className="intro-wrapper">
					<div className="intro-name">Hello, I'm Samrat!</div>
					<div className="tagline">Full Stack Dev | Open-Source Enthusiast | Can't Quit Learning | Ibra</div>
					<SocialIcons/>
				</div>

			)
	}

}


export default HomePage;