import { useState, useEffect } from "react"
import Movie from "./Movie"
import MovieSearchForm from "./MovieSearchForm"


function MoviesContainer ({moviesToRender, handleSubmit, handleInputChange, setWatchlistArray}) { 

    console.log(moviesToRender)
    return (
        <>
           <h1 className="todo">MOVIES</h1>
           <MovieSearchForm 
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}/>
           <ul className="movies">
               {moviesToRender.map((movie) => (
                   <Movie 
                        setWatchlistArray={setWatchlistArray}
                        key={movie.id}
                        title={movie.Title}/>
               ))}
           </ul>
        </>
    )
}

export default MoviesContainer