import React, { Component } from "react";

interface searchWeatherState {
  error?: boolean;
  weather?: weatherState;
}

interface weatherState {
  city?: string;
  temperatureDegree?: number;
  temperatureMax?: number;
  temperatureMin?: number;
  temperatureSensation?: number;
  weatherType?: string;
  windSpeed?: number;
  time?: string;
}

class searchWeather extends Component<{}, searchWeatherState> {
  weatherRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.state = {
      weather: {
        city: "",
        temperatureDegree: 0,
        temperatureMax: 0,
        temperatureMin: 0,
        temperatureSensation: 0,
        weatherType: "",
        windSpeed: 0,
        time: ""
      },
      error: false
    };
    this.weatherRef = React.createRef();
  }
  search = (): void => {
    const inputValue = this.weatherRef.current.value;
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&APPID=${process.env.REACT_APP_API_KEY}&&units=metric`
    ).then(response => {
      if (response.status !== 200) {
        this.setState({ error: true });
        return;
      }

      response.json().then(data => {
        this.setState({
          error: false,
          weather: {
            city: data.city.name,
            temperatureDegree: data.list[0].main.temp,
            temperatureMax: data.list[0].main.temp_max,
            temperatureMin: data.list[0].main.temp_min,
            temperatureSensation: data.list[0].main.feels_like,
            weatherType: data.list[0].weather.description,
            windSpeed: data.list[0].wind.speed,
            time: data.list[0].dt_txt
          }
        });
      });
    });
  };
  render() {
    const { error, weather } = this.state;

    let result;

    if (error) {
      result = <p>There is an error</p>;
    } else if (this.state.weather.city !== "") {
      result = (
        <div>
          <div>City: {weather.city}</div>
          <div>Temperature in Degres : {weather.temperatureDegree}</div>
          <div>Temperature Max: {weather.temperatureMax}</div>
          <div>Temperature Min: {weather.temperatureMin}</div>
          <div>Temperature Sensation: {weather.temperatureSensation}</div>
          <div>Weather Type: {weather.weatherType}</div>
          <div>Windspeed: {weather.windSpeed}</div>
          <div>Time: {weather.time}</div>
        </div>
      );
    }

    return (
      <div>
        <input type="text" ref={this.weatherRef}></input>
        <button onClick={this.search}> Search </button>
        {result}
      </div>
    );
  }
}

export default searchWeather;
