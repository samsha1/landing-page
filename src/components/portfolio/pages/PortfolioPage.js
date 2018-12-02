import React from 'react';
import { IconContext } from "react-icons";
import { FaPhp,FaJs,FaHtml5} from 'react-icons/fa';
import './styles.scss';


class PortfolioPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/v1/portfolio",{
  		mode: "no-cors",
  		method: "GET",
  		headers: {
    		"Accept": "application/json",
    		"Content-Type": "application/json",
    	}
  	})
    .then(response => {
        if (response.status==='OK') {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
    .then((response) => console.log(response))
    .then( data  => 
    	this.setState({ isLoaded: true, items: data.portfolios })
    	)
    .catch(error => this.setState({ error, isLoaded: true }));
  }

  render() {
    const { error,isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else if(error){
    	 return <div>Error: {error.message}</div>;
    } else {
      return (
      	<div className="portfolio-page">
			<div className="content-grid">
			<h1>Portfolio</h1>
			<div className="portfolio-wrapper">
        	{items.map(item => (
         		<div className="portfolio-item">
           			 <div className="portfolio-item__title">{item.title}</div>
            		 <div className="portfolio-item__desc">
               			 {item.description}
             		 </div>
            		 <div className="portfolio-item__icon">
                 		<IconContext.Provider value={{ color: "#3B80F7", size:"1em",className: "global-class-name" }}><FaPhp /><FaJs/><FaHtml5/></IconContext.Provider>
             		 </div>
             		 <div className="portfolio-item__links">
                		 <a target="_blank" rel="noopener noreferrer" href={item.url}>Visit Site</a>
            		 </div>
        		 </div>
        	 ))}
        	</div>
        	</div>
        </div>

        );
    }
  }


}

export default PortfolioPage;