import { Link } from 'react-router-dom';
import type { Project } from '../content/portfolio/projectlist';
import Tag from './Tag';
import GalleryIcon from './icons/GalleryIcon';
import WriteupIcon from './icons/WriteupIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import useModal from './modal/useModal';
import Lightbox from './Lightbox';
import './PortfolioCard.css';

interface PortfolioCardProps {
  project: Project;
}

const interactionCopy = {
  gallery: { label: 'View gallery', Icon: GalleryIcon },
  'case-study': { label: 'Read case study', Icon: WriteupIcon },
  external: { label: 'Visit project', Icon: ExternalLinkIcon },
} as const;

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const { openModal } = useModal();
  const { label, Icon } = interactionCopy[project.displayType];

  const body = (
    <>
      {project.image && <img src={project.image} alt="" className="portfolioCard-image" />}
      <div className="portfolioCard-body">
        <h3 className="portfolioCard-title">{project.title}</h3>
        {project.description && <p className="portfolioCard-description">{project.description}</p>}
        {project.tags && project.tags.length > 0 && (
          <div className="portfolioCard-tags">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
        <div className="portfolioCard-interaction">
          <Icon />
          <span>{label}</span>
        </div>
      </div>
    </>
  );

  if (project.displayType === 'gallery') {
    return (
      <button
        type="button"
        className="portfolioCard"
        onClick={() => openModal(<Lightbox project={project} />)}
      >
        {body}
      </button>
    );
  }

  if (project.displayType === 'external') {
    return (
      <a className="portfolioCard" href={project.links?.live} target="_blank" rel="noreferrer">
        {body}
      </a>
    );
  }

  return (
    <Link className="portfolioCard" to={`/case-studies/${project.slug}`}>
      {body}
    </Link>
  );
}
