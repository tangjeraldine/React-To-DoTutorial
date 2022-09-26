import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Todos from "./routes/Todos";
import TodosNew from "./routes/TodosNew";

// const TodoLoader = () => [1, 2, 3];
const TodoLoader = async () => {
  const res = await fetch("/api/todos/");
  const data = await res.json();
  return data;
}; //! This method allows you to do the fetch in your loader directly in the App.jsx

const router = createBrowserRouter([
  { path: "/", loader: TodoLoader, element: <TodosNew /> },
]);

const router2 = createBrowserRouter([
  { path: "/", loader: TodoLoader, element: <TodosNew /> },
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
