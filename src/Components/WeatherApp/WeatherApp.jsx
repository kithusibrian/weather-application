import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png"; 
const WeatherApp = () => {

    let api_key = "f94efee52ef8e4b42aa34b9c0168925e";

    const [bicon, setBicon] = useState(clear_icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + "Km/H";
        temperature[0].innerHTML = data.main.temp + "°C";
        location[0].innerHTML = data.name;


        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n" ){
            setBicon(clear_icon );
        }

        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n" ){
            setBicon(cloud_icon);
        }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n" ){
            setBicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n" ){
            setBicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n" ){
            setBicon(rain_icon)
        }
        else if (data.weather[0].icon === "010d" || data.weather[0].icon === "010n" ){
            setBicon(rain_icon);
        }
        else if (data.weather[0].icon === "013d" || data.weather[0].icon === "013n" ){
            setBicon(snow_icon);
        }
        else {
            setBicon(clear_icon);
        }


    }



  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className='cityInput' placeholder="Search"/>
            <div className='search-icon' onClick={() => {search()}}>
                <img src={search_icon} alt='search'/>
            </div> 
        </div>
        <div className='weather-image'></div>
        <img src={bicon} alt="cloud-icon"/>
        <div className='weather-temp'>24°C</div>
        <div className='weather-location'>London</div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidity_icon} alt='' className='icon'/>
                <div className='data'>
                    <div className='humidity-percent'>64%</div>
                    <div className='text'>Humidity</div>
                </div>

            </div>
            <div className='element'>
                <img src={wind_icon} alt='' className='icon'/>
                <div className='data'>
                    <div className='wind-rate'>25km/H</div>
                    <div className='text'>Wind Speed</div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default WeatherApp