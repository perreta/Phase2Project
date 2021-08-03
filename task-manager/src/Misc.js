function Misc ({ id, input, priority, miscArray, setMiscArray }) {   
    function handleRemove(e) {
        console.log(e.target)
        fetch(`http://localhost:8000/misc/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        const miscToDisplay = miscArray.filter((misc) => {
            if (misc.id === id) return false
            else return true
        })
        setMiscArray(miscToDisplay)
    }
    
    return(
        <div className={priority}>
            <h3>{input}</h3>
            <button onClick={handleRemove}>X</button>
            <input type="checkbox" />
            <label>Completed?</label>
        </div>
    )
}

export default Misc