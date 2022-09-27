// import { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";

function Todos() {
  // const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const res = await fetch("/api/todos/");
  //     const data = await res.json();
  //     setTodos(data);
  //   };
  //   fetchTodos();
  // }, []);
  const todos = useLoaderData();
  return (
    <div>
      <Form action='.' method='post'>
        {/* action='.' means it posts to itself */}
        <fieldset>
          <legend>Todo</legend>
          <label>
            Title: <input name='title'></input>
          </label>
          <button>Create</button>
        </fieldset>
      </Form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>{todo.title}</li>
        ))}
      </ul>
      <h3>Consider me deployed!</h3>
    </div>
  );
}

export default Todos;
