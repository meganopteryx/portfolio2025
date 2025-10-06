import React from 'react';
import type { Project } from '../content/portfolio/index';
import useModal from '../hooks/useModal';

const ProjectPreviewModal: React.FC<{ project: Project }> = ({ project }) => {
  const { closeModal } = useModal();

//    TODO: FIX ICONS
    //lucide.createIcons();

  return (
    <div className="modal-body">
        <div className="modal-header">
      <div className="modal-header-image">
        {project.image && <img src={project.image} alt={project.title} />}
      </div>
        <div className="modal-header-content">
          <h1 className="modal-title">{project.title}</h1>
          <p className="modal-subtitle">{project.description}</p>
        </div>
      </div>

      {/* Modal content grid */}
      <div className="modal-content-grid">
        <div className="project-overview">
            <h3><i data-lucide="tag"></i>Project Overview</h3>
            <p className="project-description">{project.shortDescription ?? project.description}</p>
        
            {project.challenges ? (
                <div className="project-section">
                    <h4>Key Challenges</h4>
                    <ul className="project-list">
                        {project.challenges.map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                        ))}
                    </ul>
                </div>
            ) : null}

            {project.solutions ? (
                <div className="project-section">
                    <h4>Solutions &amp; Approach</h4>
                    <ul className="project-list">
                        {project.solutions.map((solution, index) => (
                            <li key={index}>{solution}</li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    </div>
    <div className="project-sidebar">
        <div className="project-info-card">
            <h4>Project Details</h4>
            
            {project.duration ? (
            <div className="project-detail">
                <i data-lucide="clock"></i>
                <span>Duration: {project.duration}</span>
            </div>) : null}

            {project.date ? (<div className="project-detail">
                <i data-lucide="calendar"></i>
                <span>Completed: {project.date}</span>
            </div>) : null}

            {project.role ? (<div className="project-detail">
                <i data-lucide="user"></i>
                <span>Role: {project.role}</span>
            </div>) : null}
        </div>
        {project.technologies && project.technologies.length > 0 ? (
        <div className="project-info-card">
            <h4>Technologies</h4>
            <div className="tech-tags">
                {project.technologies.map((tech) => <span className="tech-tag">{tech}</span>)}
            </div>
        </div>) : null}
        <div className="modal-actions">
            {project.links?.live ? (
                <a href="{project.links.live}" className="modal-btn modal-btn-primary" target="_blank" rel="noreferrer">
                    <i data-lucide="external-link"></i>
                    View Live Project
                </a>
            ) : null}
            {project.links?.source ? (
                <a href="{project.links.source}" className="modal-btn modal-btn-outline" target="_blank" rel="noreferrer">
                    <i data-lucide="github"></i>
                    View Source Code
                </a>
            ) : null}
            {/* Not sure this is entirely consistent. Maybe include the slug as a project.links */}
            {project.slug ? (
                <a href={`/case-studies/${project.slug}`} className="modal-btn modal-btn-primary" onClick={() => closeModal()}
                >
                    <i data-lucide="book-open"></i>
                    Read full case study
                </a>
            ) : null}
        </div>
        {project.gallery && project.gallery.length > 0 ? (
        <div className="modal-gallery">
            <h3>Project Gallery</h3>
            <div className="gallery-grid">
                {project.gallery.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image.source} alt={image.caption ?? `Gallery image ${index + 1}`} />
                        {image.caption && <p className="gallery-caption">{image.caption}</p>}
                    </div>
                ))}
            </div>
        </div>
        ) : null}
      

          <button className="modal-btn modal-btn-outline" onClick={() => closeModal()}>
            Close
          </button>
        </div>
      </div>
  );
};

export default ProjectPreviewModal;
