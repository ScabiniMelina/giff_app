import React from "react";
import "./gif.css";

const Gif = ({ id, title, url }) => (
  <a href={`#${id}`} className="gifCard">
    <h4>{title}</h4>
    <img src={url} alt={title} />
  </a>
);

export default Gif;
