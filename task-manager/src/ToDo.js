import { useState } from 'react';

function ToDo ({ id, input, priority, toDoArray, setToDoArray }) {   

    const [ isChecked, setIsChecked ] = useState(false)

    function handleRemove(e) {
        console.log(e.target)
        fetch(`http://localhost:8000/todos/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        const toDosToDisplay = toDoArray.filter((toDo) => {
            if (toDo.id === id) return false
            else return true
        })
        setToDoArray(toDosToDisplay)
    }
    
    function handleOnChange(){
        setIsChecked(prevIsChecked => !prevIsChecked)
    }

    return(
        <div className={priority} id={isChecked ? "completed" : ""}>
            <h3>{input}</h3>
            <button onClick={handleRemove} className="remove">X</button>
            <input type="checkbox" className="checkbox" onChange={handleOnChange}/>
            <label>{isChecked ? "Complete" : "Completed?"}</label>
            <hr/>
        </div>
    )
}

export default ToDo