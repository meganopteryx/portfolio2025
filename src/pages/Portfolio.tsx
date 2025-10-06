import React from 'react';
import { getAllProjects } from '../lib/buildProjectIndex';
import ProjectCard from '../components/ProjectCard';
import Layout from '../components/Layout';
import '../styles/portfolio.css';

const PortfolioPage: React.FC = () => {
  const projects = getAllProjects();

  return (
    <Layout>
      <main>
        <section style={{ padding: '32px', maxWidth: 1200, margin: '0 auto' }}>
          <h1>Portfolio</h1>

          <h2 style={{ marginTop: 24 }}>Featured Case Studies</h2>
          <div className="project-grid" style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: 16 }}>
            {projects.slice(0, 6).map((p) => (
              <ProjectCard key={p.slug ?? p.id} project={p} />
            ))}
          </div>

          <h2 style={{ marginTop: 40 }}>All Projects</h2>
          <div className="project-grid" style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: 16 }}>
            {projects.map((p) => (
              <ProjectCard key={p.slug ?? p.id} project={p} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default PortfolioPage;
