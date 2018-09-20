import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const env = {
  	tempId:process.env.REACT_APP_EMAILJS_TEMPLATEID,
  	userId:process.env.REACT_APP_EMAILJS_USERID
}


class ContactForm extends React.Component{

	constructor(props){
		super(props);
		this.state={
			userName:null,
			email:null,
			subject:null,
			messages:null,
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
		if((event.target.value.length) >= this.props.maxCharacter){
			event.preventDefault();
			this.setState({
				countCharacter: this.props.maxCharacter,
			});		
		}else{
			this.setState({
				countCharacter: event.target.value.length,
				[event.target.id]:event.target.value
			});	
		}
		event.preventDefault();
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]:event.target.value,
		});
	}

	handleSubmit = (event) =>{
		event.preventDefault();
		this.setState({
      		formSubmitted: true
    	});

    var template_params = {
      "reply_to": this.state.email,
      "from_feedback": this.state.subject,
      "from_name": this.state.userName,
      "message_html":this.state.messages
    }
    window.emailjs
      .send('gmail',env.tempId,template_params)
      .then(res => {
                this.setState({
                  formEmailSent: true,
                  formSubmitted:false,
                   userName:null,
                    email:null,
                    subject:null,
                    messages:null,
                    countCharacter:0
             });
        document.getElementById('contact-form').reset();
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
	};

	render(){
		const { classes } = this.props;
		const {
			formSubmitted,formEmailSent
		}=this.state;
		return(
			<form onSubmit={this.handleSubmit} id="contact-form">
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
				label="E-mail"
				id="email"
				fullWidth  
				name="email" 
				className={classes.margin} 
				onChange={this.handleChange} required
			/>
			<TextField
				type="text" 
				label="Subject" 
				id="subject"
				fullWidth  
				name="subject" 
				className={classes.margin} 
				onChange={this.handleChange} required
			/>
			
			<TextField
				htmlFor="name-error"
				multiline={true}
				rows={2}
				fullWidth
				id="messages"
				name="messages"
				label="Messages"
				onChange={this.forBackSpace}
				onKeyPress={this.limitCharacter} className={classes.margin}
				
			/>
			<small> {this.props.maxCharacter-this.state.countCharacter} character supported</small>
			<br/>
			<center><Button
				type="submit" 
				label="Submit" 
				variant="outlined"
				size="medium"
				color="primary"
				className={classes.margin}
				disabled={formSubmitted || formEmailSent}
			>{formSubmitted ? 'Submitting..' : formEmailSent ? 'Sent!' : 'Submit' }</Button></center>

			</form>


			);

	}
}

export default ContactForm;