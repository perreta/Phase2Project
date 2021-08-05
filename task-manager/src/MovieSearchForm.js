import { useState } from "react"

function MovieSearchForm({handleSubmit, handleInputChange}){
    
    return (
        <form id="todo-form" onSubmit={handleSubmit}>
                <label className="label1">
                    Search for a movie: 
                    <input onChange={handleInputChange} type="text" name="input" />
                </label>
                <input className="submit-button" type="submit" value="Submit" />
            </form>
    )
}

export default MovieSearchForm