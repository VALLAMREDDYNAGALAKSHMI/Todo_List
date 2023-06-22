import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { title } from "process";

const Todo=({title, togglecomplete,deleteTodo,editTodo})=>{
    return(
<div className="Todo">
    <p onClick={()=> togglecomplete(title.id)}
        className={`${title.completed ? 'completed':""}`}>{title.title}</p>
<div>
    <FontAwesomeIcon icon={faPenToSquare} onClick={()=> editTodo(title.id) }/>
    <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(title.id)}/>
</div>
</div>       



        
    )
}
export default Todo;