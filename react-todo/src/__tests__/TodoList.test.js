import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByTestId('add-todo-input');
        const addButton = screen.getByTestId('add-todo-button');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles a todo completion status', () => {
        render(<TodoList />);
        const todoItem = screen.getByTestId('todo-item-1'); // 'Learn React'

        // Ensure initial state is not completed
        expect(todoItem).not.toHaveStyle('text-decoration: line-through');

        // Click to toggle completion
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');

        // Click again to revert
        fireEvent.click(todoItem);
        expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const deleteButton = screen.getByTestId('delete-button-1');

        fireEvent.click(deleteButton);

        expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });
});
