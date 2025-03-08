import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Todo App', completed: true },
    ]);

    const [newTodo, setNewTodo] = useState('');

    // Add Todo
    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    // Toggle Todo
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Delete Todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add new todo"
                data-testid="add-todo-input"
            />
            <button onClick={addTodo} data-testid="add-todo-button">Add Todo</button>

            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            cursor: 'pointer'
                        }}
                        data-testid={`todo-item-${todo.id}`}
                    >
                        {todo.text}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteTodo(todo.id);
                            }}
                            data-testid={`delete-button-${todo.id}`}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
