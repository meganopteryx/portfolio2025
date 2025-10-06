import React from 'react';

const ContactModal: React.FC = () => {
  return (
    <div className="modal-body" style={{ maxWidth: 420, paddingBottom: '1rem' }}>
        <h2 className="modal-title">Talk to me!</h2>
        <p>I'd love to hear from you! I'm most active on Discord these days but I try to check my email fairly often.</p>
            {/* TODO: Put the appropriate social icons here */}
            <ul>
                <li><a href="https://www.instagram.com/meganopteryx/">Instagram</a></li>
                <li><a href="https://github.com/meganopteryx">Github</a></li>
                <li><a href="https://www.inaturalist.org/people/meganopteryx">iNaturalist</a></li>
                <li><a href="https://bsky.app/profile/meganopteryx.bsky.social">Bluesky</a></li>
                <li><a href="https://www.twitch.tv/meganopteryx">Twitch (for the occasional stream)</a></li>
                <li><a href="https://www.linkedin.com/in/megan-kossa-a0a4351">LinkedIn</a></li>
                <li>Discord @Meganopteryx</li>
                <li><a href="mailto:meganopteryx+website@gmail.com">Email</a></li>
            </ul>
    </div>
  );
}

export default ContactModal;
