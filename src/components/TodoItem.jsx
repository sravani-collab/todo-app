function TodoItem({ todo, onToggle, onDelete }) {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <div className="todo-content">
          <span className={todo.completed ? "completed" : ""}>
            {todo.text}
          </span>
          {todo.dueDate && <small>Due: {todo.dueDate}</small>}
          {todo.tags.length > 0 && (
            <div className="description">
              {todo.tags.map((tag, i) => (
                <span className="description" key={i}>{tag}</span>
              ))}
            </div>
          )}
        </div>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    );
  }
  export default TodoItem;
  