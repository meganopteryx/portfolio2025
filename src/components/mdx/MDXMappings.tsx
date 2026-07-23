import { H2, H3, P, UL, OL, LI, IMG, CODE, PRE, Callout, Figure, ResponsiveImage } from './MDXElements';
 

export const mdxComponents: Record<string, unknown> = {
  h1: H2, //bump down because this is nested content
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  img: IMG,
  code: CODE,
  pre: PRE,
  Callout,
  Figure,
  ResponsiveImage,
};


