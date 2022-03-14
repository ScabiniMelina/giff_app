import React, { useState, useEffect } from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import getGifs from "../../services/getGifs";
import Loading from "../../components/Loading/Loading";

export default function SearchResult({ keyWord = "error" }) {
  console.log(keyWord);
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyWord: keyWord }).then((singleGif) => {
      setGifs(singleGif);
      setLoading(false);
    });
  }, [keyWord]);

  return <div>{loading ? <Loading /> : <ListOfGifs gifs={gifs} />}</div>;
}
