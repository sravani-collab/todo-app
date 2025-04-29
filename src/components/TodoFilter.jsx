function TodoFilter({ filter, setFilter }) {
    return (
      <div className="todo-filter">
        {["All", "Active", "Completed"].map((type) => (
          <button
            key={type}
            className={filter === type ? "active" : ""}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>
    );
  }
  export default TodoFilter;
  