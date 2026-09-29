import { Compass, Layers, Code2, Radio, ShieldCheck, Rocket, Workflow } from 'lucide-react';
import { steps } from '@/data/portfolio';

const icons = [Compass, Layers, Code2, Radio, ShieldCheck, Rocket];

export function Process() {
  return (
    <section className="block" id="process">
      <h2><Workflow size={16} /> My Work Process</h2>
      <ol className="steps">
        {steps.map((step, index) => {
          const Icon = icons[index];
          return (
            <li key={step.n}>
              <span className="step-icon"><Icon size={18} /></span>
              <small>{step.n}</small>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
