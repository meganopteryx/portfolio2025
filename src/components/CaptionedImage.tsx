import './CaptionedImage.css';

interface CaptionedImageProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}

export default function CaptionedImage({ src, alt, caption, className }: CaptionedImageProps) {
  const classes = ['captionedImage', className].filter(Boolean).join(' ');

  return (
    <figure className={classes}>
      <img className="captionedImage-img" src={src} alt={alt} />
      <figcaption className="captionedImage-caption">{caption}</figcaption>
    </figure>
  );
}
