import React, { useState } from "react";
import "./App.css";
import { Link, Route } from "wouter";
import ListOfGifs from "./components/ListOfGifs/ListOfGifs";
import Home from "./pages/Home/Home";
import Detail from "./pages/Details/Detail";
import SearchResult from "./pages/SearchResults/SearchResults";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giff App</h1>
        {/* <Link to="/gif/apu"> Apu </Link>
        <Link to="/gif/moe">Moe</Link>
        <Link to="/gif/lenny"> Lenny </Link>
        <Link to="/gif/marge"> Marge </Link>
        <Link to="/gif/homero"> Homero</Link> */}
        {/* <ListOfGifs keyWord={keyWord}></ListOfGifs> */}
        <Route path="/gif/:keyWord">
          {(params) => <searhResult keyWord={params.keyWord} />}
        </Route>
        <Route path="/" component={Home}></Route>
        <Route path="/search/:keyWord">
          {(params) => <SearchResult keyWord={params.keyWord} />}
        </Route>
        <Route path="/detail/:id">
          {(params) => <Detail id={params.id} />}
        </Route>
      </section>
    </div>
  );
}

export default App;
