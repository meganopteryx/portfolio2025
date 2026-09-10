import substackIcon from '../assets/icons/substack.svg';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import './SocialIcons.css';

const links = [
  { name: 'Substack', href: 'https://substack.com/@meganopteryx', icon: substackIcon },
  { name: 'GitHub', href: 'https://github.com/meganopteryx', icon: githubIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/megan-kossa-a0a4351', icon: linkedinIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/meganopteryx/', icon: instagramIcon },
];

export default function SocialIcons() {
  return (
    <div className="socialIcons">
      {links.map((link) => (
        <a
          key={link.name}
          className="socialIcons-link"
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.name}
        >
          <img src={link.icon} alt="" />
        </a>
      ))}
    </div>
  );
}
