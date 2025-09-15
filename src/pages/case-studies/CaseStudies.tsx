import type { ComponentType } from 'react';

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
  frontMatter?: CaseStudyFrontmatter; // some MDX toolchains use this key
}

const modules = import.meta.glob<MDXModule>('../../content/case-studies/*.mdx', { eager: true });

type CaseStudyListItem = Required<Pick<CaseStudyFrontmatter, 'title' | 'summary' | 'date' | 'coverImage'>> & {
  slug: string;
} | { slug: string } & CaseStudyFrontmatter;

const items: CaseStudyListItem[] = Object.entries(modules)
  .map(([path, mod]) => {
    const fm: CaseStudyFrontmatter = mod.frontmatter ?? mod.frontMatter ?? {};
    const slug = fm.slug ?? path.split('/').pop()!.replace('.mdx', '');
    return { slug, ...fm };
  })
  .sort((a, b) => ((a.date ?? '') > (b.date ?? '') ? -1 : 1));

export default function CaseStudies() {
  return (
    <div className="pageWidthLimiter">
      <h1>Case Studies</h1>
      <div className="caseGrid">
        {items.map((cs: CaseStudyListItem) => (
          <a key={cs.slug} href={`/case-studies/${cs.slug}`} className="caseCard">
            {'coverImage' in cs && cs.coverImage && <img src={cs.coverImage} alt={('title' in cs && cs.title) ? cs.title! : ''} />}
            <h2>{('title' in cs && cs.title) ? cs.title! : cs.slug}</h2>
            {'summary' in cs && cs.summary && <p>{cs.summary}</p>}
          </a>
        ))}
      </div>
    </div>
  );
}


