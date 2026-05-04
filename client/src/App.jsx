  import { useState } from 'react'
  import './App.css'
  // import { set } from 'mongoose'

  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

  export default function App() {
    
    const [taskName, setTaskName] = useState('Testing Name')
    const [taskDesc, setTaskDesc] = useState('Testing Desc')
    const [taskPriority, setTaskPriority] = useState('')
    const [taskDate, setTaskDate] = useState('')


    // const now = new Date(); 
    // const weekDay = now.getDay();

    return(
      <>
        <div className="wrapper">
          <div id="listFrame">
            <div id="listTitleFrame">
              <h1 id="listTitle">To Do List</h1>
            </div>
            <div id="innerFrame">

            </div>
          </div>
          <div id="taskFrame">
            <div id="taskTitleFrame">
              <h1 id="taskTitle">Create Task</h1>
            </div>
            <div id="setInfo">
                <div id="setWriting">
                  <div id="setTitle">
                    <TextBox 
                    inputText={taskName}
                    setInputText={setTaskName}
                    textBoxId="titleInput"
                    textBoxTitle="Title"
                    inputType="input"/>
                  </div>
                  <div id="setDesc">
                    <TextBox 
                    inputText={taskDesc}
                    setInputText={setTaskDesc}
                    textBoxId="descInput"
                    textBoxTitle="Description"
                    inputType="textarea"/>
                  </div>
                </div>
                <div id="setDropdown">
                  <div id="setDate">
                    <div style={{ paddingLeft: "20px" }}>
                      <h3>Due Date</h3>
                    </div>
                    <div id="pickDate">
                      <DatePicker setTaskDate={setTaskDate}/>
                    </div>
                  </div>
                  <div id="setPriority">
                    <input type="range" min="0" max="2"></input>
                  </div>
                  <div id="submitDiv"></div>
                </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  function TextBox ({ inputText, setInputText, textBoxTitle, textBoxId, inputType }){

    const Tag = inputType
    return(
      <>
        <h3>{textBoxTitle}</h3>
        <Tag 
          id={textBoxId}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}/>
      </>
    )
  }

  function DatePicker({ setTaskDate }){

    function SetDate({ setTaskDate, buttonDay }) {
      return(
        <>
          <button 
          className="dateButton" 
          onClick={() => setTaskDate({buttonDay})}
          >
            {buttonDay}
          </button>
        </>
      )
    }
    return(
      <>
        {days.map((day => (
          <SetDate
          key={day}
          id={`button${day}`}
          buttonDay={day}
          setTaskDate={setTaskDate}
          // style={{ backgroundColor: (day=taskDate) ? 'red':'blue'}}

                />
        )))}
      </>
    )
  }

  // function buttonClick({ day }){
  //   {`button${day}`}{
  //     backgroundColor="red"
  //   }
    
  // }