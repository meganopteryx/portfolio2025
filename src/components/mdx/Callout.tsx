import { ReactNode } from 'react';

type CalloutVariant = 'quote' | 'tip' | 'summary';

interface CalloutProps {
  children: ReactNode;
  variant?: CalloutVariant;
  title?: string; // for tip/summary
  author?: string; // for quote
  source?: string; // for quote
  align?: 'left' | 'center' | 'right';
}

export default function Callout({ children, variant = 'quote', title, author, source, align = 'left' }: CalloutProps) {
  if (variant === 'quote') {
    return (
      <figure
        style={{
          margin: '1rem 0',
          padding: '1rem 1.25rem',
          background: '#142437',
          borderLeft: '6px solid #3975aa',
          borderRadius: '8px',
        }}
      >
        <blockquote
          style={{
            margin: 0,
            color: '#eaf2fb',
            fontStyle: 'italic',
            lineHeight: 1.7,
            textAlign: align,
          }}
        >
          {children}
        </blockquote>
        {(author || source) && (
          <figcaption
            style={{
              marginTop: '.6rem',
              color: '#a9c7ea',
              fontSize: '.9rem',
              textAlign: align,
            }}
          >
            {author && <span>— {author}</span>}
            {author && source && <span> · </span>}
            {source && <span>{source}</span>}
          </figcaption>
        )}
      </figure>
    );
  }

  // tip / summary style
  const accent = variant === 'tip' ? '#1a7f3c' : '#2c6495';
  const bg = variant === 'tip' ? '#0f2a1a' : '#142437';

  return (
    <div
      style={{
        margin: '1rem 0',
        padding: '0.9rem 1.1rem',
        background: bg,
        borderLeft: `6px solid ${accent}`,
        borderRadius: '8px',
        color: '#eaf2fb',
      }}
    >
      {title && (
        <div style={{ fontWeight: 700, color: accent, marginBottom: '0.4rem' }}>{title}</div>
      )}
      <div style={{ lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}


