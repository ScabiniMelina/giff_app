import React, { useState, useEffect } from "react";
import Gif from "./Gif/Gif";
import getGifs from "../services/getGifs";

const ListOfGifs = ({ keyWord = "Apu" }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.log(keyWord);
    getGifs({ keyWord: keyWord }).then((singleGif) => {
      setGifs(singleGif);
    });
    //
  }, [keyWord]);

  return (
    <div>
      {gifs.map(({ url, id, title }) => (
        <Gif url={url} key={id} title={title} id={id}></Gif>
      ))}
    </div>
  );
};

export default ListOfGifs;
