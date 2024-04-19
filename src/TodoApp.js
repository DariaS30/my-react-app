import React, { useState } from 'react';
import './App.css'
function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const handleTodoClick = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        onClick={() => handleTodoClick(index)}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <div>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </div>
    );
}

export default TodoApp;

