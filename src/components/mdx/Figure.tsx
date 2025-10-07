import { ReactNode } from 'react';

interface FigureProps {
  children: ReactNode;
  caption?: string;
  credit?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
}

export default function Figure({ children, caption, credit, className = '', align = 'center', style }: FigureProps) {
  return (
    <figure
      className={className}
      style={{
        textAlign: align,
        ...style
      }}
    >
      {children}
      {(caption || credit) && (
        <figcaption
          style={{
            marginTop: '0.5rem',
            fontSize: '0.9rem',
            color: '#a9c7ea',
            lineHeight: 1.4,
            fontStyle: 'italic',
          }}
        >
          {caption && <span>{caption}</span>}
          {caption && credit && <span> </span>}
          {credit && <span style={{ color: '#7a9cc4' }}>({credit})</span>}
        </figcaption>
      )}
    </figure>
  );
}
