import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDeleteTodo, onToggleCompletion }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => onDeleteTodo(todo.id)}
          onToggleCompletion={() => onToggleCompletion(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
