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
        return <ToDo key={toDo.id} id={toDo.id} input={toDo.input} priority={toDo.priority} text={toDo.text} toDoArray={toDoArray} setToDoArray={setToDoArray} />
    })

    
    return (
        <>
           <h1 className="todo">TO-DOS</h1>
           <ToDoForm setToDoArray={setToDoArray}/>
           <div className="todocontainer">
                {toDo}
           </div>
        </>
    )
}

export default ToDoContainer