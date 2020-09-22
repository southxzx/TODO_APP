
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


function Todo({todos, completeToDo, updateTodo, removeTodo}) {

    const [edit,setEdit] = useState({
        id: null,
        value: ''
    });

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo_row complete' : 'todo_row'} key={index}>
            <div key={todo.id} onClick={() => completeToDo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <FontAwesomeIcon icon={faEdit} onClick={() => updateTodo(todo.id)} className="edit_icon"/>
                <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeTodo(todo.id)} className="delete_icon"/>
            </div>
        </div>
    ));
};

export default Todo


