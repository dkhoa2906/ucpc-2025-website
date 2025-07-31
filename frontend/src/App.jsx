import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import User from './pages/User/User'
import './App.css'
import "@fontsource/inter"; 
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
    return (
    <div className="App">
      <ToastContainer position="bottom-left" autoClose={2000} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        
      </Routes>
      </div>
    );
}

export default App  