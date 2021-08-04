import { useState } from "react"

function WatchlistForm({ setWatchlistArray }){
    const [ input, setInput ] = useState("");
    const [ priority, setPriority ] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const newWatchlist = { input, priority }
        fetch('http://localhost:8000/watchlist', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(newWatchlist)
        })
        .then(resp => resp.json())
        .then(newWatchlistResponse => {
            console.log(newWatchlistResponse)
            setWatchlistArray(prevWatchlist => [newWatchlistResponse, ...prevWatchlist]) 
        })
        event.target.reset()
    }

    function handleInputChange(event){
        setInput(event.target.value)
    }

    function handlePriorityChange(event){
        setPriority(event.target.value)
    }

    return (
        <form id="todo-form" onSubmit={handleSubmit}>
                <label className="labels">
                    New Movie: 
                    <input onChange={handleInputChange} type="text" name="input" />
                </label>
                <label className="labels">Set priority: </label>
                <select className="priority" onChange={handlePriorityChange} name="priority">
                    <option selected="selected" disabled> </option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <input type="submit" value="Submit" />
        </form>
    )
}

export default WatchlistForm