import { get } from "mongoose";
import "./index.css";
export default function Searchbar({  loading, weatherData,city, setWeatherData , handleSubmit , setCity }) {


    function getCurrentDate(){
        return new Date().toLocaleDateString('en-us',
            {
                weekday : "long",
                year : "numeric",
                month : "long",
                day : "numeric"
            }
        )
    }

    //const { name , main , weather , wind } = weatherData ;
  
  return (
    <div>
    <div className="search-bar">
      <div className="search-input">
        <input
          type="text"
          placeholder="enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="search-but"> 
      <button className="search-button" onClick={handleSubmit}>Search</button>
        </div>

        {loading && (
            <p className="loading-text">                
            Loading data! Please wait ...
            </p>
        )}


      {weatherData && (
        <>
      

      <div>
        <span>{getCurrentDate()}</span>
        <p>Name : {weatherData.name} </p>    
        
        
      </div>
      <div>
        <p>Temperature</p>
        <p>{weatherData.main.temp}</p>
      </div>
      <div>
        <p>weather</p>
        <p>{weatherData.weather[0].main}</p>
      </div>
      <div>
        <p>wind</p>
        <p>{weatherData.wind.speed}</p>
      </div>
      </>
      )}

    </div>
    </div>
    


  );
}
