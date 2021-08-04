import { useState } from 'react';

function Watchlist ({ id, input, priority, watchlistArray, setWatchlistArray }) {   

    const [ isChecked, setIsChecked ] = useState(false)

    function handleRemove(e) {
        console.log(e.target)
        fetch(`http://localhost:8000/misc/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        const watchlistToDisplay = watchlistArray.filter((watchlist) => {
            if (watchlist.id === id) return false
            else return true
        })
        setWatchlistArray(watchlistToDisplay)
    }

    function handleOnChange(){
        setIsChecked(prevIsChecked => !prevIsChecked)
    }
    
    return(
        <div className="bars">
            <div className={priority} id={isChecked ? "completed" : ""}>
                <h3 className="h3">{input}</h3>
                <input type="checkbox" className="checkbox" onChange={handleOnChange}/>
                <label className="complete">{isChecked ? "Complete" : "Completed?"}</label>
                <button onClick={handleRemove} className="remove">Delete</button>
            </div>
        </div>
    )
}

export default Watchlist