import React, { Component } from 'react';
import {FaEllipsisV} from 'react-icons/fa';

class WeatherCard extends Component {
	render() {
		return (
			<div className = 'card-cont card'>
			    <div className="card-image card-img-cont">
			      <img className="cardimg" src="http://openweathermap.org/img/w/10d.png"/>
			    </div>
			    <div className="card-content">
			      <span className="">Card Title</span>
			    </div>
			</div>
		);
	}
}

export default WeatherCard;
