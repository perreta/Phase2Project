
function ToDo ({ input, priority }) { 
    return(
        <div className={priority}>
            <h3>{input}</h3>
            <button>X</button>
            <input type="checkbox" />
            <label>Completed?</label>
        </div>
    )
}

export default ToDo