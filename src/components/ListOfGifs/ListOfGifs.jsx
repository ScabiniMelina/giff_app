import React from "react";
import Gif from "../Gif/Gif";

const ListOfGifs = ({gifs =[] }) => {
  return (
    <div>
      {gifs.map(({ url, id, title }) => (
        <Gif url={url} key={id} title={title} id={id}></Gif>
      ))}
    </div>
  );
};

export default ListOfGifs;
