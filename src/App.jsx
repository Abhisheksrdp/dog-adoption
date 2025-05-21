import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Page1 from './components/page1'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/adopt" element={<Page1 />} /> 
      </Routes>
    </Router>
  );
}

export default App;
