import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Todos from "./routes/Todos";
import TodosNew from "./routes/TodosNew";
import Layout from "./routes/Layout";

// const TodoLoader = () => [1, 2, 3];
const TodoLoader = async () => {
  const res = await fetch("/api/todos/");
  const data = await res.json();
  return data;
}; //! This method allows you to do the fetch in your loader directly in the App.jsx

const TodosLoader = async () => {
  const res = await fetch("/api/todos/");
  const data = await res.json();
  return data;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, loader: TodoLoader, element: <p>Testing</p> }, //if you enter "localhost:5173/"
      { path: "todos", loader: TodosLoader, element: <TodosNew /> }, //if you enter "localhost:5173/todos"
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Todos />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
