import { Link } from 'react-router-dom';
import './HomeCard.css';

interface HomeCardProps {
  title: string;
  to: string;
  image: string;
  bgColor?: string;
}

export default function HomeCard({ title, to, image, bgColor }: HomeCardProps) {
  return (
    <Link
      to={to}
      className="homeCard"
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <img src={image} alt="" className="homeCard-image" />
      <span className="homeCard-scrim" aria-hidden="true" />
      <span className="homeCard-title">{title}</span>
    </Link>
  );
}
