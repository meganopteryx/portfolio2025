import { useMemo, useState } from 'react';
import { getAllProjects } from '../lib/buildProjectIndex';
import PortfolioCard from '../components/PortfolioCard';
import PageHeader from '../components/PageHeader';
import Tag from '../components/Tag';
import Button from '../components/Button';
import './Portfolio.css';

// Wrapped in <Layout> by its route in App.tsx, matching Shop/About.
function PortfolioPage() {
  const projects = useMemo(() => getAllProjects(), []);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags?.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [projects]);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag]
    );
  };

  const visibleProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((p) => p.tags?.some((t) => selectedTags.includes(t)));

  return (
    <div className="pageWidthLimiter portfolioPage">
      <PageHeader title="Portfolio" />

      <div className="portfolioPage-filters">
        <p className="portfolioPage-filterHint">Click the tags to filter</p>
        <div className="portfolioPage-tagRow">
          {allTags.map((tag) => (
            <Tag key={tag} selected={selectedTags.includes(tag)} onClick={() => toggleTag(tag)}>
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
        Note: This portfolio is a work in progress. More projects and details will be added over time.
      </p>
      <p>
        If you'd like to see some of my older work, please visit my archive site at{' '}
        <a href="http://meganopteryx-archive.netlify.app">http://meganopteryx-archive.netlify.app</a>.
      </p>
    </div>
  );
}

export default PortfolioPage;
