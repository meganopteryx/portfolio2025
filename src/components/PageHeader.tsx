import { Link } from 'react-router-dom';
import { MeganopteryxLogo } from './MeganopteryxLogo';
import SectionNav from './SectionNav';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="pageHeader">
      <div className="pageHeader-top">
        <Link to="/" className="pageHeader-logo" aria-label="Meganopteryx Design — Home">
          <div className="pageHeader-glyph"><MeganopteryxLogo /></div>
          <p className="pageHeader-logoText">Meganopteryx Design</p>
        </Link>
        <SectionNav />
      </div>
      <h1>{title}</h1>
    </div>
  );
}
