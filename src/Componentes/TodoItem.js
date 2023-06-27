import React from 'react'
import { RiCloseCircleLine} from "react-icons/ri"
import {BiCheckCircle} from "react-icons/bi"

export default function TodoItem(props) {
    const {todo, removeTodo, completeTodo} = props
  
    return (
    <div className={todo.completed ?"todo-row completed": 'todo-row'}>
        {todo.text}
        <div className='iconContainer'>
            <RiCloseCircleLine className="icon"
            style={{marginRight: 5}} onClick={() => removeTodo(todo.id)}>
            </RiCloseCircleLine>

            <BiCheckCircle onClick={() => completeTodo(todo.id)}  className='icon'/>
        </div>
    </div>
  )
}
