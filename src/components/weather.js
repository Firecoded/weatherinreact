import React, { Component } from 'react';
import './weather.css';
import 'materialize-css/dist/css/materialize.min.css';


class Weather extends Component {
	constructor(props){
		super(props)

		this.state = {
			location: ''
		}
	}

	handleInput = (e) => {
		const {value} = e.target
		this.setState({
			location: value
		})
	}
	handleSubmit = (e) => {

	}

	render() {
		console.log(this.state)
		return (
			<div className = 'body-cont'>
				<div className = 'app-cont'>
					<div className ='top-cont'>
						<form onSubmit = {this.handleSubmit}>
							<div className ="real-input-cont">
						        <div className ="input-field col-4 s4 input-cont">
						          	<input id="location" placeholder = 'City or Zip' name = 'location' value = {this.location} onChange = {this.handleInput} type="text"></input>							          
						        </div>
						        <button className = 'btn sub-button'>Go</button>
						      </div>
						</form>	
					</div>
					<div className ='mid-cont'></div>
					<div className ='bot-cont'></div>
				</div>
			</div>
		);
	}
}

export default Weather;
