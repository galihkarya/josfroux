"use client";

import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import Image from "next/image";

import { MdClose } from "react-icons/md";

import projectsData from "@/data/projects.json";
import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

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

import { useEffect } from "react";

const ProjectsPage = () => {
  const sortedProjects = [...projectsData].sort((a, b) => b.id - a.id);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

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

      <div className="flex flex-col gap-9 px-6 -translate-y-9 lg:grid lg:grid-cols-3 lg:px-36">
        {sortedProjects.map((project) => (
          <Projects
            key={project.id}
            projectData={project}
            openModal={openModal}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ModalDetailedProject
            projectData={selectedProject}
            closeModal={closeModal}
          />
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default ProjectsPage;

const Projects = ({
  projectData,
  openModal,
}: {
  projectData: Project;
  openModal: (project: Project) => void;
}) => {
  return (
    <div>
      <a
        className="project-container flex flex-row gap-3 items-center lg:flex-col lg:items-start"
        onClick={() => openModal(projectData)}
      >
        <Image
          src={projectData.coverImage}
          alt={projectData.title}
          className="object-cover w-auto h-20 rounded-lg lg:rounded-none lg:h-36"
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

const ModalDetailedProject = ({
  projectData,
  closeModal,
}: {
  projectData: Project;
  closeModal: () => void;
}) => {
  return (
    <motion.div
      className="modal-view fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[100] w-screen h-screen bg-[#00000077] px-6 py-14 lg:px-32 lg:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content relative bg-background flex flex-col h-full max-h-[700px] w-full px-8 pt-12 pb-8 rounded-xl shadow-lg overflow-y-auto overflow-x-hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "tween", duration: 0.3 }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <button
          onClick={closeModal}
          className="sticky z-10 top-0 -translate-y-8 -translate-x-4 self-start bg-[#FE5F57] p-0.5 rounded-full"
        >
          <MdClose className="opacity-0 hover:opacity-50" size={14} />
        </button>
        <div className="detailed-project-container-mobile flex flex-col gap-6 lg:relative lg:px-0">
          <div className="title-container flex flex-row gap-6 items-center justify-between lg:hidden">
            <h2 className="font-bold text-2xl text-foreground">
              {projectData.title}
            </h2>
            <p className="font-normal text-sm text-foreground opacity-50">
              {projectData.type}
            </p>
          </div>
          <Image
            src={projectData.coverImage}
            alt={projectData.title}
            width={1381}
            height={780}
            className="object-cover w-max h-auto lg:px-28 lg:absolute lg:-z-10 lg:left-1/2 lg:transform lg:-translate-x-1/2"
          />
          <div className="detailed-project-container-lg flex flex-col gap-6 bg-background lg:grid lg:grid-cols-2 lg:gap-24 lg:px-16 lg:py-8 lg:translate-y-72">
            <div className="detailed-project-container-lg-text flex flex-col gap-6">
              <h2 className="hidden font-bold text-2xl text-foreground lg:block">
                {projectData.title}
              </h2>
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
            </div>

            <div className="detailed-project-container-lg-images flex flex-col gap-6">
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
                    className="object-contain w-6 h-auto"
                    alt="Skill Icon"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
