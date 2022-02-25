import React, { useState } from "react";
import "./App.css";

const GIFS = [
  "https://media.giphy.com/media/3o7aD31EMy7t9dzwpq/giphy.gif",
  "https://media.giphy.com/media/3o7aDangmeJZSwE8cU/giphy.gif",
];

const DIFFERENT_GIFS = [
  "https://media.giphy.com/media/xUNd9DoQ5IHW4lMCcM/giphy.gif",
  "https://media.giphy.com/media/xT0xey7WhaP7piFZ0k/giphy.gif",
];

function App() {
  /*const estado = useState([valor inicial]); devuelve un array con dos posiciones, la primera es el valor del estado y la segunda es la función para actualizar el valor del estado
  const value = estado[0]
  const setValue = estado[1]
  const [value, setValue] = useState([valor inicial]);
  */

  const [gifs, setGifs] = useState(GIFS);
  function changeGifts() {
    setGifs(DIFFERENT_GIFS);
  }

  return (
    <div className="App">
      <section className="App-content">
        <h1>Giff App</h1>
        {gifs.map((gif) => (
          <img src={gif} alt="gif" />
        ))}
        <button onClick={changeGifts}>Cambiar Gifs</button>
        {/* 
        Al ser un arreglo solo devuelve e primero
        <img src={gifs} alt="panda" />
        
         */}
      </section>
    </div>
  );
}

export default App;
