import { useState } from "react"

function ToDoForm({ setToDoArray }){
    const [ input, setInput ] = useState("");
    const [ priority, setPriority ] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const newToDo = { input, priority }
        fetch('http://localhost:8000/todos', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(newToDo)
        })
        .then(resp => resp.json())
        .then(newToDoResponse => {
            console.log(newToDoResponse)
            setToDoArray(prevToDos => [newToDoResponse, ...prevToDos]) 
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
                <label className="label1">
                    New To-Do: 
                    <input onChange={handleInputChange} type="text" name="input" />
                </label>
                <label className="label2">Set priority: </label>
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

export default ToDoForm
