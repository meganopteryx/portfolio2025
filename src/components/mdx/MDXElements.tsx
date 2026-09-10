import type { ComponentProps, ComponentPropsWithoutRef } from 'react';
import Callout from './Callout';
import Figure from './Figure';
import ResponsiveImage from './ResponsiveImage';

//This is nested content so we don't need H1 definitions

export const H2 = (props: ComponentPropsWithoutRef<'h2'>) => (
  <h2 {...props} />
);

export const H3 = (props: ComponentPropsWithoutRef<'h3'>) => (
  <h3 {...props} />
);

export const P = (props: ComponentPropsWithoutRef<'p'>) => (
  <p {...props} />
);

export const UL = (props: ComponentPropsWithoutRef<'ul'>) => (
  <ul {...props} />
);

export const OL = (props: ComponentPropsWithoutRef<'ol'>) => (
  <ol {...props} />
);

export const LI = (props: ComponentPropsWithoutRef<'li'>) => (
  <li {...props} />
);

export const IMG = (props: ComponentProps<typeof ResponsiveImage>) => (
  <ResponsiveImage {...props} />
);

export const CODE = (props: ComponentPropsWithoutRef<'code'>) => (
  <code {...props} />
);

export const PRE = (props: ComponentPropsWithoutRef<'pre'>) => (
  <pre {...props} />
);

// Re-export concrete components so the mapping file can import them
export { Callout, Figure, ResponsiveImage };


