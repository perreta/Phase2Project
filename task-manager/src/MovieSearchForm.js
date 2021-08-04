import { useState } from "react"

function MovieSearchForm({handleSubmit, handleInputChange}){
    
    return (
        <form id="misc-form" onSubmit={handleSubmit}>
                <label className="labels">
                    Search for a movie: 
                    <input onChange={handleInputChange} type="text" name="input" />
                </label>
                <input type="submit" value="Submit" />
            </form>
    )
}

export default MovieSearchForm