import { ArrowUpRight, LayoutGrid } from 'lucide-react';
import { projects } from '@/data/portfolio';

export function Projects() {
  return (
    <section className="block" id="projects">
      <div className="block-head">
        <h2><LayoutGrid size={16} /> Selected Work</h2>
        <a href="#contact">Start a project <ArrowUpRight size={14} /></a>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className="shot">
              <img src={project.image} alt="" width={640} height={360} loading="lazy" />
              <span>{project.category}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
