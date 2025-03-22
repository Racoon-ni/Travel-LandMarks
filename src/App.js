import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
