import React from 'react';
import './styles.scss';
import SocialIcons from './SocialIcons';
import PlayNine from './PlayNine';

class HomePage extends React.Component{

	render(){
		return(
				<div className="intro-wrapper">
					<div className="intro-name">Hello, I'm Samrat!</div>
					<div className="tagline">Full Stack Dev | Open-Source Enthusiast | Can't Quit Learning | Ibra</div>
					<SocialIcons/>
					<PlayNine/>
				</div>

			)
	}

}


export default HomePage;