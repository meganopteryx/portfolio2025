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
  /* Painted behind the image, for transparent PNGs — same idea as HomeCard's bgColor. */
  bgColor?: string;
  /* 'contain' letterboxes instead of cropping — for logos/artwork that shouldn't lose edges. */
  fit?: 'cover' | 'contain';
}

export default function ShopCard({ title, description, image, size, href, cta, bgColor, fit }: ShopCardProps) {
  const body = (
    <>
      <img
        src={image}
        alt=""
        className="shopCard-image"
        style={{
          ...(bgColor ? { backgroundColor: bgColor } : {}),
          ...(fit ? { objectFit: fit } : {}),
        }}
      />
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
