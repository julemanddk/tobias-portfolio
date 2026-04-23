import ProjectCard from '../project/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Projects
        </p>

        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Selected work
        </h2>

        <p className="max-w-2xl text-base leading-7 text-slate-600">
          A collection of projects that show how I build interfaces, solve
          problems, and turn ideas into usable products.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        
      </div>
    </section>
  );
}