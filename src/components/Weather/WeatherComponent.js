import React from 'react';

function WeatherComponent(props) {
	return (
		<div>
			<i className="fa fa-thermometer"> </i> Temperature : {props.data.current.temp_c}° C | Feels Like {props.data.current.feelslike_c}° C <br/>
			<i className="fa fa-soundcloud"></i> Wind : {props.data.current.wind_mph} mph {props.data.current.wind_degree}° {props.data.current.wind_dir}
			<hr/>
			{`${props.data.location.name}, ${props.data.location.region}, ${props.data.location.country}, ${props.data.location.tz_id}`} | &nbsp;
			{props.data.location.lat} (Lat.) | {props.data.location.lon} (Lon.) <br/>
			Data Last Updated : {props.data.current.last_updated}
		</div>
	);
}

export default WeatherComponent;