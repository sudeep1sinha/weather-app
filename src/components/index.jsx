import { useEffect, useState } from "react";
import Searchbar from "./searchbar";
import "./searchbar/index.css";
import conf from "./searchbar/conf";

const apiKey = conf.apiKey;
const api_url = conf.api_url;


export default function WeatherApp(){

    const [weatherData , setWeatherData] = useState(null);
    const [loading , setLoading] = useState(false);
    const [city , setCity] = useState("london");

    async function fetchWeatherData(){
        setLoading(true);
        const response = await fetch( `${api_url}?q=${city}&appid=${apiKey}&units=metric` );

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


    useEffect(() => {
        fetchWeatherData();
    } , [])

   


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