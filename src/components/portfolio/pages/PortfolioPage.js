import React from 'react';
import axios from 'axios';
import { IconContext } from "react-icons";
import { FaPhp,FaJs,FaHtml5 } from 'react-icons/fa';
import './styles.scss';

const API = "http://localhost:8000/api/v1/portfolio";

class PortfolioPage extends React.Component{

  render() { 
  
      return (
        <div>
          <PortfolioItem/>
        </div>
        );
    }


}

class PortfolioItem extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items:[]
    };
  }

  componentWillMount(){
    this.setState({isLoaded:false});

  }

  componentDidMount() {
    axios.get(API)
    //.then((result) => console.log(result.data))
    .then((result)  => 
      this.setState({ isLoaded: true, items: result.data.portfolios})
      )
    .catch(error => this.setState({ error, isLoaded: true }));
  }


  render() {
    const { error,isLoaded, items } = this.state;
      if (!isLoaded) {
        return (
            <HeadMessage headings={"Loading..."}/>
          );
      } else if(error){
       return
       (
          <div>
            <HeadMessage headings={error.message}/>
          </div>
        );
     } else {
      return(
        <div>
         <HeadMessage headings={"Portfolio"}/>
          <ItemList items={items}/>
        </div>
        );
  }
  }


}

const HeadMessage = props => {
  console.log("Inside HeadMessage");
  return (
       <div className="portfolio-page">
          <div className="content-grid">
              <h1>{props.headings}</h1>

           </div>
      </div>

    );

};

const ItemList = props => {
  console.log("Inside ItemList");
  return (
      <div className="portfolio-wrapper">
          {props.items.map(item => (
            <div className="portfolio-item" key={item.id}>
                 <div className="portfolio-item__title">{item.title}</div>
                 <div className="portfolio-item__desc">
                     {item.description}
                 </div>
                 <div className="portfolio-item__icon">
                    <IconContext.Provider value={{ color: "#3B80F7", size:"1em",className: "global-class-name" }}><FaPhp /><FaJs/><FaHtml5/></IconContext.Provider>
                 </div>
                 <div className="portfolio-item__links">
                     <a target="_blank" rel="noopener noreferrer" href={item.url}>View More</a>
                 </div>
             </div>
           ))}
        </div> 

    );
};

export default PortfolioPage;