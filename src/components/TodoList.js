import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


function TodoList() {

    const [todos, setTodos] = useState([])

    const addToDo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newToDos = [todo, ...todos];
        setTodos(newToDos);
        console.log(...todos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        const editItem = [...todos].map(todo => todo.id === todoId ? newValue : todo)

    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const completeToDo = (id) => {
        let updateToDo = todos.map(todo => {
            if (todo.id = id){
                todo.isComplete = !todo.isComplete;
            }
        })
        setTodos(updateToDo);
    }

    return (
        <div>
            <h1>What's the plan today?</h1>
            <TodoForm onSubmit={addToDo}/>
            <TodoItem todos={todos} completeToDo={completeToDo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    );
}

export default TodoList
