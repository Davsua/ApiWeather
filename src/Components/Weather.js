import React from 'react';
import useChangeIt from '../Helps/useChangeIt';


const Weather = () => {
    
    
   const {temp, unit, oppositUnit, convert, isLoading, weather} = useChangeIt()
   const icon = weather?.weather?.[0].icon

    return (
        <div className='Weather'>
            {isLoading ? (
                <div className='loader'></div>
            ) : (
                <div className='container'>
                    <div className='boxHumidity'>
                        <p><b>Humidity: </b>{weather.main?.humidity}%</p>
                    </div>
                    <div className='Card-weather'>
                        <h1>Weather App</h1>
                        <h3>{weather.name}, {weather.sys?.country}</h3>
                        <p><b>{weather.weather?.[0].main}</b>: {weather.weather?.[0].description}</p>
                        <img src= {`http://openweathermap.org/img/wn/${icon}.png`} alt="" />
                        <p><b>T°:</b> {temp} ° {unit}</p>
                        <button onClick={convert}>Change to ° {oppositUnit}</button>
                    
                    </div>
                    <div className='boxWind'>
                    <p><b>Wind:</b> {weather.wind?.speed}</p>
                    </div>
                </div>
            )}
           
        </div>
    );
};

export default Weather;