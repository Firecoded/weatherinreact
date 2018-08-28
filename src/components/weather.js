import React, { Component } from 'react';
import './weather.css';
import 'materialize-css/dist/css/materialize.min.css';
import Form from './form';
import axios from 'axios';
import WeatherCard from "./weather_card";


class Weather extends Component {
	constructor(props){
		super(props)

		this.state = {
			location: '',
			data: ''
		}
		
	}

	handleInput = (e) => {

		const {value} = e.target
		this.setState({
			location: value
		})
	}
	handleSubmit = async (e) => {
		e.preventDefault();
		const api_key = '903ed32048313a6ca697320fdb11c529'
		try {
			const resp = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.location},us&units=imperial&APPID=${api_key}`);
			this.setState({
				data: resp
			})
		} catch(err){
			console.log('error', err.message)
		}
	}

	render() {
		console.log(this.state)
		return (
			<div className = 'body-cont'>
				<div className = 'app-cont'>
					<div className ='top-cont'>
						<Form input = {this.handleInput.bind(this)}
						submit = {this.handleSubmit.bind(this)}
						data = {this.state.location}/>
					</div>
					<div className ='mid-cont'>
						<WeatherCard/>
					</div>
					<div className ='bot-cont'></div>
				</div>
			</div>
		);
	}
}

export default Weather;
