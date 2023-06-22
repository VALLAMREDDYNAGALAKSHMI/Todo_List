import React,{useState} from 'react';


const EditTodoForm=({editTodo, title})=>{
    const [checkbox,setCheckbox] =useState(title.completed)
    const [value,setValue]=useState(title.title)
    const handleSubmit = e =>{
        e.preventDefault();
        editTodo(value, title.id,checkbox);
        setValue("")
    }
    return(
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input'value={value}
             placeholder='Update Task'
              onChange={(e)=>setValue(e.target.value)}/>
            <button type='text' className='todo-btn'>Update Task</button>
            <label className='check-box'>
            <input type='checkbox'  name='completed'  value={checkbox} checked={checkbox} onChange={(e)=>setCheckbox(e.target.checked)}/> is it Completed</label>
            
        </form>
    )
}
export default EditTodoForm;