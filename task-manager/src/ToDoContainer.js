import { useState, useEffect } from "react"
import ToDo from "./ToDo"
import ToDoForm from "./ToDoForm"

function ToDoContainer () { 
    
    const [ toDoArray, setToDoArray ] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/todos")
            .then(resp=>resp.json())
            .then(data=>setToDoArray(data))
    }, [])
    
    const toDo = toDoArray.map(toDo => {
        return <ToDo keys={toDo.id} input={toDo.input} priority={toDo.priority} />
    })

    
    return (
        <>
           <h1>TO-DOS</h1>
           <ToDoForm setToDoArray={setToDoArray}/>
            {toDo}
        </>
    )
}

export default ToDoContainer