import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "./routes/Todos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
