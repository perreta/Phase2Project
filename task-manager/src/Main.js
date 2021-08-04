import GroceryContainer from "./GroceryContainer";
import ToDoContainer from "./ToDoContainer";
import MiscContainer from "./MiscContainer";
import WatchlistContainer from "./WatchlistContainer";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";

function Main () { 
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
                    <WatchlistContainer />
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