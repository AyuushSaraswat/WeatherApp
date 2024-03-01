import React, { useState } from "react";
import "./WeatherApp.css";

import search_img from "../assets/search.png";
import clear_img from "../assets/clear.png";
import cloud_img from "../assets/cloud.png";
import drizzle_img from "../assets/drizzle.png";
import rain_img from "../assets/rain.png";
import snow_img from "../assets/snow.png";
import wind_img from "../assets/wind.png";
import humidity_img from "../assets/humidity.png";

function WeatherApp() {

let api_key = 'dc7bf7cd6352f2713b289d4a20b66796';


const [wicon, SetWicon] = useState(cloud_img);

const search = async() => {
      const element = document.getElementsByClassName('city-input')
      
      if ( element[0].value === '') 
         { 
               return 0;
         }

         let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

            let resp =  await fetch(url);
            let data =  await resp.json();
            const humidity = document.getElementsByClassName('humidity-percent')
            const wind = document.getElementsByClassName('wind-rate')
            const temp = document.getElementsByClassName('weather-temp')
            const location = document.getElementsByClassName('weather-location')


            humidity[0].innerHTML = data.main.humidity + '%';
            wind[0].innerHTML = data.wind.speed + 'km/h';
            temp[0].innerHTML = data.main.temp;
            location[0].innerHTML = data.name;

    if (data.weather[0].icon === '01d || data.weather[0].icon === 01n ')
    {
      SetWicon(clear_img);

    }

     else if (data.weather[0].icon === '02d || data.weather[0].icon === 02n ')
    {
      SetWicon(cloud_img);
    }

    else  if (data.weather[0].icon === '03d || data.weather[0].icon === 03n ')
    {
      SetWicon(drizzle_img);

    }

    else if (data.weather[0].icon === '04d || data.weather[0].icon === 04n ')
    {
      SetWicon(drizzle_img);

    }

     else if (data.weather[0].icon === '09d || data.weather[0].icon === 09n ')
    {
      SetWicon(rain_img);

    }

     else if (data.weather[0].icon === '10d || data.weather[0].icon === 10n ')
    {
      SetWicon(cloud_img);

    }

     else if (data.weather[0].icon === '13d || data.weather[0].icon === 13n ')
    {
      SetWicon(snow_img);

    }

    else {
        SetWicon(clear_img);
    }

}


  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="city-input" placeholder="Search" />
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_img} alt="" />
        </div>
      </div>
      <div className="weather_img">
        <img src={cloud_img} alt="" />
      </div>
      <div className="weather-temp">24`C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_img} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_img} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default WeatherApp;
