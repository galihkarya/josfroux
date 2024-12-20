"use client";

// import ThemeSwitcher from "@/components/themeSwitcher";
import Image from "next/image";
import Link from "next/link";

import {
  
  MdOutlineFileDownload,
  MdSchool,
  MdMail,
  MdArrowForward,
  
} from "react-icons/md";
// import { MdArrowForward } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RiLinkedinFill } from "react-icons/ri";

import projectsData from "@/data/projects.json";
import ProjectCard from "@/components/projectCard";

import experienceData from "@/data/experienceandeducation.json";
import ExperienceCard from "@/components/experiencesCard";

import certificateData from "@/data/certifications.json";
import CertificateCard from "@/components/certificateCard";

import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="gradient-component-container flex w-screen relative">
      <Image
        src={"/assets/gradient-component.png"}
        className="absolute object-cover -z-50 top-0 -translate-y-20 inset-0 h-auto w-screen min-w-72 max-w-5xl blur-md opacity-70 lg:-translate-y-64 lg:translate-x-0"
        // objectFit="cover"
        width={1502}
        height={2000}
        alt="gradient-component-1"
      />
      <div className="main-container h-full no-scrollbar">
        <NavBar />

        <div className="content-container z-10 flex flex-col gap-6 w-screen -lg overflow-x-hidden">
          <Hero />
          <Skills />
          <Projects />
          <ExperiencenEducation />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero-container flex flex-col lg:flex-row lg:justify-between gap-12 items-center pt-14 px-4 lg:px-32 xl:px-52 lg:pt-36 lg:pb-24"
    >
      <div className="greeting-container flex flex-col gap-6 pb-4 lg:gap-16 ">
        <motion.h1
          className="text-5xl font-extrabold text-center bg-gradient-to-r from-gradientl1 to-gradientr1 bg-clip-text text-transparent lg:text-8xl lg:text-left"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 2,
          }}
        >
          Hello!
        </motion.h1>
        <div className="flex flex-row items-center gap-4">
          <h2 className="text-2xl font-bold opacity-70">I am</h2>
          <div>
            <h2 className="text-xl font-bold opacity-30">UI/UX Designer</h2>
            <h2 className="text-2xl font-bold opacity-70">
              Frontend Developer
            </h2>
            <h2 className="text-xl font-bold opacity-30">Galih Karya</h2>
          </div>
        </div>

        <div className="my-character hidden lg:flex flex-row gap-2 items-center text-[#858585]">
          <p>adaptable</p>
          <GoDotFill size={8} />
          <p>curious</p>
          <GoDotFill size={8} />
          <p>logical</p>
        </div>
        <div className="social-media-container hidden lg:flex flex-row gap-3 items-center">
          <Link
            href="https://www.linkedin.com/in/galihkarya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/assets/linkedin-icon-glow.png"}
              width={40}
              height={40}
              alt="linkedin-icon-glow"
            />
          </Link>
          <Link
            href="https://www.instagram.com/galihkarya_g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/assets/instagram-icon-glow.png"}
              width={40}
              height={40}
              alt="instagram-icon-glow"
            />
          </Link>
          <Link
            href={
              "https://drive.google.com/file/d/14mwYWEnIEDxZL85oZAX0j0Dirl56nhbC/view?usp=sharing"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cv-button-container flex flex-row gap-1 items-center px-3 py-1 rounded-full bg-gradient-to-r from-gradientl1 to-gradientr1 ">
              <MdOutlineFileDownload color="#f8fcfb" size={18} />
              <p className="font-semibold text-sm text-[#f8fcfb]">CV</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="outer-photo-container ">
        <motion.div
          className="relative"
          initial={{ scale: 0, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 1,
            duration: 0.6,
          }}
        >
          <Image
            className="absolute -z-10 -top-16 left-0 transform translate-x-20 hover:-translate-y-2 hover:scale-110 duration-200 lg:translate-x-32"
            src={"/assets/react-icon-glow.png"}
            height={100}
            width={100}
            alt="react-icon-glow"
          />
          <Image
            className="absolute -z-10 top-12 -left-24 transform translate-x-1/2 -rotate-[65deg] hover:-translate-y-2 hover:scale-110 duration-200 lg:top-16"
            src={"/assets/html-icon-glow.png"}
            height={64}
            width={64}
            alt="html-icon-glow"
          />
          <Image
            className="absolute -z-10 top-20 -right-24 transform -translate-x-1/2 rotate-[70deg] hover:-translate-y-2 hover:scale-110 duration-200"
            src={"/assets/js-icon-glow.png"}
            height={64}
            width={64}
            alt="js-icon-glow"
          />
          <Image
            className="absolute -z-10 top-56 -left-24 transform translate-x-1/2 -rotate-[110deg] hover:-translate-y-2 hover:scale-110 duration-200 lg:top-80"
            src={"/assets/css-icon-glow.png"}
            height={64}
            width={64}
            alt="css-icon-glow"
          />
          <Image
            className="absolute -z-10 top-64 -right-24 transform -translate-x-1/2 rotate-[100deg] hover:-translate-y-2 hover:scale-110 duration-200 lg:top-72"
            src={"/assets/figma-icon-glow.png"}
            height={64}
            width={64}
            alt="figma-icon-glow"
          />
        </motion.div>
        <div className="photo-container z-40 bg-bgcontainersecondary flex flex-col w-fit h-fit gap-2 shadow-lg rounded-lg border-[0.5px] border-bordercolor backdrop-blur-md p-2 duration-200">
          <div className="win-nav-container flex flex-row justify-between items-center px-1 py-1">
            <div className="button-nav-container flex flex-row gap-[0.35rem]">
              <div className="bg-[#FE5F57] h-[12px] w-[12px] rounded-full"></div>
              <div className="bg-[#FEBB2E] h-[12px] w-[12px] rounded-full"></div>
              <div className="bg-[#28C841] h-[12px] w-[12px] rounded-full"></div>
            </div>
            <p className="bg-[#28C841] text-[#f8fcfb] text-xs font-medium px-3 py-0.5 rounded-md text-nowrap">
              recent graduate
            </p>
          </div>
          <Image
            src={"/assets/graduation-photo.png"}
            className="w-60 h-auto rounded-xl lg:w-80 duration-200"
            height={1296}
            width={971}
            alt="graduation-photo"
          />
        </div>
      </div>
      <div className="my-character flex flex-row gap-2 items-center text-[#858585] lg:hidden">
        <p>adaptable</p>
        <GoDotFill size={8} />
        <p>curious</p>
        <GoDotFill size={8} />
        <p>logical</p>
      </div>
      <div className="social-media-container flex flex-row gap-3 items-center lg:hidden">
        <Link
          href="https://www.linkedin.com/in/galihkarya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/assets/linkedin-icon-glow.png"}
            width={40}
            height={40}
            alt="linkedin-icon-glow"
          />
        </Link>
        <Link
          href="https://www.instagram.com/galihkarya_g"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/assets/instagram-icon-glow.png"}
            width={40}
            height={40}
            alt="instagram-icon-glow"
          />
        </Link>
        <Link
          href={
            "https://drive.google.com/file/d/14mwYWEnIEDxZL85oZAX0j0Dirl56nhbC/view?usp=sharing"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cv-button-container flex flex-row gap-1 items-center px-3 py-1 rounded-full bg-gradient-to-r from-gradientl1 to-gradientr1 ">
            <MdOutlineFileDownload color="#f8fcfb" size={18} />
            <p className="font-semibold text-sm text-[#f8fcfb]">CV</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skill" className="skill-container flex flex-col gap-10 p-6">
      <h1 className="bg-gradient-to-r from-subtitlel to-subtitler bg-clip-text text-transparent font-bold text-2xl text-center">
        WHAT I&apos;M GREAT AT
      </h1>
      <div className="skills flex flex-col gap-6 bg-bgcontainer border-[0.5px] border-bordercolor rounded-2xl shadow-lg p-8 lg:flex-row lg:border-0 lg:shadow-none lg:bg-none lg:justify-evenly lg:px-20">
        <div className="skill flex flex-row items-center gap-4 lg:flex-col lg:bg-bgcontainersecondary lg:shadow-lg lg:px-8 lg:py-6 lg:rounded-2xl">
          <Image
            className="w-8 h-8 lg:hidden"
            src={"/assets/react-framed-icon.png"}
            width={128}
            height={128}
            alt="react-framed-icon"
          />
          <p className="text-base text-foreground font-normal lg:hidden">
            React.js/Vite.js/Next.js/React Native
          </p>

          <Image
            className="hidden w-20 h-20 lg:flex"
            src={"/assets/reacts.png"}
            width={128}
            height={128}
            alt="reacts-icon"
          />
          <p className="hidden text-base text-foreground font-normal text-center lg:flex">
            React
          </p>
        </div>
        <div className="skill flex flex-row items-center gap-4 lg:flex-col lg:bg-bgcontainersecondary lg:shadow-lg lg:px-8 lg:py-6 lg:rounded-2xl">
          <Image
            className="w-8 h-8 lg:hidden"
            src={"/assets/html-framed-icon.png"}
            width={128}
            height={128}
            alt="html-framed-icon"
          />
          <p className="text-base text-foreground font-normal lg:hidden">
            HTML
          </p>
          <Image
            className="hidden w-20 h-20 lg:flex"
            src={"/assets/html-icon.png"}
            width={128}
            height={128}
            alt="html-icon"
          />
          <p className="hidden text-base text-foreground font-normal text-center lg:flex">
            HTML
          </p>
        </div>
        <div className="skill flex flex-row items-center gap-4 lg:flex-col lg:bg-bgcontainersecondary lg:shadow-lg lg:px-8 lg:py-6 lg:rounded-2xl">
          <Image
            className="w-8 h-8 lg:hidden"
            src={"/assets/css-framed-icon.png"}
            width={128}
            height={128}
            alt="css-framed-icon"
          />
          <p className="text-base text-foreground font-normal lg:hidden">CSS</p>
          <Image
            className="hidden w-20 h-20 lg:flex"
            src={"/assets/css-icon.png"}
            width={128}
            height={128}
            alt="css-icon"
          />
          <p className="hidden text-base text-foreground font-normal text-center lg:flex">
            CSS
          </p>
        </div>
        <div className="skill flex flex-row items-center gap-4 lg:flex-col lg:bg-bgcontainersecondary lg:shadow-lg lg:px-8 lg:py-6 lg:rounded-2xl">
          <Image
            className="w-8 h-8 lg:hidden"
            src={"/assets/js-framed-icon.png"}
            width={128}
            height={128}
            alt="js-framed-icon"
          />
          <p className="text-base text-foreground font-normal lg:hidden">
            Javascript
          </p>
          <Image
            className="hidden w-20 h-20 lg:flex"
            src={"/assets/js-icon.png"}
            width={128}
            height={128}
            alt="js-icon"
          />
          <p className="hidden text-base text-foreground font-normal text-center lg:flex">
            Javascript
          </p>
        </div>
        <div className="skill flex flex-row items-center gap-4 lg:flex-col lg:bg-bgcontainersecondary lg:shadow-lg lg:px-8 lg:py-6 lg:rounded-2xl">
          <Image
            className="w-8 h-8 lg:hidden"
            src={"/assets/figma-framed-icon.png"}
            width={128}
            height={128}
            alt="figma-framed-icon"
          />
          <p className="text-base text-foreground font-normal lg:hidden">
            UI/UX Design
          </p>
          <Image
            className="hidden w-20 h-20 lg:flex"
            src={"/assets/figma-icon.png"}
            width={128}
            height={128}
            alt="figma-icon"
          />
          <p className="hidden text-base text-foreground font-normal text-center lg:flex">
            UI/UX Design
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sortedProjects = [...projectsData].sort((a, b) => b.id - a.id).slice(0, 4);

  return (
    <div className="project-background-container relative">
      <Image
        className="hidden absolute -z-50 top-24 left-16 blur-md lg:flex"
        src={"/assets/tessaract.png"}
        height={417}
        width={375}
        alt="tessaract-bg"
      />
      <div
        id="project"
        className="recent-project-container flex flex-col py-6 lg:bg-bgcontainer lg:backdrop-blur-none lg:flex-row lg:items-center lg:justify-between"
      >
        <h1 className="bg-gradient-to-r from-subtitlel to-subtitler bg-clip-text text-transparent font-bold text-2xl text-center text-nowrap lg:absolute lg:left-28">
          RECENT PROJECTS
        </h1>
        <div className="projects-container no-scrollbar flex flex-row gap-6 p-9 overflow-x-scroll lg:z-10 lg:pl-[32rem] lg:left-0">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
          <Link            
          href={"/projects"}
          className="more flex flex-col gap-6 min-w-32 bg-bgcontainer rounded-2xl border-[0.5px] border-bordercolor backdrop-blur-none shadow-lg justify-center items-center"
          >
          <MdArrowForward size={24} />
          <p className="text-base font-light">more</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ExperiencenEducation = () => {
  const sortedExperiences = [...experienceData].sort((a, b) => b.id - a.id);
  const filteredExperiences = sortedExperiences.filter(
    (experience) => experience.type === "experience"
  );
  const filteredEducations = sortedExperiences.filter(
    (experience) => experience.type === "education"
  );

  return (
    <div
      id="experience"
      className="experienceneducation-container bg-bgspecial flex flex-col gap-8 py-6 lg:flex-row lg:gap-16 lg:px-12"
    >
      <div className="experiences-container flex flex-col lg:w-1/2">
        <div className="subtitle-container flex flex-row gap-3 items-center justify-center">
          <span className="material-symbols-outlined text-subtitlel">
            award_star
          </span>
          <h1 className="bg-gradient-to-r from-subtitlel to-subtitler bg-clip-text text-transparent font-bold text-2xl text-center">
            EXPERIENCES
          </h1>
        </div>
        <div className="experiences-list-container flex flex-col gap-4 p-8">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))}
        </div>
      </div>
      <div className="education-containe flex flex-col lg:w-1/2">
        <div className="subtitle-container flex flex-row gap-3 items-center justify-center">
          <MdSchool className="text-subtitlel" size={24} />
          <h1 className="bg-gradient-to-r from-subtitlel to-subtitler bg-clip-text text-transparent font-bold text-2xl text-center">
            EDUCATION &amp; COURSES
          </h1>
        </div>
        <div className="education-list-container flex flex-col gap-4 p-8">
          {filteredEducations.map((education) => (
            <ExperienceCard key={education.id} {...education} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const fileteredCertificates = certificateData.filter(
    (certificateData) => certificateData.pinIndex !== null
  );

  return (
    <div
      id="certification"
      className="certifications-container flex flex-col py-6"
    >
      <h1 className="bg-gradient-to-r from-subtitlel to-subtitler bg-clip-text text-transparent font-bold text-2xl text-center">
        CERTIFICATIONS
      </h1>
      <div className="certifications-list-container no-scrollbar flex flex-row gap-4 p-8 overflow-x-scroll lg:grid lg:grid-cols-2 lg:px-48 lg:gap-10 lg:max-w-6xl lg:self-center">
        {fileteredCertificates
          .sort((a, b) => a.pinIndex - b.pinIndex)
          .map((certificate) => (
            <CertificateCard key={certificate.pinIndex} {...certificate} />
          ))}
        <Link 
          href={"/certifications"}
          className="more flex flex-col gap-6 min-w-32 bg-bgcontainer rounded-2xl border-[0.5px] border-bordercolor backdrop-blur-none shadow-lg justify-center items-center lg:hidden"
        >
          <MdArrowForward size={24} />
          <p className="text-base font-light">more</p>
        </Link>
      </div>
      <Link href={"/certifications"} className="hidden w-fit bg-background px-3 py-1 rounded-md shadow-md text-[#088395] border-[0.5px] border-bordercolor self-center lg:block">
          view more
      </Link>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="contact-container flex flex-col gap-6 items-center">
      <h1 className="bg-gradient-to-r from-subtitlel to-subtitler bg-clip-text text-transparent font-bold text-2xl text-center">
        WAYS TO FIND ME
      </h1>
      <div className="social-media-container flex flex-row items-center gap-12 md:gap-14 lg:gap-16 ">
        <Link
          href={"https://www.instagram.com/galihkarya_g"}
          className="instagram-container flex flex-row gap-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoInstagramAlt size={28} />
          <p className="hidden md:block">@galihkarya_g</p>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/galihkarya"}
          className="linkedin-container flex flex-row gap-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinFill size={28} />
          <p className="hidden md:block">galihkarya</p>
        </Link>
        <Link
          href={"mailto:galihkaryagemilang2001@gmail.com"}
          className="email-container flex flex-row gap-3"
        >
          <MdMail size={28} />
          <p className="hidden md:block">galihkaryagemilang2001@gmail.com</p>
        </Link>
      </div>
    </div>
  );
};

