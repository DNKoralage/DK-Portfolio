import { Code2 } from 'lucide-react';
import { skills } from '@/data/portfolio';

export function Expertise() {
  return (
    <section className="panel" id="expertise">
      <div className="panel-head"><Code2 size={16} /> My Expertise</div>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill.name}>
            <div>
              <strong>{skill.name}</strong>
              <span>{skill.level}%</span>
            </div>
            <p>{skill.detail}</p>
            <div className="bar" role="meter" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={skill.name}>
              <i style={{ width: `${skill.level}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
