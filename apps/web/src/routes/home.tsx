import type { Route } from './+types/home';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { Hero } from '@/components/home/hero';
import { About } from '@/components/home/about';
import { Expertise } from '@/components/home/expertise';
import { Projects } from '@/components/home/projects';
import { Process } from '@/components/home/process';
import { Contact } from '@/components/home/contact';
import { portrait } from '@/data/portfolio';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  return seo({ matches, location }, {
    title: 'Devnith Koralage — Software Developer & Systems Engineer',
    description: 'Portfolio of Devnith Koralage, a full-stack developer and systems engineer in Dehiwala building web platforms, TV/radio streaming, and multimedia systems.',
    image: portrait,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Devnith Koralage',
      jobTitle: 'Software Developer & Systems Engineer',
      email: 'dnkoralage@gmail.com',
      telephone: '+94787984875',
      url: absoluteUrl(origin, '/'),
      address: { '@type': 'PostalAddress', addressLocality: 'Dehiwala', addressCountry: 'LK' },
    },
  });
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="split">
        <About />
        <Expertise />
      </div>
      <Projects />
      <Process />
      <Contact />
    </main>
  );
}
