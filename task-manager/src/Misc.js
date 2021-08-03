import { useState } from 'react';

function Misc ({ id, input, priority, miscArray, setMiscArray }) {   

    const [ isChecked, setIsChecked ] = useState(false)

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

    function handleOnChange(){
        setIsChecked(prevIsChecked => !prevIsChecked)
    }
    
    return(
        <div className={priority} id={isChecked ? "completed" : ""}>
            <h3>{input}</h3>
            <button onClick={handleRemove} className="remove">X</button>
            <input type="checkbox" className="checkbox" onChange={handleOnChange}/>
            <label>{isChecked ? "Complete" : "Completed?"}</label>
            <hr/>
        </div>
    )
}

export default Misc