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
  gallery?: { image: string; caption?: string }[];
  links?: { live?: string; source?: string };
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Dragon Wing Illustrations',
    description: 'Fantasy creature design and digital illustrations',
    shortDescription:
      'A collection of dragon wing anatomy studies and digital paintings exploring form, texture, and lighting.',
    fullDescription:
      "An extensive collection of fantasy creature illustrations featuring detailed dragon wing anatomy studies, mythical beast designs, and digital painting techniques...",
    image: 'https://source.unsplash.com/400x300/?fantasy,dragon,artwork',
    tags: ['Art', 'Digital', 'Fantasy', 'Illustration'],
    category: 'artwork',
    duration: '3 months',
    date: 'March 2024',
    role: 'Digital Artist & Concept Designer',
    technologies: ['Photoshop', 'Procreate', 'Blender', 'ZBrush'],
    gallery: [
      { image: 'https://source.unsplash.com/600x400/?dragon,wing,anatomy', caption: 'Detailed wing study' },
      { image: 'https://source.unsplash.com/600x400/?fantasy,creature,sketch', caption: 'Initial sketches' }
    ],
    links: { live: 'https://example.com/dragon-gallery', source: 'https://github.com/example/dragon-art' }
  },
  // add more projects here
];
