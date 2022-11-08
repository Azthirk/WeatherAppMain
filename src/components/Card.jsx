import React from 'react';
import s from '../styles/Card.module.css';

function cardBackground(a, clim){
  if(a[a.length - 1] === "d"){

    if(clim === "Smoke" || clim === "Mist" || clim === "Fog"){
      return s.nubladoDia;
    }else if(clim === "Rain"){
      return s.tormentaDia;
    }

    return s.despejadoDia;
  }else{
    if(clim === "Smoke" || clim === "Mist"){
      return s.nubladoNoche;
    }else if(clim === "Rain"){
      return s.tormentaNoche;
    }
    return s.despejadoNoche;
  }
}

function textito(clim){
    if(clim === "Smoke" || clim === "Mist"){
      return "Fog is expected.";
    }else if(clim === "Clouds"){
      return "The sky will be partly cloudy.";
    }else if(clim === "Rain"){
      return "Some showers expected.";
    }

    return "The sky will be clear.";
}

export default function Card({weather, temp, max, min, name, img, horaActual, onClose, sensacionTermica}) {
  // acá va tu código

  return (
  <div className={cardBackground(img, weather)}>

      <div className={s.close}>
        <button className="btn btn-sm btn-danger" onClick = {onClose}> X </button>
      </div>

      <div className='column'>
      <h5 className={s.cardTitle}>{name}</h5>

        <div className='row'>
          <div className={s.imgClima}>
          <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="imgClima"/>
          </div>
          
          <div className={s.cardTemp}>
            <p>{temp} °</p>
          </div>
          <div className={s.cardTempC}>
            <p>c</p>
          </div>

          <div className={s.cardDiv}>
            <p>{weather}</p>
            <p>Thermal sensation: {sensacionTermica}</p>
          </div>
        </div>
      <p>Current Time: {horaActual}</p>
      <p>Máx.: {max}° Mín.: {min}° </p>

      <div className={s.cardDiv2}>
        <p>{textito(weather)}</p>
      </div>

      </div>
    
  </div>)
  
};
