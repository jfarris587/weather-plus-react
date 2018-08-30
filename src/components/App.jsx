import React from "react";
import Weather from "./Weather/Weather.jsx";
import Details from "./Details/Details.jsx";

const API_KEY = "44c39c7592b9dc454cf30935fd472974";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      date: null,
      temperature: null,
      city: null,
      country: null,
      humidity: null,
      pressure: null,
      wind: null,
      cloud: null,
      description: null,
      error: null
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  getLocation = () => {
    var lat = 40.7128;
    var long = -74.0060;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function success(position) {
           console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude);
           lat = position.coords.latitude;
           long = position.coords.longitude;
           this.getWeather(lat, long);

         }.bind(this),
        function error(error_message) {
          console.error('An error has occured while retrieving location', error_message)
          this.getWeather(lat, long);
        }.bind(this)
      );
    }
  }

  getForecast = async () => {

    const city = this.state.city;
    const country = this.state.country;

    const api_forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`);

    const forecast = await api_forecast.json();
    var forecastArray = [];
    for(let i = 0; i < 40; i=i+8){
      const weekNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

      let d = new Date(forecast.list[i].dt_txt);

      let day = {
        date: weekNames[d.getDay()],
        temperature: Math.round(9/5 * (forecast.list[i].main.temp - 273) + 32),
        humidity: forecast.list[i].main.humidity,
        wind: forecast.list[i].wind.speed,
        min: Math.round(9/5 * (forecast.list[i].main.temp_min - 273) + 28),
        max: Math.round(9/5 * (forecast.list[i].main.temp_max - 273) + 33),
        description: forecast.list[i].weather[0].main
      };

      forecastArray.push(day);
    }

    var tempState = this.state;
    tempState.forecast = forecastArray;
    this.setState(tempState);

  }

  getWeather = async (lt, lg) => {
    console.log("Getting Weather...");

    const lat = lt;
    const long = lg;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`);

    const data = await api_call.json();

    if(data.message !== "city not found"){
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];


      var today = new Date();
      var todayDate = monthNames[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();

      this.setState({
        date: todayDate,
        temperature: Math.round(9/5 * (data.main.temp - 273) + 32),
        city: data.name,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        cloud: data.clouds.all,
        description: data.weather[0].description,
        error: null
      });
    }

    this.getForecast();
  }

  submitWeather = async (e) => {
    e.preventDefault();

    const city = document.getElementById('search').value;
    const country = "United States";

    if(city !== ""){

      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

      const data = await api_call.json();
      //console.log(data);

      if(data.message !== "city not found"){
        const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"];


        var today = new Date();
        var todayDate = monthNames[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();

        this.setState({
          date: todayDate,
          temperature: Math.round(9/5 * (data.main.temp - 273) + 32),
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          cloud: data.clouds.all,
          description: data.weather[0].description,
          error: null
        });
      }

      this.getForecast();
    }
  }

  render(){
    return(
      <React.Fragment>


        <Weather
          date={this.state.date}
          temperature={this.state.temperature}
          city={this.state.city}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />

        <Details
          submitWeather={this.submitWeather}
          getLocation={this.getLocation}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          wind={this.state.wind}
          cloud={this.state.cloud}
          forecast={this.state.forecast}
        />

    </React.Fragment>
    );
  }
}

export default App;
