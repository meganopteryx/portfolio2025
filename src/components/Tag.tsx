import type { ReactNode } from 'react';
import './Tag.css';

interface TagProps {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

// Filter toggle when onClick is passed; plain read-only pill (in-card display) otherwise.
export default function Tag({ children, selected = false, onClick }: TagProps) {
  const classes = `tag ${selected ? 'tag-selected' : 'tag-unselected'}`;

  if (onClick) {
    return (
      <button type="button" className={classes} onClick={onClick} aria-pressed={selected}>
        {children}
      </button>
    );
  }

  return <span className={classes}>{children}</span>;
}
