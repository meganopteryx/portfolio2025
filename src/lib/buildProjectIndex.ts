import type { Project } from '../content/portfolio/projectlist';

interface CaseStudyFrontmatter {
  title?: string;
  date?: string;
  slug?: string;
  tags?: string[];
  featured?: boolean;
  coverImage?: string;
  summary?: string;
  hideFromIndex?: boolean;
  role?: string;
  tools?: string[];
  gallery?: { source: string; caption?: string }[];
  links?: { live?: string; source?: string };
}

interface MDXModule {
  default: unknown;
  frontmatter?: CaseStudyFrontmatter;
  frontMatter?: CaseStudyFrontmatter;
}

// Eagerly import all case-study MDX files so we can read frontmatter at build time
const modules = import.meta.glob<MDXModule>('../content/case-studies/*.mdx', { eager: true });

/**
 * Map MDX frontmatter to Project shape. Only include MDX entries with a slug.
 */
export function mdxCaseStudiesToProjects(): Project[] {
  const results: Project[] = [];
  for (const [path, mod] of Object.entries(modules)) {
    const fm = (mod.frontmatter ?? mod.frontMatter) as CaseStudyFrontmatter | undefined;
    if (!fm) continue;
    if (!fm.slug) {
      // try to infer slug from filename
      const inferred = path.split('/').pop()?.replace(/\.mdx?$/, '');
      if (inferred) fm.slug = inferred;
    }
  if (!fm.slug || !fm.title) continue;
  if (fm.hideFromIndex) continue; // author requested to hide this case study from portfolio index

    const p: Project = {
      id: Math.abs(hashCode(fm.slug)),
      slug: fm.slug,
      title: fm.title,
      shortDescription: fm.summary ?? undefined,
      description: fm.summary ?? undefined,
      image: fm.coverImage ?? undefined,
      tags: fm.tags ?? undefined,
      date: fm.date ?? undefined,
      role: fm.role ?? undefined,
      technologies: fm.tools ?? undefined,
      gallery: fm.gallery ?? undefined,
      links: fm.links ?? undefined,
    };
    results.push(p);
  }
  return results;
}

// simple hash for stable-ish numeric id from slug
function hashCode(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return h;
}

import { projects as baseProjects } from '../content/portfolio/projectlist';

export function getAllProjects(): Project[] {
  const mdx = mdxCaseStudiesToProjects();
  // Prefer MDX entries when slugs collide. We'll index by slug when available, otherwise id.
  const byKey = new Map<string | number, Project>();

  // first add base projects by id (they may be overwritten by MDX if MDX has the same slug/key)
  for (const p of baseProjects) {
    const key = p.id;
    byKey.set(key, p);
  }

  // then add/overwrite with MDX-derived projects (prefer slug as key)
  for (const p of mdx) {
    const key = (p as Project).slug ?? (p as Project).id;
    byKey.set(key, p);
  }

  // Also ensure any base projects that had a slug (legacy) get preserved unless overwritten by MDX
  for (const p of baseProjects) {
    const key = p.slug ?? null;
    if (key && !byKey.has(key)) byKey.set(key, p);
  }

  return Array.from(byKey.values());
}
