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
          <p>Welcome to my portfolio! Here you'll find a selection of my projects, showcasing my skills in design, development, and creativity. Feel free to explore and learn more about each project.</p>
          <div className="project-grid" style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: 16 }}>
            {projects.map((p) => (
              <ProjectCard key={p.slug ?? p.id} project={p} />
            ))}
          </div>
          <p style={{ marginTop: 32, fontStyle: 'italic' }}>Note: This portfolio is a work in progress. More projects and details will be added over time.</p>
          <p>If you'd like to see some of my older work, please visit my archive site at <a href="http://meganopteryx-archive.netlify.app">http://meganopteryx-archive.netlify.app</a>.</p>
        </section> 
      </main>
    </Layout>
  );
};

export default PortfolioPage;
