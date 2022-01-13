import React, { useState, useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState({});

  async function fetchData() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    const weatherDetails = {
      id: data.id,
      name: data.name,
      lat: data.coord.lat,
      long: data.coord.lon,
      wind: data.wind.deg,
      main: data.main.feels_like,
      icon: data.weather[0].icon,
      sys: data.sys.country,
    };
    setWeatherData(weatherDetails);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>{weatherData.id}</h1>
      <h1>{weatherData.name}</h1>
      <h1>{weatherData.wind}</h1>
      <h1>{weatherData.lat}</h1>
      <h1>{weatherData.long}</h1>
      <h1>{weatherData.main}</h1>
      <img src={`http://openweathermap.org/img/w/${weatherData.icon}.png`} />
      <h1>{weatherData.sys}</h1>
    </div>
  );
}

export default App;
