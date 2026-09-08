import { useMemo, useState } from 'react';
import { getAllProjects } from '../lib/buildProjectIndex';
import PortfolioCard from '../components/PortfolioCard';
import PageHeader from '../components/PageHeader';
import Tag from '../components/Tag';
import Button from '../components/Button';
import './Portfolio.css';

// Wrapped in <Layout> by its route in App.tsx
function PortfolioPage() {
  const projects = useMemo(() => getAllProjects(), []);

  // This is to handle tags set in lowercase by accident
  const allTags = useMemo(() => {
    const byKey = new Map<string, string>();
    projects.forEach((p) =>
      p.tags?.forEach((t) => {
        const key = t.toLowerCase();
        if (!byKey.has(key)) byKey.set(key, t);
      })
    );
    return Array.from(byKey.values()).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  // Holds lowercase keys, not display strings.
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    const key = tag.toLowerCase();
    setSelectedTags((current) =>
      current.includes(key) ? current.filter((t) => t !== key) : [...current, key]
    );
  };

  const visibleProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((p) => p.tags?.some((t) => selectedTags.includes(t.toLowerCase())));

  return (
    <div className="portfolioPage">
      <PageHeader title="Portfolio" />

      <div className="portfolioPage-filters">
        <p className="portfolioPage-filterHint">Click the tags to filter</p>
        <div className="portfolioPage-tagRow">
          {allTags.map((tag) => (
            <Tag
              key={tag}
              selected={selectedTags.includes(tag.toLowerCase())}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Tag>
          ))}
        </div>
        {selectedTags.length > 0 && (
          <Button className="portfolioPage-clearAll" variant="ghost" onClick={() => setSelectedTags([])}>
            Clear all
          </Button>
        )}
      </div>

      <div className="portfolioPage-grid">
        {visibleProjects.map((project) => (
          <PortfolioCard key={project.slug ?? project.id} project={project} />
        ))}
      </div>

      <p className="portfolioPage-note">
        Note: More projects coming soon! Still working through my backlog.
      </p>
      <p>
        If you'd like to see some of my older work, please visit my archive site at{' '}
        <a href="http://meganopteryx-archive.netlify.app">http://meganopteryx-archive.netlify.app</a>.
      </p>
    </div>
  );
}

export default PortfolioPage;
