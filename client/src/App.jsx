import { useState } from 'react'
import './App.css'

export default function App() {
  const [TaskName, setTaskName] = useState('Testing Task')
  return(
    <>
      <div class="wrapper">
        <div id="listFrame">
          <div id="listTitleFrame">
            <h1 id="listTitle">To Do List</h1>
          </div>
          <div id="innerFrame">
            {/* <p>Testing App</p>
            <Task TaskName = {TaskName}/> */}
          </div>
        </div>
        <div id="taskFrame">
          <div id="taskTitleFrame">
            <h1 id="taskTitle">Create Task</h1>
          </div>
          <div id="setInfo">
              <div id="setWriting">
                <div id="setTitle">
                  <h2>Title</h2>
                  <input id="titleInput"></input>
                </div>
                <div id="setDesc"></div>
              </div>
              <div id="setDropdown">
                <div id="setDate"></div>
                <div id="setPriority"></div>
              </div>
          </div>
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