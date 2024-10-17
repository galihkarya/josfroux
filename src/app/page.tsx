import ThemeSwitcher from "@/components/themeSwitcher";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { MdMoreVert } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

import projectsData from "@/data/projects.json";
import ProjectCard from "@/components/projectCard";

import experienceData from "@/data/experienceandeducation.json";
import ExperienceCard from "@/components/experiencesCard";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className="main-container relative">
      <div className="gradient-component-container h-auto w-min overflow-hidden ">
        <Image
          src={"/assets/gradient-component.png"}
          className="absolute -z-50 -top-28 left-1/2 transform -translate-x-1/2 "
          width={1502}
          height={1182}
          alt="gradient-component-1"
        />
      </div>
      <NavBar />
      <div className="content-container flex flex-col gap-16 w-screen bg-bgcontainer backdrop-blur-lg no-scrollbar overflow-auto">
        <Hero />
        <Skills />
        <Projects />
        <ExperiencenEducation />
        <Certifications />
      </div>
    </div>
  );
}

const NavBar = () => {
  return (
    <nav className="navbar-container sticky top-0 z-50 flex flex-row h-fit bg-bgnav justify-between items-center backdrop-blur-lg py-4 px-4">
      <h1
        className={`logo ${plusJakartaSans.className} font-bold text-xl text-foreground tracking-[0.1em]`}
      >
        &lt;gal/&gt;
      </h1>
      <button>
        <MdMoreVert size={24} />
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="hero-container flex flex-col gap-12 items-center pt-14 px-4">
      <div className="greeting-container flex flex-col gap-6 pb-4">
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-gradientl1 to-gradientr1 bg-clip-text text-transparent">
          Hello!
        </h1>
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
      </div>
      <div className="outer-photo-container ">
        <div className="relative">
          <Image
            className="absolute -z-50 -top-16 left-0 transform translate-x-20"
            src={"/assets/react-icon-glow.png"}
            height={100}
            width={100}
            alt="react-icon-glow"
          />
          <Image
            className="absolute -z-50 top-12 -left-24 transform translate-x-1/2 -rotate-[65deg]"
            src={"/assets/html-icon-glow.png"}
            height={64}
            width={64}
            alt="html-icon-glow"
          />
          <Image
            className="absolute -z-50 top-20 -right-24 transform -translate-x-1/2 rotate-[70deg]"
            src={"/assets/js-icon-glow.png"}
            height={64}
            width={64}
            alt="js-icon-glow"
          />
          <Image
            className="absolute -z-50 top-56 -left-24 transform translate-x-1/2 -rotate-[110deg]"
            src={"/assets/css-icon-glow.png"}
            height={64}
            width={64}
            alt="css-icon-glow"
          />
          <Image
            className="absolute -z-50 top-64 -right-24 transform -translate-x-1/2 rotate-[100deg]"
            src={"/assets/figma-icon-glow.png"}
            height={64}
            width={64}
            alt="figma-icon-glow"
          />
        </div>
        <div className="photo-container bg-bgcontainer flex flex-col w-fit h-fit gap-2 shadow-lg rounded-lg border-[0.5px] border-bordercolor backdrop-blur-md p-2">
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
            className="w-60 h-auto rounded-xl"
            height={1296}
            width={971}
            alt="graduation-photo"
          />
        </div>
      </div>
      <div className="my-character flex flex-row gap-2 items-center text-[#858585]">
        <p>adaptable</p>
        <GoDotFill size={8} />
        <p>curious</p>
        <GoDotFill size={8} />
        <p>logical</p>
      </div>
      <div className="social-media-container flex flex-row gap-3 items-center">
        <Link href="https://www.linkedin.com/in/galihkarya">
          <Image
            src={"/assets/linkedin-icon-glow.png"}
            width={40}
            height={40}
            alt="linkedin-icon-glow"
          />
        </Link>
        <Link href="https://www.instagram.com/galihkarya_g">
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
    <div className="skill-container flex flex-col gap-10 p-8">
      <h1 className="bg-gradient-to-r from-subtitlel to-subtitler bg-clip-text text-transparent font-bold text-2xl text-center">
        WHAT I&apos;M GREAT AT
      </h1>
      <div className="skills flex flex-col gap-6 bg-bgcontainer border-[0.5px] border-bordercolor rounded-2xl shadow-lg p-8">
        <div className="skill flex flex-row items-center gap-4">
          <Image
            className="w-8 h-8"
            src={"/assets/react-framed-icon.png"}
            width={128}
            height={128}
            alt="react-framed-icon"
          />
          <p className="text-base text-foreground font-normal">
            React.js/Vite.js/Next.js/React Native
          </p>
        </div>
        <div className="skill flex flex-row items-center gap-4">
          <Image
            className="w-8 h-8"
            src={"/assets/html-framed-icon.png"}
            width={128}
            height={128}
            alt="html-framed-icon"
          />
          <p className="text-base text-foreground font-normal">HTML</p>
        </div>
        <div className="skill flex flex-row items-center gap-4">
          <Image
            className="w-8 h-8"
            src={"/assets/css-framed-icon.png"}
            width={128}
            height={128}
            alt="css-framed-icon"
          />
          <p className="text-base text-foreground font-normal">CSS</p>
        </div>
        <div className="skill flex flex-row items-center gap-4">
          <Image
            className="w-8 h-8"
            src={"/assets/js-framed-icon.png"}
            width={128}
            height={128}
            alt="js-framed-icon"
          />
          <p className="text-base text-foreground font-normal">Javascript</p>
        </div>
        <div className="skill flex flex-row items-center gap-4">
          <Image
            className="w-8 h-8"
            src={"/assets/figma-framed-icon.png"}
            width={128}
            height={128}
            alt="figma-framed-icon"
          />
          <p className="text-base text-foreground font-normal">UI/UX Design</p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sortedProjects = [...projectsData].sort((a, b) => b.id - a.id);

  return (
    <div className="recent-project-container">
      <h1 className="bg-gradient-to-r from-subtitlel to-subtitler bg-clip-text text-transparent font-bold text-2xl text-center">
        RECENT PROJECTS
      </h1>
      <div className="projects-container flex flex-row gap-6 p-9 overflow-x-scroll scrollbar-hide">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
        <Link
          href={"#"}
          className="more flex flex-col gap-6 min-w-32 bg-bgcontainer rounded-2xl border-[0.5px] border-bordercolor backdrop-blur-lg shadow-lg justify-center items-center"
        >
          <MdArrowForward size={24} />
          <p className="text-base font-light">more</p>
        </Link>
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
    <div className="experienceneducation-container flex flex-col gap-8">
      <div className="experiences-container">
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
      <div className="education-container">
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
  return(
    <div>
      <h1 className="bg-gradient-to-r from-subtitlel to-subtitler bg-clip-text text-transparent font-bold text-2xl text-center">CERTIFICATIONS</h1>
    </div>
  )
}