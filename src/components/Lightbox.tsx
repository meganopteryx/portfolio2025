import { useState } from 'react';
import type { Project } from '../content/portfolio/projectlist';
import './Lightbox.css';

interface LightboxProps {
  project: Project;
}

export default function Lightbox({ project }: LightboxProps) {
  const images = project.gallery ?? [];
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const current = images[index];
  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="modal-body lightbox">
      <div className="lightbox-header">
        <h2 className="lightbox-title">{project.title}</h2>
        {(project.fullDescription ?? project.description) && (
          <p className="lightbox-description">{project.fullDescription ?? project.description}</p>
        )}
      </div>

      <div className="lightbox-viewer">
        {images.length > 1 && (
          <button
            type="button"
            className="lightbox-nav lightbox-nav-prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            ‹
          </button>
        )}
        <img
          className="lightbox-image"
          src={current.source}
          alt={current.caption ?? `${project.title} image ${index + 1}`}
        />
        {images.length > 1 && (
          <button
            type="button"
            className="lightbox-nav lightbox-nav-next"
            onClick={goNext}
            aria-label="Next image"
          >
            ›
          </button>
        )}
      </div>

      {current.caption && <p className="lightbox-caption">{current.caption}</p>}
      {images.length > 1 && (
        <p className="lightbox-counter">
          {index + 1} / {images.length}
        </p>
      )}
    </div>
  );
}
