import { useState } from "react";
import Searchbar from "./searchbar";
import "./searchbar/index.css";



export default function WeatherApp(){

    const [weatherData , setWeatherData] = useState(null);
    const [loading , setLoading] = useState(false);
    const [city , setCity] = useState("");

    async function fetchWeatherData(){
        setLoading(true);
        const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=243b55b4a6fd9bd04e27d41a5b005d17&units=metric`)

        const data = await response.json();
        if(data){
            setWeatherData(data);
            setLoading(false);
        }
        console.log(data);

    }

    function handleSubmit(){
        fetchWeatherData();
    }


    return (
        <Searchbar
         handleSubmit={handleSubmit}
         city={city}
         setCity={setCity}
         loading={loading} 
         
         weatherData={weatherData}
         />
    )
}