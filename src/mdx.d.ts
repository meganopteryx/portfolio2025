declare module "*.mdx" {
  import { ComponentType } from 'react';

  interface MDXFrontmatter {
    title?: string;
    date?: string;
    slug?: string;
    tags?: string[];
    featured?: boolean;
    coverImage?: string;
    summary?: string;
    role?: string;
    tools?: string[];
  }

  interface MDXModule {
    default: ComponentType;
    frontmatter?: MDXFrontmatter;
    frontMatter?: MDXFrontmatter; // Alternative naming convention
  }

  const MDXContent: ComponentType;
  export default MDXContent;
  export const frontmatter: MDXFrontmatter | undefined;
  export const frontMatter: MDXFrontmatter | undefined;
}
