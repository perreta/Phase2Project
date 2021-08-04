import { useState } from 'react';

function Grocery ({ id, input, priority, groceryArray, setGroceryArray }) {   

    const [ isChecked, setIsChecked ] = useState(false)

    function handleRemove(e) {
        console.log(e.target)
        fetch(`http://localhost:8000/groceries/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        const groceriesToDisplay = groceryArray.filter((grocery) => {
            if (grocery.id === id) return false
            else return true
        })
        setGroceryArray(groceriesToDisplay)
    }

    function handleOnChange(){
        setIsChecked(prevIsChecked => !prevIsChecked)
    }
    
    return(
        <div className="bars">
            <div className={priority} id={isChecked ? "completed" : ""}>
                <h3 className="h3">{input}</h3>
                <button onClick={handleRemove} className="remove">X</button>
                <input type="checkbox" className="checkbox" onChange={handleOnChange}/>
                <label>{isChecked ? "Complete" : "Completed?"}</label>
                <hr/>
            </div>
        </div>
    )
}

export default Grocery