import { useState, useEffect } from "react"
import Misc from "./Misc"
import MiscForm from "./MiscForm"

function MiscContainer () { 
    
    const [ miscArray, setMiscArray ] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/misc")
            .then(resp=>resp.json())
            .then(data=>setMiscArray(data))
    }, [])
    
    const misc = miscArray.map(item => {
        return <Misc key={item.id} id={item.id} input={item.input} priority={item.priority} text={item.text} miscArray={miscArray} setMiscArray={setMiscArray} />
    })

    
    return (
        <>
           <h1 className="todo">MISC</h1>
           <MiscForm setMiscArray={setMiscArray}/>
           <div className="todocontainer">
                {misc}
           </div>
        </>
    )
}

export default MiscContainer