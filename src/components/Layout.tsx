import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import bulletArrow from '../assets/bullet-arrow.svg';

interface LayoutProps {
  children: ReactNode;
  showNav?: boolean;
  footer?: ReactNode;
}

const Layout = ({ children, showNav = true, footer }: LayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="app-container" style={{ width: '100%', minHeight: '100vh', margin: 0, padding: 0 }}>
      {/* modal-root sits inside the layout so portal root is present even for nested routes */}
      <div id="modal-root" />

{/* NO this should not be hardcoded here
TODO: make this a component 
This is awful and should not have been done*/}
      {showNav && (
        <>
          <button
            onClick={() => navigate('/')}
            style={{
              position: 'fixed',
              top: '20px',
              left: '20px',
              zIndex: 1000,
              padding: '8px 16px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <img src={bulletArrow} alt="" style={{ transform: 'rotate(180deg)', width: '16px', height: '16px' }} />
            Home
          </button>
        </>
      )}

      <main style={{ width: '100%', margin: 0, padding: 0 }}>
        {children}
      </main>

      <footer>
        {footer}
      </footer>
    </div>
  );
};

export default Layout;