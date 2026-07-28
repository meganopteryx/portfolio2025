interface ResponsiveImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'eager' | 'lazy';
  style?: React.CSSProperties;
}

export default function ResponsiveImage({
  src,
  alt = '',
  width,
  height,
  className,
  loading = 'lazy',
  style,
}: ResponsiveImageProps) {
  const computedStyle: React.CSSProperties | undefined =
    width || height
      ? {
          ...(width ? { width: `${width}px` } : {}),
          ...(height ? { height: `${height}px` } : {}),
        }
      : undefined;
  const mergedStyle = computedStyle || style ? { ...computedStyle, ...style } : undefined;

  return <img src={src} alt={alt} className={className} loading={loading} style={mergedStyle} />;
}


