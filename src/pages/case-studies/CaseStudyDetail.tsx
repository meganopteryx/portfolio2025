import { useParams } from 'react-router-dom';
import { mdxComponents } from '../../components/mdx/MDXMappings';
import type { ComponentType, ReactElement } from 'react';

interface CaseStudyFrontmatter {
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
  frontmatter?: CaseStudyFrontmatter;
  frontMatter?: CaseStudyFrontmatter;
}

const modules = import.meta.glob<MDXModule>('../../content/case-studies/*.mdx', { eager: true });

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const values = Object.values(modules);
  const entry = values.find((m) => ((m.frontmatter?.slug ?? m.frontMatter?.slug) === slug))
    ?? Object.entries(modules).find(([p]) => p.endsWith(`${slug}.mdx`))?.[1];

  if (!entry) return <div className="pageWidthLimiter"><h1>Not found</h1></div>;

  const { default: MDXContent } = entry;
  const frontmatter = entry.frontmatter ?? entry.frontMatter;
  type MDXContentType = (props: { components?: Record<string, unknown> }) => ReactElement;
  const Content = MDXContent as unknown as MDXContentType;

  return (
    <div className="pageWidthLimiter">
      <header className="caseHero">
        {frontmatter?.coverImage && <img src={frontmatter.coverImage} alt={frontmatter.title} />}
        <h1>{frontmatter?.title}</h1>
        {frontmatter?.summary && <p className="summary">{frontmatter.summary}</p>}
      </header>
      <article className="caseBody">
        <Content components={mdxComponents} />
      </article>
    </div>
  );
}


