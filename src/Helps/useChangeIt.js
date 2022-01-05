import { useState, useEffect } from 'react';
import axios from 'axios';

const useChangeIt = () => {
    
    const [weather, setWeather] = useState()
    const [isLoading, setIsLoading] =useState(true)
    const [temp, setTemp] = useState(0);
    const [unit, setUnit] = useState('C')

    useEffect (() => {
        const success = position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=480df03c58ef8c7451d2bc1e78b70c1e`)
          .then(res =>  {
              setWeather(res.data)
              let toCelsius = res.data.main.temp - 273.15;
              toCelsius = Math.round(toCelsius)
              setTemp(toCelsius)
            }
              )
          
          .finally(() => setIsLoading(false))
        }

        const handleError = () =>{
            console.log('No permitio acceso');
          }

        navigator.geolocation.getCurrentPosition(success, handleError)

        
    }, [])

    

    const oppositUnit = unit === 'C' ? 'F' : 'C';

    const convert = () => {
        if (unit === 'C'){
            const newT = temp * 1.8 + 32;
            setTemp(Math.round(newT));
            setUnit(oppositUnit)
            console.log(newT);
        }

        if (unit === 'F'){
            const newT = ((temp - 32) * 5) / 9;
            setTemp(Math.round(newT));
            setUnit(oppositUnit);
        }
    }
    
    return {temp, unit, oppositUnit, convert, isLoading, weather}

};

export default useChangeIt;