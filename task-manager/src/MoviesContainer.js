import { useState, useEffect } from "react"
import Movie from "./Movie"
import MovieSearchForm from "./MovieSearchForm"


function MoviesContainer ({moviesToRender, handleSubmit, handleInputChange}) { 

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
                        key={movie.id}
                        title={movie.Title}/>
               ))}
           </ul>
        </>
    )
}

export default MoviesContainer