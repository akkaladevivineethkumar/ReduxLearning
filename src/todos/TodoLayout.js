// TodoLayout.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo } from '../redux/slices/todo'; // Update with the correct path
import { changeName } from '../redux/slices/user';

const TodoLayout = () => {
    const dispatch = useDispatch();
    // dispatch hook to dispatch the action
    // to dispatch the action we need to send the Fure function Name (in slices individual file)


    const { todos } = useSelector((state) => state.mytodo);
    const { userName } = useSelector((state) => state.user);

    // To access the data we need to use useSelector hook
    // useSelector hook to get the Specfic data from the store 
    // To access the date need to send the keyword (in Root Reducer)
    const [newTodo, setNewTodo] = useState('');
    const [name, setName] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            dispatch(addTodo(newTodo));
            setNewTodo('');
        } else {
            alert('Please enter a valid todo');
        }
    };

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    return (
        <>
            <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '20px' }}>
                <h2 style={{ textAlign: 'center' }}>Todo App</h2>
                <input
                    type="text"
                    placeholder="Add Todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    style={{ width: '70%', padding: '8px' }}
                />
                <button onClick={handleAddTodo} style={{ marginLeft: '10px', padding: '8px' }}>
                    Add
                </button>
                <ul style={{ marginTop: '10px', listStyleType: 'none', padding: 0 }}>
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            onClick={() => handleToggleTodo(todo.id)}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                                marginTop: '5px',
                            }}
                        >
                            <input type="checkbox" checked={todo.completed} />
                            <span style={{ marginLeft: '5px' }}>{todo.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <input
                type="text"
                placeholder="Update User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '70%', padding: '8px' }}
            />
            <button onClick={() => dispatch(changeName(name))} style={{ marginLeft: '10px', padding: '8px' }}>
                Add
            </button>
        </>

    );
};

export default TodoLayout;
