import { Project } from "@/types/project";
import ImageSlider from "@/app/components/slider/ImageSlider";

type ProjectCardProps = {
  project: Project;
};

const BASE_PATH = "/tobias-portfolio";

export default function ProjectCard({ project }: ProjectCardProps) {
  const galleryImages = project.images.map((src, index) => ({
    src: `${BASE_PATH}${src}`,
    alt: `${project.title} - image ${index + 1}`,
  }));

  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#d6c5ae] bg-[#ede7de] shadow-[0_10px_30px_rgba(46,46,46,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(46,46,46,0.14)]">
      <div className="border-b border-[#d6c5ae] bg-[#f7f3ee] p-5">
        <ImageSlider images={galleryImages} />
      </div>

      <div className="space-y-4 p-7">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight text-[#2e2e2e]">
            {project.title}
          </h3>
          <div className="h-2.5 w-2.5 rounded-full bg-[#8fb9d4] opacity-80 transition group-hover:scale-125" />
        </div>

        <p className="justify-copy text-base leading-7 text-[#4b4b4b]">
          {project.description}
        </p>

        <p className="justify-copy text-base leading-7 text-[#4b4b4b]">
          <span className="font-semibold text-[#2e2e2e]">Technologies:</span>{" "}
          {project.technologies.join(", ")}
        </p>
      </div>
    </article>
  );
}