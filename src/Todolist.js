import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todolist=({})=>{
    const [list, setList]=useState([{"userId": 1,"id": 1, "title": "delectus aut autem" ,"completed": false}, 
    { "userId": 1,"id": 2,"title": "quis ut nam facilis et officia qui", "completed": false },]);
     

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1/todos', { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setList(data);

        });
    },[])


    return( 
        <div>
            {list.map((list, index) => ( 
                  <div className="Todo" key={index}>

<p>{list.title} </p>

<div>
    <FontAwesomeIcon icon={faPenToSquare}/>
    <FontAwesomeIcon icon={faTrash}/>
</div>
</div>))}
        </div>       



        
    )
}
export default Todolist;