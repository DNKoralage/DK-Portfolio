export type Project = {
  id: number;
  title: string;
  category: string;
  type: string;
  year: string;
  image: string;
  description: string;
  scope: string[];
};

export const categories = ['All work', 'Photography', 'Design', 'Film', 'Sound', 'Code'] as const;

export const projects: Project[] = [
  { id: 1, title: 'Body in motion', category: 'Photography', type: 'Editorial / Portrait', year: '2025', image: 'https://images.hostinger.com/aa01942f-2ed2-4396-abb9-6298635d521a.png', description: 'A study in movement, form, and the moments between stillness. An editorial photographic exploration shaped by light and gesture.', scope: ['Creative direction', 'Photography', 'Retouching'] },
  { id: 2, title: 'Form follows feeling', category: 'Design', type: 'Identity / Art direction', year: '2025', image: 'https://images.hostinger.com/02ed28a4-c50b-410b-bf35-ebb56bd2147f.png', description: 'An expressive visual language built from bold geometry, deliberate restraint, and a single unforgettable accent.', scope: ['Visual identity', 'Art direction', 'Print'] },
  { id: 3, title: 'After dark', category: 'Film', type: 'Film / Editing', year: '2024', image: 'https://images.hostinger.com/a66009c6-5a72-4b2e-a081-21d3984bd894.png', description: 'A cinematic exercise in rhythm and atmosphere, where every cut gives the silence room to speak.', scope: ['Video editing', 'Color', 'Storytelling'] },
  { id: 4, title: 'The listening room', category: 'Sound', type: 'Sound / Production', year: '2025', image: 'https://images.hostinger.com/f36f5fce-8737-429c-944f-3f646f0c1c56.png', description: 'An exploration of sonic texture: recording, arranging, and mixing sound into something you can feel.', scope: ['Sound engineering', 'Music production', 'Mixing'] },
  { id: 5, title: 'Systems of light', category: 'Code', type: 'Creative development', year: '2024', image: 'https://images.hostinger.com/067b29c4-d2c6-4625-add7-c219c76bfec9.png', description: 'An intersection of design and development, translating a visual idea into a responsive digital experience.', scope: ['Software development', 'Creative coding', 'Interaction'] },
  { id: 6, title: 'Frequency studies', category: 'Sound', type: 'Music / Sound design', year: '2024', image: 'https://images.hostinger.com/f36f5fce-8737-429c-944f-3f646f0c1c56.png', description: 'Layered tones and tactile recordings come together in a collection of exploratory sound concepts.', scope: ['Composition', 'Sound design', 'Production'] },
];
