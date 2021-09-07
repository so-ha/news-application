import React from 'react';
import {weatherData} from './sampleWeatherData';
import weatherImg from './weather.png';
import '../../css/weather.css'
import API_KEY from './token';
// import WeatherComponent from './WeatherComponent';
// let wData = weatherData[0];


class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city:'',
            wData:''
        }
        this.tsToUTC = this.tsToUTC.bind(this);
        this.onBtnSubmit = this.onBtnSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fetchWeatherData = this.fetchWeatherData.bind(this);
    }
    tsToUTC = (s) =>  {
        let date = new Date(s);
        return date.toTimeString();
    }
    onBtnSubmit(e){
        e.preventDefault();
        // console.log(e.target[0].value)
        this.fetchWeatherData(e.target[0].value)
    }
    handleChange(e) {
        e.preventDefault();
    }
    componentDidMount() {
        console.log(this.fetchWeatherData("Delhi"))
    }
    fetchWeatherData (city) {
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "c4b3bffc72mshbd3d25ba96efb2fp12c176jsn8207ad8704aa",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => {
            return response.json();
        })
        .then(body => {
            // console.log(body)
            this.setState({wData:body})
        })
        .catch(err => {
            console.error(err);
        });
    }
    render() {
        return (
            <div  className="weather">
                <div>
                <img src={weatherImg} alt="weather-icon" width="40px" height="40px" style={{float:"left"}}/>
                <h5 className="weather-heading">Today's Weather</h5>
                </div>
                <hr/>
               <form onSubmit={(e) => {this.onBtnSubmit(e)}}  className="weather-form">
                   <input type="text" placeholder="Enter city or location" onChange={(e) => this.handleChange(e)}/>
                   <button type="submit" onSubmit={(e) => {this.onBtnSubmit(e)}}>Find weather data</button>
               </form>
               <br/>
               {/* <WeatherComponent data={wData}/> */}
               {
                   this.state.wData ?
               <div>
                   Weather Data for {this.state.wData.name} : 
                   <div>
                        <i className="fa fa-mixcloud"></i> {this.state.wData.weather[0].main} | {this.state.wData.weather[0].description}<br/>
                        <i className="fa fa-location-arrow"></i> Location : {this.state.wData.coord.lat} (Lat.) | {this.state.wData.coord.lon} (Lon.)<br/>
                        <i className="fa fa-thermometer"></i> Temperature(°F) : {this.state.wData.main.temp + " | "+ this.state.wData.main.tempmin + " (Min) | "+this.state.wData.main.tempmax+" (Max) "}<br/>
                        <i className="fa fa-eyedropper"></i> Pressure : {this.state.wData.main.pressure} | Humidity : {this.state.wData.main.humidity}<br/>
                        <i className="fa fa-soundcloud"></i> Wind speed : {this.state.wData.wind.speed} | Visibility : {this.state.wData.visibility}<br/>
                        <i className="fa fa-sun-o rise"></i> Sunrise : {this.tsToUTC(this.state.wData.sys.sunrise)} <br/>
                        <i className="fa fa-sun-o set"></i> Sunset : {this.tsToUTC(this.state.wData.sys.sunset)}
                    </div>
               </div>
               : '' }
            </div>
        );
    }
}

export default Weather;