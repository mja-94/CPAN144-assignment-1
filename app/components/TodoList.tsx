'use client';

import React, { useState } from 'react';
import TodoItem from './Todoitem';

type Task = {
  id: number;
  text: string;
  done: boolean;
};

// Props this component receives from its parent page
type TodoListProps = {
  title: string;
};

export default function TodoList({ title }: TodoListProps) {
  // State: the list of tasks, the text in the input box, and an error message
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  // Event handler: form submission (adds a task)
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // stop the page from reloading

    if (newTask.trim() === '') {
      setError('Please type a task first.');
    } else {
      const task: Task = { id: Date.now(), text: newTask.trim(), done: false };
      setTasks([...tasks, task]);
      setNewTask('');
      setError('');
    }
  };

  // Event handler: tick or untick a task
  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  // Event handler: remove a task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <div className="card">
      <h2>{title}</h2>

      <form onSubmit={handleSubmit} className="row">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>

      {/* Conditional rendering: show the error only if there is one */}
      {error && <p className="error">{error}</p>}

      {/* Conditional rendering: empty message or the list */}
      {tasks.length === 0 ? (
        <p className="info">No tasks yet. Add one above!</p>
      ) : (
        <ul className="todo-list">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              text={task.text}
              done={task.done}
              onToggle={() => toggleTask(task.id)}
              onDelete={() => deleteTask(task.id)}
            />
          ))}
        </ul>
      )}

      {tasks.length > 0 && (
        <p>
          {doneCount} of {tasks.length} tasks done
        </p>
      )}
    </div>
  );
}