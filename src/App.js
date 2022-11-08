import React, { useState } from 'react'; //Se 
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import s from './styles/SearchBar.module.css';
require('dotenv').config();

function App() {
  const [cities, setCities] = useState("");
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b"

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function hora(timeZone){
    let today = new Date();
    let now = today.toGMTString();
    let horaActual = [];
    let minActual = [];

    for(let k = 0; k < 5; k++){
      if(k < 2){
        horaActual[k] = now[(now.length - 12) + k];
      }else if(k > 2){
        minActual[k] = now[(now.length - 12) + k];
      }
    }

    let hora = parseInt(horaActual.join('')) + (timeZone / 3600);
    let min = parseInt(minActual.join(''));

    if(hora >= 24) hora = hora - 24;
    if(hora < 0) hora = 24 - hora;

    let horitaDevolver = hora + " : " + min;

    if(hora < 10 && hora >= 0) horitaDevolver = "0" + hora + " : " + min;
    if(min < 10 && min >= 0) horitaDevolver = hora + " : " + "0" + min;
    if(min < 10 && min >= 0 && hora < 10 && hora >= 0) horitaDevolver = "0" + hora + " : " + "0" + min;

    return horitaDevolver;
  }


  function onSearch(city) {
    console.log(apiKey);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            timezone: recurso.timezone,
            horaActual: hora(recurso.timezone),
            sensacionTermica: Math.round(recurso.main.feels_like)
          };
          
          // console.log(recurso);
          let existe = false;
          let citysLoad = [...cities];
          
          citysLoad.forEach(c => {
            if(c.id === ciudad.id) existe = true;
          })

          if(existe){
            alert("You already added that city!")
          }else{
            setCities(oldCities => [...oldCities, ciudad]);
          }

        } else {
          alert("City not found!");
        }
        let citix = document.getElementById(`${s.inputCiudad}`);
        citix.value = "";
      });
    }
    
  return (
    <div className="App">
      
      <div className="fondito1">
        <Nav onSearch={onSearch}/>
      </div>
      <div className="fondito">
      <Cards cities={cities} onClose={onClose} hora={hora}/>
      </div>

    </div>
  );
}

export default App;
