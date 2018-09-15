import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class ContactForm extends React.Component{

	constructor(props){
		super(props);
		this.state={
			userName:null,
			email:null,
			subject:null,
			countCharacter:0
		};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);

	}

	limitCharacter = (event) => {

		if((event.target.value.length) >= this.props.maxCharacter){
			event.preventDefault();
			this.setState({
				countCharacter: this.props.maxCharacter,
			});		
		}else{
			this.setState({
				countCharacter: event.target.value.length,
			});	
		}
	}

	forBackSpace = (event)=>{
		this.setState({
				countCharacter: event.target.value.length,
			});	
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]:event.target.value
		});
	}

	handleSubmit = (event) =>{
		alert('A form is submitted with name:'+ this.state.subject);
		event.preventDefault();
	}

	render(){
		const { classes } = this.props;
		return(
			<form onSubmit={this.handleSubmit}>
			<center><h2>Ping Me! </h2></center>
			<hr/>
			<TextField
				className={classes.margin}
				label="Name"
				fullWidth
				type="text"
				id="userName"
				onChange={this.handleChange}
				required
			/>
			<TextField
				type="email" 
				hinttext="E-mail" 
				floatingLabelText="E-mail" 
				label="E-mail" 
				id="email"
				fullWidth  
				name="email" 
				className={classes.margin} 
				onChange={this.handleChange} required
			/>
			<TextField
				type="text" 
				hinttext="Subject" 
				floatingLabelText="Subject" 
				label="Subject" 
				id="subject"
				fullWidth  
				name="subject" 
				className={classes.margin} 
				onChange={this.handleChange} required
			/>
			<TextField
				hinttext="Messages"
				multiline={true}
				rows={2}
				fullWidth
				id="messages"
				label="Messages"
				floatingLabelText="Message"
				onKeyPress={this.limitCharacter} className={classes.margin}
				onChange={this.forBackSpace}
			/>
			<small> {this.props.maxCharacter-this.state.countCharacter} character supported</small>
			<br/>
			<center><Button
				type="submit" 
				label="Submit" 
				variant="contained" 
				color="primary"
				className={classes.margin}
			>Submit</Button></center>

			</form>


			);

	}
}

export default ContactForm;