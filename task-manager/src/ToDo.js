function ToDo ({ id, input, priority, toDoArray, setToDoArray }) {   
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
        // .then(data => console.log(data))
    }
    
    return(
        <div className={priority}>
            <h3>{input}</h3>
            <button onClick={handleRemove}>X</button>
            <input type="checkbox" />
            <label>Completed?</label>
            <hr/>
        </div>
    )
}

export default ToDo