function Grocery ({ id, input, priority, groceryArray, setGroceryArray }) {   
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

export default Grocery