import React, { Component } from "react";

interface searchWeatherState {
  city?: string;
  temperatureDegree?: number;
  temperatureMax?: number;
  temperatureMin?: number;
  temperatureSensation?: number;
  weatherType?: string;
  windSpeed?: number;
  time?: string;
}

class searchWeather extends Component<searchWeatherState> {
  weatherRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.state = {
      city: "",
      temperatureDegree: null,
      temperatureMax: null,
      temperatureMin: null,
      temperatureSensation: null,
      weatherType: null,
      windSpeed: null,
      time: null,
      error: false
    };
    this.weatherRef = React.createRef();
  }
  search = () => {
    const inputValue = this.weatherRef.current.value;
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&APPID=9989ba25d8276a4b1d4d217e8fd2226e&&units=metric`
    ).then(response => {
      if (response.status !== 200) {
        this.setState({ error: true });
        return;
      }

      console.log(response.json());
    });
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.weatherRef}></input>
        <button onClick={this.search}> Search </button>
      </div>
    );
  }
}

export default searchWeather;
