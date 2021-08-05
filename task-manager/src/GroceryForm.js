import { useState } from "react"

function GroceryForm({ setGroceryArray }){
    const [ input, setInput ] = useState("");
    const [ priority, setPriority ] = useState("")
    const [ text, commentInput ] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const newItem = { input, priority, text }
        fetch('http://localhost:8000/groceries', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(newItem)
        })
        .then(resp => resp.json())
        .then(newItemResponse => {
            console.log(newItemResponse)
            setGroceryArray(prevItems => [newItemResponse, ...prevItems]) 
        })
        event.target.reset()
    }

    function handleInputChange(event){
        setInput(event.target.value)
    }

    function handleCommentInput(event) {
        commentInput(event.target.value)
    }

    function handlePriorityChange(event){
        setPriority(event.target.value)
    }

    return (
        <>
            <form id="todo-form" onSubmit={handleSubmit}>
                    <label className="label1">
                        New Item: 
                        <input onChange={handleInputChange} type="text" name="input" />
                    </label>
                    <label className="label2">Set priority: </label>
                    <select className="priority" onChange={handlePriorityChange} name="priority">
                        <option selected="selected" disabled> </option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <input className="submit-button" type="submit" value="Submit" />
            </form>
            <div id="comment">
                <label className="label3">
                        Comment: 
                        <input onChange={handleCommentInput} type="text" name="input" />
                </label>
            </div>
        </>
    )
}

export default GroceryForm
