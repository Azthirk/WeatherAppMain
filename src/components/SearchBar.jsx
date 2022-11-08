import React, {useState} from "react";
import s from '../styles/SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
      <form 
      className={s.formContainer}
      
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        var citix = document.getElementById(`${s.inputCiudad}`);
        citix.value = "Searchig...";
      }}>

        <div>
          <input
            id={s.inputCiudad}
            type="text"
            value={city}
            placeholder="Search City..."
            onChange={e => setCity(e.target.value)}
          />
          <button type="submit" className={s.buttonx} ><span>Add City</span></button>
        </div>

      </form>
      
  );
}
