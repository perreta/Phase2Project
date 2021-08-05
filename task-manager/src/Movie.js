import React, {useState} from "react";

function Movie({title, setWatchlistArray, imdbID}) {

    function handleClick(){
        console.log('hi')
        const priority = "low"
        const newItem = { title, priority }
        fetch('http://localhost:8000/watchlist', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(newItem)
        })
        .then(resp => resp.json())
        .then(newItemResponse => {
            console.log(newItemResponse)
            setWatchlistArray(prevItems => [newItemResponse, ...prevItems]) 
        })
    }

    function openImdb(){
        window.open(`https://www.imdb.com/title/${imdbID}`, "_blank")
    }

  return (
      <div className="Movierenders">
        <h1>
            {title}
            <button className="submit-button" onClick={openImdb}>see details</button>
            <button className="submit-button" onClick={handleClick}>add to watchlist</button>
        </h1>
    </div>
  );
}

export default Movie;