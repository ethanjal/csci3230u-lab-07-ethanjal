import TodoList from "./TodoList.jsx";
import { useState } from "react";
// Step 3: create AddTodoForm.jsx, then import and use it below.
import AddTodoForm from "./AddTodoForm.jsx";

const INITIAL_TODOS = [
  { id: 1, text: "Read the lab README", done: true },
  { id: 2, text: "Build the to-do list", done: false },
  { id: 3, text: "Add one of your own", done: false },
];

export default function App() {
  // Right now the list is STATIC. Your job is to make it live.
  //
  // Step 1: hold the todos in state instead of a constant:
  //   const [todos, setTodos] = useState(INITIAL_TODOS)
  const [todos, setTodos] = useState(INITIAL_TODOS);


  // Step 2: write these handlers. They must NOT mutate state - build a NEW
  // array each time (spread / map / filter) and pass it to setTodos:
  //   addTodo(text)   → append { id, text, done: false }  (give it a fresh id)
  //   toggleTodo(id)  → flip `done` on the matching todo
  //   deleteTodo(id)  → drop the matching todo
  // Then pass them as props to the components below.

  function addTodo(text) {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  // const total = todos.length;
  const done = todos.filter((todo) => todo.done).length;

  return (
    <main className="app">
      <h1>My To-Dos</h1>
      {/* Step 3: <AddTodoForm onAdd={addTodo} /> */}
      <AddTodoForm onAdd={addTodo} />

      <TodoList 
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
       />
      {/* Step 4: a derived count - "{done} of {total} done" computed from todos */}
      <p>{done} of {todos.length} done</p>
    </main>
  );
}
