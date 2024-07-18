import React from 'react';

const TodoItem = ({ todo, onDelete, onToggleCompletion }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span>{todo.text}</span>
      <div className="actions">
        <button onClick={onToggleCompletion}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button id='red' onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
