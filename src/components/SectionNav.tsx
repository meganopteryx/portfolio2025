import { Link, useLocation } from 'react-router-dom';
import './SectionNav.css';

/* Note: Case studies are reached from Portfolio (see PortfolioCard), not their own top-level section, 
* so /case-studies/* counts as "within" Portfolio for highlighting purposes. 
*/
const SECTIONS = [
  { to: '/', label: 'Home', isWithin: (p: string) => p === '/' },
  { to: '/portfolio', label: 'Portfolio', isWithin: (p: string) => p.startsWith('/portfolio') || p.startsWith('/case-studies') },
  { to: '/about', label: 'About', isWithin: (p: string) => p.startsWith('/about') },
  { to: '/shop', label: 'Shop', isWithin: (p: string) => p.startsWith('/shop') },
];

export default function SectionNav() {
  const { pathname } = useLocation();

  return (
    <nav className="sectionNav" aria-label="Site sections">
      {SECTIONS.map((s) => {
        const within = s.isWithin(pathname);

        return (
          <Link
            key={s.to}
            to={s.to}
            aria-current={within ? 'page' : undefined}
            className={within ? 'sectionNav-link sectionNav-link-active' : 'sectionNav-link'}
          >
            {s.label}
          </Link>
        );
      })}
    </nav>
  );
}
