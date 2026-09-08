import Button from './Button';
import SocialIcons from './SocialIcons';
import useModal from '../hooks/useModal';
import ContactModal from './modals/ContactModal';
import './Footer.css';

export default function Footer() {
  const { openModal } = useModal();

  return (
    <div className="siteFooter">
      <p className="siteFooter-copyright">Content and site design © Megan Kossa 2026</p>
      <Button variant="secondary" className="siteFooter-button" onClick={() => openModal(<ContactModal />)}>
        Contact me
      </Button>
      <SocialIcons />
    </div>
  );
}
