import React, { Component } from "react";

class searchWeather extends Component {
  weatherRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
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
