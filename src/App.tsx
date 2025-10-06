import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { QuickLinksLanding } from './components/LandingPages';
import Layout from './components/Layout';
import CaseStudies from './pages/case-studies/CaseStudies';
import CaseStudyDetail from './pages/case-studies/CaseStudyDetail';
import { HomePage } from './pages/Home';
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
        {/* <Route path="/" element={<QuickLinksLanding />} />  */}
        {/* TODO: switch path / to use Homepage instead */}
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies" element={<Layout><CaseStudies /></Layout>} />
        <Route path="/case-studies/:slug" element={<Layout><CaseStudyDetail /></Layout>} />
        <Route path="/archive/*" element={<ArchiveRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
