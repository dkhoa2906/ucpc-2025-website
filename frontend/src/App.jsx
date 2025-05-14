import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import User from './pages/User/User'
import './App.css'
import "@fontsource/inter"; 
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    );
}

export default App  