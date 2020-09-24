import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


function TodoList() {

    const [todos, setTodos] = useState([])

    // todo này chính là object onSubmit(id,name) từ TodoForm
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
        // Update function
        const editItem = [...todos].map(todo => todo.id === todoId ? newValue : todo);
        setTodos(editItem);

    }

    // Callback function của TodoList, nhận function từ TodoItem ** props.removeTodo(todo.id)
    const removeTodo = (id) => {
        //Remove dùng filter
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const completeToDo = (id) => {
        let updateToDo = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
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
