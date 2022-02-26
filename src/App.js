import React, { useEffect, useState } from "react";
import "./App.css";

const GIFS = [
  "https://media.giphy.com/media/3o7aD31EMy7t9dzwpq/giphy.gif",
  "https://media.giphy.com/media/3o7aDangmeJZSwE8cU/giphy.gif",
];

const DIFFERENT_GIFS = [
  "https://media.giphy.com/media/xUNd9DoQ5IHW4lMCcM/giphy.gif",
  "https://media.giphy.com/media/3o6fJcEcW1xcvOc2eQ/giphy.gif",
  "https://media.giphy.com/media/LMWHPdfNaSpiC0rSfu/giphy.gif",
];

function App() {
  /*const estado = useState([valor inicial]); devuelve un array con dos posiciones, la primera es el valor del estado y la segunda es la función para actualizar el valor del estado
  const value = estado[0]
  const setValue = estado[1]
  const [value, setValue] = useState([valor inicial]);
  */

  const [gifs, setGifs] = useState(GIFS);
  function changeGifts() {
    console.log("gif actuales", gifs);
    setGifs(DIFFERENT_GIFS);
    console.log("cambio de gifs", gifs);
  }

  // se ejecuta una sola vez al montar el componente (renderizado) , tiene 2 parámetros, el primero es una función que queremos ejecutar, el segundo son las dependiencias que queremos que se ejecuten, si cambia algo en la dependencia, se ejecuta la función
  useEffect(() => {
    /*
    bucle infinito -> se ejecuta cada vez que se renderiza el componente

    se renderiza (useEffect) -> se cambia el estado -> se vuelve a renderizar por que se cambio el estado (useEffect) ->se cambia el estado -> se vuelve a renderizar por que se cambio el estado (useEffect) 

    changeGifts();

    esto si  le quitamos todas las dependencias
    si le ponemos un array vacio como dependencias, se ejecuta una sola vez al montar el componente, si le ponemos una dependencia que no cambia, se ejecuta una sola vez al montar el componente,  si le ponemos una dependencia que cambia, se ejecuta una vez al montar el componente y cada vez que cambia la dependencia, se ejecuta
    */

    changeGifts();
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        <h1>Giff App</h1>
        {/* usamos map porque devuelve algo en cada iteración, a diferencia de foreach */}
        {gifs.map((gif) => (
          <img src={gif} alt="gif" />
        ))}
        <button onClick={changeGifts}>Cambiar Gifs</button>
        {/* 
        Al ser un arreglo solo devuelve e primero
        <img src={gifs} alt="panda" />  */}
      </section>
    </div>
  );
}

export default App;
