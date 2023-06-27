import React, { useState } from 'react'

export default function TodoForm(props) {
  const [Input, setInput] = useState("");
       
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo(Input)
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input onChange={(e) => setInput(e.target.value)} 
            className='todo-input'></input>
            <button type="submit" className='todo-button'>
                Agregar Tarea</button>
        </form>
    )
}

