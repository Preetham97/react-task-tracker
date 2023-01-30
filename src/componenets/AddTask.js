import { useState } from 'react'



const AddTask = ({onAdd}) => {

const [text, setText] = useState('')
const [day, setDay] = useState('')
const [reminder, SetReminder] = useState(false)

const onSubmit = (e) =>{
    e.preventDefault();

    if(!text){
        alert("Please add task");
        return;
    }
    onAdd({text, day, reminder});
    setText('');
    setDay('')
    SetReminder(false);
}

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type = 'text' placeholder="Add Text" value={text} onChange = {(e) => setText(e.target.value)}></input>
      </div>
      <div className="form-control">
        <label>Day</label>
        <input type = 'text' placeholder="Add Day" value={day} onChange = {(e) => setDay(e.target.value)}></input>
      </div>
      <div className="form-control form-control-check">
        <label>SetReminder</label>
        <input type = 'checkbox'  checked = {reminder} value={reminder} onChange = {(e) => SetReminder(e.currentTarget.checked)}></input>
      </div>

      <input type = "submit" value='Save Task' className="btn btn-block" ></input>
    </form>
  )
}

export default AddTask
