import { Route, Routes, BrowserRouter } from "react-router-dom";
import Add from "./components/Add";
import Books from "./components/Books";
import Update from "./components/Update";
import "./app.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
