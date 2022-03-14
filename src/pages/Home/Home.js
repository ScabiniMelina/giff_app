import React, { useState } from "react";
import { useLocation } from "wouter";
import SearchResults from "../SearchResults/SearchResults";

export default function Home({ id }) {
  const [keyWord, setKeyWord] = useState("random");
  // Usando un custom hook de wouter para obtener la url actual y navegar sin unsar router y link
  const [path, pushLocation] = useLocation();
  console.log(useLocation());

  const searchGifs = (e) => {
    e.preventDefault();
    pushLocation(`search/${keyWord}`);
  };

  const handleChangeInput = (e) => {
    setKeyWord(e.target.value);
  };

  return (
    <div>
      <form onSubmit={searchGifs}>
        <input
          value={keyWord}
          onChange={handleChangeInput}
          type="text"
          placeholder="Search a gift here..."
        ></input>
        {/* el ultimo botón de un formulario, por defecto es de tipo submit */}
        <button type="submit">Search</button>
      </form>
      <div className="gifGalery">
        <SearchResults keyWord={"Hello"} />
        {/*Definimos las rutas de nuestra app si estuvieramos en la ruta  /gifts/:keyword renderiza */}
      </div>
    </div>
  );
}
