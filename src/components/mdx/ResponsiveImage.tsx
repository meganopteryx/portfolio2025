interface ResponsiveImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  generateSrcSet?: boolean;
  style?: React.CSSProperties;
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
  generateSrcSet = false,
  style,
}: ResponsiveImageProps) {
  // Assume images are provided at 640, 1024, 1600 widths with naming convention filename@{w}.ext
  // e.g., cover.png, cover@640.png, cover@1024.png, cover@1600.png
  let srcSet: string | undefined;
  if (generateSrcSet) {
    const dotIndex = src.lastIndexOf('.');
    const base = dotIndex > -1 ? src.slice(0, dotIndex) : src;
    const ext = dotIndex > -1 ? src.slice(dotIndex) : '';

    srcSet = [640, 1024, 1600]
      .map((w) => `${base}@${w}${ext} ${w}w`)
      .join(', ');
  }
  const computedStyle: React.CSSProperties | undefined =
    width || height
      ? {
          ...(width ? { width: `${width}px` } : {}),
          ...(height ? { height: `${height}px` } : {}),
        }
      : undefined;
  const mergedStyle = computedStyle || style ? { ...computedStyle, ...style } : undefined;

  return (
    <img
      src={src}
      {...(srcSet ? { srcSet, sizes } : {})}
      alt={alt}
      className={className}
      loading={loading}
      style={mergedStyle}
    />
  );
}


