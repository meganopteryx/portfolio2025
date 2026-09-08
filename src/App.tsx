import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import CaseStudyDetail from './pages/case-studies/CaseStudyDetail';
import { HomePage } from './pages/Home';
import AboutPage from './pages/About';
import Portfolio from './pages/Portfolio';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import { useEffect } from 'react';

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
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Layout footer={<Footer />}><AboutPage /></Layout>} />
        <Route path="/case-studies/:slug" element={<Layout footer={<Footer />}><CaseStudyDetail /></Layout>} />
  <Route path="/portfolio" element={<Layout footer={<Footer />}><Portfolio /></Layout>} />
        <Route path="/shop" element={<Layout footer={<Footer />}><Shop /></Layout>} />
        <Route path="/archive/*" element={<ArchiveRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
