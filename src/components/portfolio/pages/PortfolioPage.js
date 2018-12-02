import React from 'react';
import axios from 'axios';
import { IconContext } from "react-icons";
import { FaPhp,FaDocker,FaJs,FaHtml5,FaReact,FaCss3Alt,FaGofore } from 'react-icons/fa';
import PortfolioItems from '../PortfolioItems';
import './styles.scss';

const API = "http://localhost:8000/api/v1/meeting";

class PortfolioPage extends React.Component{

  render() { 
  
      return (
          <PortfolioItem/>
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
      this.setState({ isLoaded: true, items: result.data.meetings})
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
          <HeadMessage headings={error.message}/>
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

const HeadMessage = (props) =>{
  return (
       <div className="portfolio-page">
          <div className="content-grid">
              <h1>{props.headings}</h1>
           </div>
      </div>

    );

};

const ItemList = (props) => {
  return (
      <div className="portfolio-wrapper">
        <h1>gsdfjs </h1>
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
                     <a target="_blank" rel="noopener noreferrer" href={item.view_meeting.href}>Visit Site</a>
                 </div>
             </div>
           ))}
          </div> 

    );
};

export default PortfolioPage;