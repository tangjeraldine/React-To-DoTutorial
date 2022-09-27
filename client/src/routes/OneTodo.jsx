import { useLoaderData } from "react-router-dom";

function OneTodo() {
  const todo = useLoaderData();
  return (
    <div>
      <h2>HELLO THIS IS {todo.title}</h2>
    </div>
  );
}

export default OneTodo;
