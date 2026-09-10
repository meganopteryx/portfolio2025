import { ReactNode } from 'react';
import './Figure.css';

interface FigureProps {
  children: ReactNode;
  caption?: string;
  credit?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export default function Figure({ children, caption, credit, className = '', align = 'center' }: FigureProps) {
  const classes = ['figure', className].filter(Boolean).join(' ');

  return (
    <figure className={classes} style={{ textAlign: align }}>
      {children}
      {(caption || credit) && (
        <figcaption className="figure-caption">
          {caption && <span>{caption}</span>}
          {caption && credit && <span> </span>}
          {credit && <span className="figure-credit">({credit})</span>}
        </figcaption>
      )}
    </figure>
  );
}
