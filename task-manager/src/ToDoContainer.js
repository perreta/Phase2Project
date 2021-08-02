import { useState, useEffect } from "react"
import ToDo from "./ToDo"

function ToDoContainer () { 
    
    const [ toDoArray, setToDoArray ] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/groceries")
            .then(resp=>resp.json())
            .then(data=>setToDoArray(data))
    }, [])
    
    const toDo = toDoArray.map(toDo => {
        return <ToDo keys={toDo.id} input={toDo.input} priority={toDo.priority} />
    })

    return (
        <>
            <input></input>
            {toDo}
        </>
    )
}

export default ToDoContainer