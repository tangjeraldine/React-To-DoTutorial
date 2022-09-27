import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Todos from "./routes/Todos";
import TodosNew from "./routes/TodosNew";
import Layout from "./routes/Layout";
import OneTodo from "./routes/OneTodo";

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

const OneTodoLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`/api/todos/${id}`);
  const data = await res.json();
  return data;
};

//* This function posts the data to itself
const PostAction = async ({ request }) => {
  const form = await request.formData();
  console.log(form.get("title"));
  // fetch();
  //!--> This is just an empty fetch function. Here, you add your own fetch method using the normal way (url, post, etc)

  const req = await fetch("/api/todos", { method: "POST" });
  //! this form will post to itself
  const data = await req.json();

  return redirect(`/todos/${data.id}`);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, loader: TodoLoader, element: <p>Testing</p> }, //if you enter "localhost:5173/"
      {
        path: "todos",
        loader: TodosLoader,
        action: PostAction,
        element: <TodosNew />,
      }, //if you enter "localhost:5173/todos"
      {
        path: "todos/:id",
        loader: OneTodoLoader,
        element: <OneTodo />,
      },
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
