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
										<h2>I write code and love doing nothing!<span>|</span></h2>
									</div>
								</div>
								<div className="col-md-7">
									<div className="about-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
										<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
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