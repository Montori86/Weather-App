import React from "react";
import "./Ciudad.css";


export default function Ciudad({city}) {
  
    return (       
                <div >
                    <h2 className="cityname">{city.name}</h2>
                    <div className="ciudad" >
                        <div>Temp: {Math.floor((city.temp-32)* 5/9)} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Clouds: {city.clouds}%</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        
    )
}