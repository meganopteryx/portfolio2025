// Loader that uses Vite's import.meta.glob to lazy-load MDX case study pages by slug.
// Returns the default export React component (if any) or null.

const modules: Record<string, () => Promise<unknown>> = import.meta.glob('../content/case-studies/*.mdx');

export async function loadProjectMDXBySlug(slug: string) {
  const key = Object.keys(modules).find((k) => k.includes(`/${slug}.mdx`));
  if (!key) return null;
  const mod = await modules[key]();
  // mod may be unknown; inspect as a record and pull `default` if present
  const m = mod as Record<string, unknown> | null;
  const maybeDefault = m && 'default' in m ? (m['default'] as unknown) : null;
  return (maybeDefault as React.ComponentType<Record<string, unknown>> | null) ?? null;
}
