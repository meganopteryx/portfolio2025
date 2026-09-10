import { ReactNode } from 'react';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
  footer?: ReactNode;
}

const Layout = ({ children, footer }: LayoutProps) => {
  return (
    <div className="app-container">
      {/* modal-root sits inside the layout so portal root is present even for nested routes */}
      <div id="modal-root" />

      <main className="layout-main">
        {children}
      </main>

      {footer && (
        <footer className="layout-footer">
          {footer}
        </footer>
      )}
    </div>
  );
};

export default Layout;