import React from 'react';
import Particles from 'react-particles-js';
import './styles.css';

const particleOpt = {
	"particles": {
	        "number": {
	            "value": 300,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 2,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "bottom",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 200,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	};

const ParticlesJS = () => {
	return(
			<div className="particle-js">
				<Particles params={particleOpt}/>
			</div>

		);
};

export default ParticlesJS;
