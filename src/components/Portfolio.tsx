import { useState } from 'react';
import { getMigratedStyles } from '../utils/styleHelpers';
import '../styles/components/Portfolio.css'; // We'll create this next

interface PortfolioProps {
  useModernStyles?: boolean;
}

export const Portfolio = ({ useModernStyles = false }: PortfolioProps) => {
  const [isModern] = useState(useModernStyles);
  const styleClass = getMigratedStyles(isModern, 'portfolio', 'portfolio');

  return (
    <div className={styleClass}>
      {/* Your portfolio content here */}
      <h1>Portfolio</h1>
      {/* As you migrate content, you can gradually move it here */}
    </div>
  );
}; 