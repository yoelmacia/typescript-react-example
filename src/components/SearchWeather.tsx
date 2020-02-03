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

  render() {
    return (
      <div>
        <input type="text" ref={this.weatherRef}></input>
        <button> Search </button>
      </div>
    );
  }
}

export default searchWeather;
