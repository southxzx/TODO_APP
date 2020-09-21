import React, { useState } from 'react'


function TodoForm(props) {

    const [input, setInput] = useState('DSSS');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <form className="todo_form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add todo things..." 
                value={input} 
                name="text" 
                className="todo_input" 
                onChange={handleChange}/>
            <button className="todo_button">Add</button>
        </form>
    )
}

export default TodoForm
