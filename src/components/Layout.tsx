import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import bulletArrow from '../assets/bullet-arrow.svg';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="app-container" style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <button 
        onClick={() => navigate('/')}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          padding: '8px 16px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <img src={bulletArrow} alt="" style={{ transform: 'rotate(180deg)', width: '16px', height: '16px' }} />
        Home
      </button>
      <button 
        onClick={() => navigate(-1)}
        style={{
          position: 'fixed',
          top: '68px',
          left: '20px',
          zIndex: 1000,
          padding: '8px 16px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <img src={bulletArrow} alt="" style={{ transform: 'rotate(180deg)', width: '16px', height: '16px' }} />
        Back
      </button>
      <main style={{ width: '100%', height: '100%', margin: 0, padding: 0 }}>
        {children}
      </main>
      <footer>
        {/* Your footer content will go here */}
      </footer>
    </div>
  );
};

export default Layout; 