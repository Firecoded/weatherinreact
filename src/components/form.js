import React, { Component } from 'react';

class Form extends Component {
	constructor(props){
		super(props)


	}
	render() {
		console.log('form props' this.props)
		return (
			<form onSubmit = {this.handleSubmit}>
				<div className ="real-input-cont">
			        <div className ="input-field col-4 s4 input-cont">
			          	<input id="location" placeholder = 'City or Zip' name = 'location' value = {this.location} onChange = {this.handleInput} type="text"></input>							          
			        </div>
			        <button className = 'btn sub-button'>Go</button>
			    </div>
			</form>	
		);
	}
}

export default Form;
