import { useState, useEffect } from 'react'
import Grocery from './Grocery'
import GroceryForm from './GroceryForm'

function GroceryContainer () { 
    
    const [ groceryArray, setGroceryArray ] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/groceries")
            .then(resp=>resp.json())
            .then(data=> {
                setGroceryArray(data)
            })
    }, [])
    
    const grocery = groceryArray.map(grocery => {
        return <Grocery keys={grocery.id} input={grocery.input} priority={grocery.priority} />
    })

    return (
        <>
            <h1>GROCERIES</h1>
            <GroceryForm />
            {grocery}
        </>
    )
}

export default GroceryContainer