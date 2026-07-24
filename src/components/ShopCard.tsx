import Button from './Button';
import './ShopCard.css';

interface ShopCardCta {
  label: string;
  href: string;
}

interface ShopCardProps {
  title: string;
  description: string;
  image: string;
  size: 'hero' | 'grid';
  href?: string;
  cta?: ShopCardCta;
}

export default function ShopCard({ title, description, image, size, href, cta }: ShopCardProps) {
  const body = (
    <>
      <img src={image} alt="" className="shopCard-image" />
      <div className="shopCard-body">
        <p className="shopCard-title">{title}</p>
        <p className="shopCard-description">{description}</p>
        {cta && (
          <Button variant="primary" href={cta.href}>
            {cta.label}
          </Button>
        )}
      </div>
    </>
  );

  const className = `shopCard shopCard-${size}`;

  // Hero card has its own actionable button, so the card itself must not also
  // be a link — nesting a button inside an anchor is an accessibility anti-pattern.
  if (cta) {
    return <div className={className}>{body}</div>;
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {body}
    </a>
  );
}
