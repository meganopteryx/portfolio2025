import type { ComponentProps, ComponentPropsWithoutRef } from 'react';
import Callout from './Callout';
import Figure from './Figure';
import ResponsiveImage from './ResponsiveImage';

export const H1 = (props: ComponentPropsWithoutRef<'h1'>) => (
  <h1 style={{ margin: '1.2em 0 0.4em', lineHeight: 1.25, fontSize: '2rem' }} {...props} />
);

export const H2 = (props: ComponentPropsWithoutRef<'h2'>) => (
  <h2 style={{ margin: '1.2em 0 0.4em', lineHeight: 1.25, fontSize: '1.6rem' }} {...props} />
);

export const H3 = (props: ComponentPropsWithoutRef<'h3'>) => (
  <h3 style={{ margin: '1.2em 0 0.4em', lineHeight: 1.25, fontSize: '1.3rem' }} {...props} />
);

export const P = (props: ComponentPropsWithoutRef<'p'>) => (
  <p style={{ margin: '0.8em 0', lineHeight: 1.7 }} {...props} />
);

export const UL = (props: ComponentPropsWithoutRef<'ul'>) => (
  <ul style={{ margin: '0.8em 0 0.8em 1.2em' }} {...props} />
);

export const OL = (props: ComponentPropsWithoutRef<'ol'>) => (
  <ol style={{ margin: '0.8em 0 0.8em 1.2em' }} {...props} />
);

export const LI = (props: ComponentPropsWithoutRef<'li'>) => (
  <li style={{ margin: '0.3em 0' }} {...props} />
);

export const IMG = (props: ComponentProps<typeof ResponsiveImage>) => (
  <ResponsiveImage {...props} />
);

export const CODE = (props: ComponentPropsWithoutRef<'code'>) => (
  <code
    style={{
      background: 'rgba(0,0,0,0.06)',
      borderRadius: 6,
      padding: '0.15em 0.35em',
      fontFamily:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      fontSize: '0.95em',
    }}
    {...props}
  />
);

export const PRE = (props: ComponentPropsWithoutRef<'pre'>) => (
  <pre
    style={{
      background: '#0d1117',
      color: '#c9d1d9',
      borderRadius: 10,
      padding: '1em',
      overflowX: 'auto',
    }}
    {...props}
  />
);

// Re-export concrete components so the mapping file can import them
export { Callout, Figure, ResponsiveImage };


