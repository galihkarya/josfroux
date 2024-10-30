"use client";

import NavBar from "@/components/navBar";
import Image from "next/image";

import { MdClose } from "react-icons/md";

import projectsData from "@/data/projects.json";
import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

interface Project {
  id: number;
  title: string;
  description: string;
  moreDescription: string;
  type: string;
  year: number;
  coverImage: string;
  image1: string;
  image2: string;
  image3: string;
  github: string;
  skillIcons: string[];
}

const ProjectsPage = () => {
  const sortedProjects = [...projectsData].sort((a, b) => b.id - a.id);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div>
      <NavBar />
      <div className="relative">
        <Image
          src={"/assets/gradient-mesh-2.png"}
          width={1280}
          height={256}
          className="object-cover w-screen h-64 -translate-y-16"
          alt="gradient-mesh-2"
        />
        <div className="project-title-container absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-16 flex">
          <h1 className="bg-gradient-to-r from-gradientl1 to-gradientr1 bg-clip-text text-transparent font-extrabold text-3xl text-center text-nowrap tracking-widest">
            PROJECTS
          </h1>

          <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gradientl1 to-gradientr1 bg-clip-text text-transparent font-extrabold text-3xl text-center text-nowrap blur-md tracking-widest">
            PROJECTS
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-9 px-6 -translate-y-9">
        {sortedProjects.map((project) => (
          <Projects
            key={project.id}
            projectData={project} 
            openModal={openModal}
          />
        ))}
      </div>
      {selectedProject && <ModalDetailedProject projectData={selectedProject} closeModal={closeModal} />}
    </div>
  );
};

export default ProjectsPage;

const Projects = ({ projectData, openModal }: { projectData: Project; openModal: (project: Project) => void }) => {
  return (
    <div>
      <a
        className="project-container flex flex-row gap-3 items-center"
        onClick={() => openModal(projectData)}
      >
        <Image
          src={projectData.coverImage}
          alt={projectData.title}
          className="object-cover w-auto h-20 rounded-lg"
          width={1381}
          height={780}
        />
        <div className="project-text-cover flex flex-col gap-1">
          <p className="font-normal text-xs text-foreground opacity-50">
            {projectData.year}
          </p>
          <h2 className="font-bold text-base text-foreground">
            {projectData.title}
          </h2>
          <p className="font-normal text-xs text-foreground opacity-50">
            {projectData.type}
          </p>
        </div>
      </a>
    </div>
  );
};

const ModalDetailedProject = ({ projectData, closeModal }: { projectData: Project; closeModal: () => void }) => {
  return (
    <div className="modal-view z-[100] flex top-0 left-0 absolute w-screen h-screen bg-[#00000077] px-6 py-20">
      <div className="modal-content relative bg-background flex flex-col w-full px-8 py-8 rounded-xl shadow-lg overflow-y-auto">
        <button onClick={closeModal} className="sticky top-0 self-end bg-background shadow-lg p-2 rounded-full">
          <MdClose className="text-foreground" size={24} />
        </button>
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-2xl text-foreground">
            {projectData.title}
          </h2>
          <Image
            src={projectData.coverImage}
            alt={projectData.title}
            width={1381}
            height={780}
            className="w-full h-auto"
          />
          <div className="flex flex-row justify-between">
            <p className="font-normal text-base text-foreground opacity-50">
              {projectData.year}
            </p>
            {projectData.github && (
              <Link
                className=" w-fit"
                href={projectData.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="opacity-70" size={24} />
              </Link>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-normal text-base text-foreground opacity-50">
              description
            </p>
            <p className="font-normal text-base text-foreground">
              {projectData.moreDescription}
            </p>
          </div>
          {projectData.image1 && (
            <Image
              src={projectData.image1}
              className="w-screen h-auto"
              width={1280}
              height={1280}
              alt={`${projectData.title}More1`}
            />
          )}
          {projectData.image2 && (
            <Image
              src={projectData.image2}
              className="w-screen h-auto"
              width={1280}
              height={1280}
              alt={`${projectData.title}More2`}
            />
          )}
          {projectData.image3 && (
            <Image
              src={projectData.image3}
              className="w-screen h-auto"
              width={1280}
              height={1280}
              alt={`${projectData.title}More3`}
            />
          )}
          <div className="skill-icons flex flex-row gap-2">
            {projectData.skillIcons.map((icon, index) => (
              <Image
                key={index}
                src={icon}
                width={24}
                height={24}
                alt="Skill Icon"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
