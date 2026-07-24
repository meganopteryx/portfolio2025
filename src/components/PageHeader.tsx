import { MeganopteryxLogo } from './MeganopteryxLogo';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="pageHeader">
      <div className="pageHeader-logo">
        <div className="pageHeader-glyph"><MeganopteryxLogo /></div>
        <p className="pageHeader-logoText">Meganopteryx Design</p>
      </div>
      <h1>{title}</h1>
    </div>
  );
}
