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
        <div className="bars">
            <div className={priority} id={isChecked ? "completed" : ""}>
                <h3 className="h3">{input}</h3>
                <input type="checkbox" className="checkbox" onChange={handleOnChange}/>
                <label className="complete">{isChecked ? "Complete" : "Completed?"}</label>
                <button onClick={handleRemove} className="remove">Delete</button>
            </div>
        </div>
    )
}

export default Misc