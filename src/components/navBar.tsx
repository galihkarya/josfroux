"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdMoreVert, MdClose } from "react-icons/md";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const MoreModal = () => {
    return (
      <motion.div
        className={`absolute top-2 right-2 z-[200] flex flex-col bg-bgnav rounded-xl border-[0.5px] border-bordercolor ${
          isModalOpen ? "backdrop-blur-md" : "backdrop-blur-none"
        } px-3 pb-3 pt-8 lg:hidden`}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        style={{
          transformOrigin: "top right",
        }}
      >
        <button onClick={toggleModal}>
          <MdClose className="absolute top-3 right-3" size={24} />
        </button>
        <div className="flex flex-col gap-7 font-semibold text-base text-nowrap p-4">
          <a href="/#hero" onClick={toggleModal}>
            Home
          </a>
          <a href="/#skill" onClick={toggleModal}>
            Skills
          </a>
          <a href="/#project" onClick={toggleModal}>
            Projects
          </a>
          <a href="/#experience" onClick={toggleModal}>
            Experiences
          </a>
          <a href="/#certification" onClick={toggleModal}>
            Certifications
          </a>
          <a href="/#contact" onClick={toggleModal}>
            Social Media
          </a>
        </div>
      </motion.div>
    );
  };

  return (
    <div
      className={`navbar-container sticky top-0 z-[100]  h-fit ${
        isModalOpen ? "bg-background" : "bg-bgnav"
      } border-b-[0.5px] border-bordercolor ${
        isModalOpen ? "backdrop-blur-none" : "backdrop-blur-md"
      } py-4 px-4 lg:px-8`}
    >
      <nav className="flex flex-row justify-between items-center">
        <a href="/">
          <Image
            src={"/assets/jfx5.png"}
            width={36}
            height={36}
            alt="jfx-logo"
            className="object-cover h-9 w-10"
          />
        </a>
        <button className="lg:hidden" onClick={toggleModal}>
          <MdMoreVert size={24} />
        </button>
        <div className="hidden lg:flex flex-row gap-6 font-semibold text-sm ">
          <a href="#hero">Home</a>
          <a href="#skill">Skills</a>
          <a href="#project">Projects</a>
          <a href="#experience">Experiences</a>
          <a href="#certification">Certifications</a>
          <a href="#contact">Social Media</a>
        </div>
      </nav>
      <AnimatePresence>{isModalOpen && <MoreModal />}</AnimatePresence>
    </div>
  );
};

export default NavBar;
