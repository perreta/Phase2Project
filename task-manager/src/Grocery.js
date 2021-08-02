
function Grocery ({ input, priority }) { 
    return(
        <div className={{priority}}>
            <h3>{input}</h3>
            <button>X</button>
            <input type="checkbox" />
        </div>
    )
}

export default Grocery