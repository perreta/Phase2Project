import { useState, useEffect } from "react"
import Watchlist from "./Watchlist"
import WatchlistForm from "./WatchlistForm"

function WatchlistContainer () { 
    
    const [ watchlistArray, setWatchlistArray ] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/watchlist")
            .then(resp=>resp.json())
            .then(data=>setWatchlistArray(data))
    }, [])
    
    const watchlist = watchlistArray.map(item => {
        return <Watchlist key={item.id} id={item.id} input={item.input} priority={item.priority} watchlistArray={watchlistArray} setWatchlistArray={setWatchlistArray} />
    })

    
    return (
        <>
           <h1 className="todo">WATCHLIST</h1>
           <WatchlistForm setWatchlistArray={setWatchlistArray}/>
            {watchlist}
        </>
    )
}

export default WatchlistContainer