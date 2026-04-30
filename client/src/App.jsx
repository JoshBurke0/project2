import { useState } from 'react'
import './App.css'

export default function App() {
  const [TaskName, setTaskName] = useState('Testing Task')
  return(
    <>
      <div id="frame">
        <div id="titleDiv">
          <h1 id="title">To Do List</h1>
        </div>
        <div id="innerFrame">
          <p>Testing App</p>
          <Task TaskName = {TaskName}/>
        </div>
      </div>
    </>
  )
}

function Task({TaskName}){
  return(
    <h1>{TaskName}</h1>
  )
}