import React from 'react';
import  './styles.scss';
//import myImage from '../../images/IMG_0388.JPG';
class AboutPage extends React.Component{
	render(){
		return(
				<div className="container-fluid about-page">
					<div className="content-grid">
						<h1 className="aboutTitle">ABOUT</h1>
						<div className="about-wrapper">
							<div className="row">
								<div className="col-md-5">
									<div className="my-image img-responsive center-block">
										
									</div>
									<div className="typing-Animation">
										<h2>I can't quit Learning!<span>|</span></h2>
									</div>
								</div>
								<div className="col-md-7">
									<div className="about-content">
										<p>Hi, I'm samrat and I like everything web. I still remember my first C 'Hello World' seven years ago. It was never stopping loop. Life has become same now, 
											Since then I never stopped to write code.It was a beauty of moving line console code. Graduated, Bachelor in Computer Science and Information Technology in 2018. It was my college days, where I jumped to web Development and PHP in backend and JAVASCRIPT to frontend became my friends. I used to date each library and framework.</p>
										<p>I'm (mostly) a self taught Software Engineer. My favourite stack right now is React JS on the frontend and Laravel on the backend. I have also worked with Go, WP MVC, JQuery, MongoDB, MYSQL, Docker, CodeIgniter. I am also obsessed with making the web look pretty with SASS/CSS.</p>
										<p>When I am not working you can find me watching or playing Football, reading and writing blogs, Travelling, Researching in Open Source Projects.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			)
	}

}

export default AboutPage;