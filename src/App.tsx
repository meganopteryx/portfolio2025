import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QuickLinksLanding } from './components/LandingPages';
import { useEffect } from 'react';
import './App.css';

function ArchiveRedirect() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname == ('/archive')) {
      window.location.href = '/archive/index.html';
    }
    if (location.pathname == ('/archive/freethebirds')){
      window.location.href = '/archive/freethebirds/index.html';
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuickLinksLanding />} />
        <Route path="/archive/*" element={<ArchiveRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
