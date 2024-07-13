import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ToDo(props) {
 let [toDoListItem,setItem]= useState([])
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/todos').then(todoList=>{
        console.log("todo",todoList)
        setItem(todoList.data)
      })

    })
    return (
        <div>
          {
            toDoListItem.map(toDo=>{

                return <h1>{toDo.title}</h1>
            })
          }
        </div>
    );
}

export default ToDo;