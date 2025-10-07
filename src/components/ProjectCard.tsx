import React from 'react';
import type { Project } from '../content/portfolio/projectlist';
import useModal from '../hooks/useModal';
import ProjectPreviewModal from './ProjectPreviewModal';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { openModal } = useModal();

  return (
    <div className="project-card-wrap">
      <button
        className="project-card"
        onClick={() => openModal(<ProjectPreviewModal project={project} />)}
        aria-label={`Open ${project.title}`}
      >
        {project.image && <img src={project.image} alt={project.title} className="project-thumb" />}
        <div className="project-meta">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
        </div>
      </button>
    </div>
  );
};

export default ProjectCard;
