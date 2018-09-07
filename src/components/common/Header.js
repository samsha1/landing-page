import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1
  },

  menuLink:{
  	padding:10,
  	color:"#fff",
  	textDecoration:'none',
  	zIndex:1000
},

menuBar:{
	display: 'flex',
	justifyContent: 'flex-end'

}
  	
};

const Header = (props) => {
	
	return(
		<div style={styles.menuBar}>
     <style jsx="true">
          {`
            .menu__item:hover {
              border-bottom: 1px solid #fff;
            }
          `}
        </style>
            <Link to="/" style={styles.menuLink} className="menu__item active"> Home </Link> 
            <Link to="/about" style={styles.menuLink} 	className="menu__item"> About </Link>
            <Link to="/projects" style={styles.menuLink} className="menu__item"> Projects </Link>
            <Link to="/contact" style={styles.menuLink} className="menu__item"> Contacts </Link>
   		 </div>
		);
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (Header);