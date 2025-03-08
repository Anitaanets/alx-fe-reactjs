import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
    test('renders initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    });

    test('adds a new todo', async () => {
        render(<TodoList />);
        const input = screen.getByTestId('add-todo-input');
        const addButton = screen.getByTestId('add-todo-button');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        await waitFor(() => expect(screen.getByText('New Todo')).toBeInTheDocument());
    });

    test('toggles a todo completion status', async () => {
        render(<TodoList />);
        const todoItem = screen.getByTestId('todo-item-1'); // 'Learn React'

        // Ensure initial state is not completed
        expect(todoItem).not.toHaveStyle('text-decoration: line-through');

        // Click to toggle completion
        fireEvent.click(todoItem);
        await waitFor(() => expect(todoItem).toHaveStyle('text-decoration: line-through'));

        // Click again to revert
        fireEvent.click(todoItem);
        await waitFor(() => expect(todoItem).not.toHaveStyle('text-decoration: line-through'));
    });

    test('deletes a todo', async () => {
        render(<TodoList />);
        const deleteButton = screen.getByTestId('delete-button-1');

        fireEvent.click(deleteButton);

        await waitFor(() => expect(screen.queryByText('Learn React')).not.toBeInTheDocument());
    });
});
