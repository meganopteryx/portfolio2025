export type Project = {
  id: number;
  slug?: string;
  title: string;
  description?: string;
  shortDescription?: string;
  fullDescription?: string;
  image?: string;
  tags?: string[];
  category?: string;
  duration?: string;
  date?: string;
  role?: string;
  technologies?: string[];
  challenges?: string[];
  solutions?: string[];
  gallery?: { source: string; caption?: string }[];
  links?: { live?: string; source?: string };
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Amethyst Scarab Necklace',
    description: 'Egyptian-themed costume jewelry piece',
    shortDescription:
      'A piece of commissioned costume jewelry including a real scarab, themed around the mythical scarab of ancient Egyptian fame.',
    fullDescription:
      'This piece was commissioned by a client who wanted a unique piece of jewelry for a special event. The design was inspired by the ancient Egyptian scarab, symbolizing transformation and protection. I sourced a real scarab specimen, carefully preserved and mounted it in resin to create the pendant. Amethyst was chosen as the primary gemstone, representing healing and tranquility, but to reduce cost I decided to make a resin-cast version, which also allowed more control over the final result. Another cost-saving measure was to use polymer clay for the rest of the design instead of metalwork, additionally reducing the finished weight of the piece. The client was thrilled with the final product, which was both visually striking and rich in symbolism.',
    image: '/portfolio/amethyst-scarab/cover.webp',
    tags: ['Art', 'Jewelry', 'Resin', 'Sculpture'],
    category: 'artwork',
    duration: '3 months',
    date: 'September 2025',
    role: 'Product Designer, Artist',
    technologies: ['Epoxy Resin', 'Polymer Clay', 'Insect Pinning'],
    challenges: [
      'Posing and resin casting the real scarab without damaging it',
      'Designing a piece that balanced aesthetics, weight, and cost',
      'Making the piece large and impressive while still preserving the flexibility of a necklace',
      'Ensuring the polymer clay would hold up to wear and tear over time'
    ],
    solutions: [
      'Collaborated in multiple design sessions with the client in order to solidify each step of the design',
      'Tested resin casting techniques on smaller specimens before working on the final piece',
      'Made a back-up resin cast of a different species of scarab, just in case',
      'Researched polymer clay forming and curing techniques to ensure durability',
      'Tested the final piece for comfort and wearability before delivering to the client'
    ],
    gallery: [
      // { source: '', caption: 'Initial sketches, created during the first client meeting' },
      { source: '/portfolio/amethyst-scarab/amethyst-scarab-final.webp', caption: 'The finished piece' },
      { source: '/portfolio/amethyst-scarab/earrings.webp', caption: 'Additional themed earrings created as an add-on product' },
      { source: '/portfolio/amethyst-scarab/scarab-posed.webp', caption: 'The posed scarab. My only specimen of this species!' },
      // { source: '', caption: 'Multiple resin "amethyst" options. Spares could be used elsewhere.' },
      { source: '/portfolio/amethyst-scarab/workspace.webp', caption: 'The workspace where the magic happened' }
    ]
  },
  {
    id: 2,
    title: 'Shake 42',
    description: 'Online hub for playing Texas 42 dominoes',
    shortDescription: 'A web application to facilitate playing Texas 42 dominoes online with friends, featuring a game lobby, matchmaking, and scoring.',
    fullDescription:
      'Shake 42 is a web application designed to facilitate playing Texas 42 dominoes online with friends. It features game management, scoring, and a user-friendly interface to enhance the gaming experience.<br>My role focused on UX design, creating wireframes and mockups to ensure an intuitive user experience. I collaborated with developers to implement the designs and iterated based on user feedback. Unfortunately, the project was shelved due to funding issues, but it provided valuable experience in web app design and user interaction. Full case study coming soon!',
    image: '/portfolio/shake-42/cover.webp',
    tags: ['Web App', 'Game', 'Figma'],
    category: 'web app',
    duration: '3 months',
    date: 'August 2024',
    role: 'UX Designer, CSS Consultant',
    technologies: ['Figma', "Gimp"],
    challenges: [
      'Determining the requirements for online play of a traditionally in-person game',
      'Designing an intuitive user interface for account setup and online matchmaking',
      'Working with existing themes and branding from previous designers'
    ],
    solutions: [
      'Created mockups and wireframes in Figma to visualize the user flow',
      'Whiteboarded and iterated on design ideas to refine the interface',
      'Mocked up several color schemes and themes for the app, allowing stakeholders to choose their favorite'
    ],
    gallery: [
      { source: '/portfolio/shake-42/logged-in-landing-settings.webp', caption: 'Logged in landing page with the settings modal open' },
      { source: '/portfolio/shake-42/game-page-desktop.webp', caption: 'A game in progress, showing chat window, play area, teams and score display' }
    ],
    // links: { live: 'https://passthedice.example.com', source: 'https://github.com/user/pass-the-dice' }
  }
  // add more projects here
];
