import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("/api/todos/");
      const data = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);
  return (
    <div>
      <h3>Todos!</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
