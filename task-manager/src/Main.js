import GroceryContainer from "./GroceryContainer";
import ToDoContainer from "./ToDoContainer";
import MiscContainer from "./MiscContainer";
import WatchlistContainer from "./WatchlistContainer";
import MoviesContainer from "./MoviesContainer";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Main () { 

    const [moviesToRender, setMoviesToRender] = useState([])
    const [input, setInput] = useState("");

    const [ watchlistArray, setWatchlistArray ] = useState([])


    function handleInputChange(event){
        setInput(event.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?s=${input}&apikey=429ac81a`)
            .then(res => res.json())
            .then(json => setMoviesToRender(json.Search))
    }

    return (
        <>
            <Switch>
                <Route path="/todo">
                    <ToDoContainer />
                </Route>
                <Route path="/groceries">
                    <GroceryContainer />
                </Route>
                <Route path="/misc">
                    <MiscContainer />
                </Route>
                <Route path="/movies">
                    <WatchlistContainer 
                        watchlistArray={watchlistArray}
                        setWatchlistArray={setWatchlistArray}
                        />
                </Route>
                <Route path="/movieadd">
                    <MoviesContainer 
                        moviesToRender={moviesToRender}
                        handleSubmit={handleSubmit}
                        handleInputChange={handleInputChange}
                        setWatchlistArray={setWatchlistArray}/>
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </>
    )
}

export default Main