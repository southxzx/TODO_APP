import React, { useEffect, useRef, useState } from 'react';

function TodoForm(props) {

    const [input, setInput] = useState('');

    const inpuRef = useRef(null);

    useEffect(() => {
        inpuRef.current.focus();
    }, [input])

    const handleSubmit = (e) => {
        // Chặn submit của button
        e.preventDefault();

        // Object
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
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
                onChange={handleChange}
                ref={inpuRef}/>
            <button className="todo_button">Add</button>
        </form>
    )
}

export default TodoForm
