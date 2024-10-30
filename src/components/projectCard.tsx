import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  image1?: string;
  image2?: string;
  image3?: string;
  github?: string;
}

const ProjectCard = (project: ProjectProps) => {
  return (
    <div className=" project-card flex flex-col min-w-80 bg-bgcontainersecondary rounded-2xl border-[0.5px] border-bordercolor backdrop-blur-none shadow-lg lg:min-w-96">
      <Image
        className="flex min-h-1/2 rounded-t-2xl "
        src={project.coverImage}
        width={1381}
        height={780}
        alt={project.title}
      />

      <div className="project-card-content flex flex-col gap-6 p-6">
        <h3 className="font-medium text-lg">{project.title}</h3>
        <p>{project.description}</p>
        {project.github && (
          <Link
            className=" w-fit"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="opacity-70" size={24} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
