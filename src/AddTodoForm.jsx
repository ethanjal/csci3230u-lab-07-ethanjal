import { useState } from "react";

export default function AddTodoForm({ onAdd }) {
    const [text, setText] = useState("");

function handleSubmit(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  }

return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a todo..."/>
        <button type="submit">Add</button>
    </form>
);
}