import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const tagList = tags.split(",").map((tag) => tag.trim()).filter(Boolean);
      onAdd(text, dueDate, tagList);
      setText("");
      setDueDate("");
      setTags("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
