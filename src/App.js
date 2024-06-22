import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import { Routes, Route } from "react-router-dom";
import Signup from './Component.js/Signup';
import Login from './Component.js/Login';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Signup" element={ <Signup/> } />
        <Route path="/Login" element={ <Login/> } />
      </Routes>

    </div>
  );
}

export default App;
