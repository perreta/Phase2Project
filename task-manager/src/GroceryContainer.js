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
        return <Grocery key={item.id} id={item.id} input={item.input} priority={item.priority} />
    })

    
    return (
        <>
           <h1>GROCERIES</h1>
           <GroceryForm setGroceryArray={setGroceryArray}/>
            {grocery}
        </>
    )
}

export default GroceryContainer