import React, {useState} from "react"
import App from "./App";

export default function LocalTempo () {
    const [temp, setTemp] = useState("--.--")
    const [nome, setNome] = useState("---------")
    
    const btnAciona = () =>{
      const URL_MAIN = 'https://api.openweathermap.org/data/2.5/weather';
      const API_KEY = process.env.REACT_APP_API_KEY;
      const UNITS = 'metric';
      navigator.geolocation.getCurrentPosition(async function(position){
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          const url = `${URL_MAIN}?lat=${lat}&lon=${long}&units=${UNITS}&APPID=${API_KEY}`;
          const response = await fetch(url);
          const { main, name } = await response.json();
          setNome(name)
          setTemp(main.temp)
        });
    }
  
    return(     
      <div className="blocoResposta">
        <div className="texto">
          <h4>Cidade: {nome}</h4>
          <h4>Temperatura: {temp}º</h4>
        </div>
        <button type="button" className="btn btn-outline-success  btn-lg btnAciona" onClick= {btnAciona} >Temperatura Local</button>
      </div>
    )
  
  }