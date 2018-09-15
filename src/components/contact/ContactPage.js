import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ContactForm from './ContactForm';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import Paper from '@material-ui/core/Paper';

const styles = theme => ({
root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '15%',
    left: 10,
    right: 0,
    margin: 'auto'
  },
  margin: {
    margin: theme.spacing.unit,
    zIndex:1000
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

class ContactPage extends React.Component {


render(){
	const { classes } = this.props;
  return (
    <div className={classes.container}>
    <Paper className={classes.root} elevation={1}>
    <MuiThemeProvider theme={theme}>
    	<ContactForm classes={classes} maxCharacter={140}/>
    </MuiThemeProvider>   
     </Paper>
    </div>
  );
  }
}

ContactPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactPage);