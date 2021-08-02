import { useState } from "react"

function GroceryForm(){
    const [ formData, setFormData ] = useState({
        input: "",
        priority: ""
    });
    
    function manageFormData (event) {
        let name = event.target.name
        let value = event.target.value
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const [submittedData, setSubmittedData] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        const newSubmittedData = { 
            input: formData.input,
            priority: formData.priority,
        }
        setSubmittedData([...submittedData, newSubmittedData])
        console.log(submittedData)
    
        setFormData({
            input: "",
            priority: ""
        })
    }

    return (
        <form id="grocery-form" onSubmit={handleSubmit}>
                <label>
                    New Item: 
                    <input onChange={manageFormData} type="text" name="name"/>
                </label>
                <label>Set priority: </label>
                <select className="priority" onChange={manageFormData}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
    )
}

export default GroceryForm