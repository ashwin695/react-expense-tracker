import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Page/Home";
import SignUp from "./Page/SignUp";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<SignUp />} path="/signup"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
