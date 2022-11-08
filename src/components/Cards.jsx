import React from 'react';
import Card from './Card';
import s from '../styles/Cards.module.css'

export default function Cards({cities, onClose}) {
  return (
    
    <div className={s.cardsContainer}>
      
    {cities.length > 0 ?
      cities.map((info) => 

        <Card
          id={info.id}
          max={info.max}
          min={info.min}
          name={info.name}
          img={info.img}
          key={info.id}
          temp={info.temp}
          weather={info.weather}
          horaActual={info.horaActual}
          sensacionTermica={info.sensacionTermica}
          onClose={() => onClose(info.id)}
        />
      )
    :
      <div className={s.tittlecardsContainer}>
        <h1>There are no cities!</h1>
      </div>
    }
    </div>
    
  )
};