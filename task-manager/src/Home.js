import React from 'react';
import list from './images/list.png' 


 function Home () { 
    return (
        <>  
            <h1 id="title"> <img src={list}></img> Welcome to Taskmaster! <img src={list}></img></h1>
            <p>Your one stop shop for all your listing needs. Groceries? Errands? Band names? If you can list it, put it here!</p>
        </>
    )
}

export default Home