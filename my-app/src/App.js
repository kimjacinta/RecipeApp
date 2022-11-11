
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TheNavbar from './components/TheNavbar';
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    
    <TheNavbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
