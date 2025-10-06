import React from 'react';

const AboutModal: React.FC = () => {
  return (
    <div className="modal-body">
        <h2 className="modal-title">About Me</h2>
        <p className="blurb">I'm a full-stack developer with deep front-end expertise actively pursuing product designer roles. My unique background spans user experience, visual design, and technical implementation, giving me a rare understanding of what's possible and practical in digital products.</p>
        <p>My design philosophy centers on making complex ideas accessible and beautiful. Whether I'm crafting user interfaces or handcrafting art pieces that transform fear of insects into fascination, I focus on bridging gaps: between users and technology, between form and function.</p>
        <p>My artistic practice in resin casting and jewelry design has sharpened my eye for detail, color theory, and user psychology. This hands-on creative work translates directly into stronger visual design skills and deeper empathy for crafting experiences that truly resonate with people.</p>
        <p className='italic'>Currently seeking full-time product design opportunities. Available for contract development work and custom art commissions.</p>
    
        {/* TODO: add download resume link */}
    </div>
  );
}

export default AboutModal;
