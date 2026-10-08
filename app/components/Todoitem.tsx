'use client';

// Props this component receives from TodoList
type TodoItemProps = {
  text: string;
  done: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

export default function TodoItem({ text, done, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="todo-item">
      <label>
        <input type="checkbox" checked={done} onChange={onToggle} />
        {/* Conditional style: line-through when the task is done */}
        <span className={done ? 'done' : ''}>{text}</span>
      </label>
      <button className="danger" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}