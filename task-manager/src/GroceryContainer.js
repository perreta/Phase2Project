import { useState, useEffect } from "react"
import Grocery from "./Grocery"
import GroceryForm from "./GroceryForm"

function GroceryContainer () { 
    
    const [ groceryArray, setGroceryArray ] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/groceries")
            .then(resp=>resp.json())
            .then(data=>setGroceryArray(data))
    }, [])
    
    const grocery = groceryArray.map(item => {
        return <Grocery key={item.id} id={item.id} input={item.input} priority={item.priority} text={item.text} groceryArray={groceryArray} setGroceryArray={setGroceryArray} />
    })

    
    return (
        <>
           <h1 className="todo">GROCERIES</h1>
           <GroceryForm setGroceryArray={setGroceryArray}/>
           <div className="todocontainer">
                {grocery}
           </div>
        </>
    )
}

export default GroceryContainer