import React, { useState } from "react";
import "./App.css";
import { Link, Route } from "wouter";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  const [keyWord, setKeyWord] = useState("bart");
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giff App</h1>
        <button onClick={() => setKeyWord("lisa")}>Cambiar gifs</button>
        <Link to="/gif/apu"> Apu </Link>
        <Link to="/gif/moe">Moe</Link>
        <Link to="/gif/lenny"> Lenny </Link>
        <Link to="/gif/marge"> Marge </Link>
        <Link to="/gif/homero"> Homero</Link>
        <div className="gifGalery">
          {/*Definimos las rutas de nuestra app si estuvieramos en la ruta  /gifts/:keyword renderiza */}
          <Route path="/gif/:keyWord">
            {(params) => <ListOfGifs keyWord={params.keyWord} />}
          </Route>
          {/* <ListOfGifs keyWord={keyWord}></ListOfGifs> */}
        </div>
      </section>
    </div>
  );
}

export default App;
