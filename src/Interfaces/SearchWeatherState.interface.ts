import weatherState from "./WeatherState.interface";

export default interface searchWeatherState {
  error?: boolean;
  weather?: weatherState;
}
