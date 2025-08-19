import './App.css';
import { Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
         <Route path="/Home" element={<Home />} />
    </Routes>
  );
}

export default App;
