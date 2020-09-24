
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import TodoForm from './TodoForm';


function Todo(props) {

    const [edit,setEdit] = useState({
        id: null,
        value: ''
    });

    // const update = (id, text) => {
    //     setEdit({id: id, value: text});
    //     props.updateTodo(id, text);
    // }

    // value = props.obSubmit
    const submitUpdate = (value) => {
        // Khi submit form EDIT thì update qua Parent
        props.updateTodo(edit.id, value);

        // Sau đó reset edit
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    console.log(props.todos);
    return props.todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo_row complete' : 'todo_row'} onClick={() => props.completeToDo(todo.id)} key={index}>
            <div key={todo.id} onClick={() => props.completeToDo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <FontAwesomeIcon icon={faEdit} onClick={() => setEdit({id: todo.id, value: todo.text})} className="edit_icon"/>
                <FontAwesomeIcon icon={faTrashAlt} onClick={() => props.removeTodo(todo.id)} className="delete_icon"/>
            </div>
        </div>
    ));
};

export default Todo


