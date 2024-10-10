import { useEffect, useState }from 'react'
import axios from 'axios'
//axios>fetch()

import './App.css'

function App() {
  const [reminders ,setReminders] =useState([])
  // Goal:Make request to Backend(localhost:3000/reminders) ---> save Reminders to state
  
  const fetchReminders = async() => {
    // Make Request to DB
    const response=await axios.get("http://localhost:3000/reminders")
    console.log(response)
    const info = await response.data 
    await setReminders(info.reminders)
  }

useEffect(()=>{
  fetchReminders()
},[])
    fetch('')
    axios('')


    return (
    <>
      
    </>
  )
}

export default App
