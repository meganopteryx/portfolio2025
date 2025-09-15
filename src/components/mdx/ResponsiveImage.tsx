interface ResponsiveImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
}

// Simple responsive image using srcset with common breakpoints
export default function ResponsiveImage({
  src,
  alt = '',
  width,
  height,
  sizes = '(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 1100px',
  className,
  loading = 'lazy',
}: ResponsiveImageProps) {
  // Assume images are provided at 640, 1024, 1600 widths with naming convention filename@{w}.ext
  // e.g., cover.png, cover@640.png, cover@1024.png, cover@1600.png
  const dotIndex = src.lastIndexOf('.');
  const base = dotIndex > -1 ? src.slice(0, dotIndex) : src;
  const ext = dotIndex > -1 ? src.slice(dotIndex) : '';

  const srcSet = [640, 1024, 1600]
    .map((w) => `${base}@${w}${ext} ${w}w`)
    .join(', ');

  const style: React.CSSProperties = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
    display: 'block',
  };

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      style={style}
    />
  );
}


