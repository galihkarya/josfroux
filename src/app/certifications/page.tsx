"use client";

import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import Image from "next/image";

import { MdClose, MdInsertLink } from "react-icons/md";

import certificationsData from "@/data/certifications.json";
import { useState } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

interface Certifications {
  id: number;
  name: string;
  organization: string;
  descriptionTitle: string;
  descriptions: string[];
  url: string;
  pinIndex?: number | null;
  imgsrc: string;
}

import { useEffect } from "react";

const CertificationsPage = () => {
  const sortedCertifications = [...certificationsData].sort(
    (a, b) => b.id - a.id
  );
  const [selectedCertifications, setSelectedCertification] =
    useState<Certifications | null>(null);

  const openModal = (certification: Certifications) =>
    setSelectedCertification(certification);
  const closeModal = () => setSelectedCertification(null);

  useEffect(() => {
    if (selectedCertifications) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCertifications]);

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
        <div className="certification-title-container absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-16 flex">
          <h1 className="bg-gradient-to-r from-gradientl1 to-gradientr1 bg-clip-text text-transparent font-extrabold text-3xl text-center text-nowrap tracking-widest">
            CERTIFICATIONS
          </h1>

          <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gradientl1 to-gradientr1 bg-clip-text text-transparent font-extrabold text-3xl text-center text-nowrap blur-md tracking-widest">
            CERTIFICATIONS
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-9 px-6 -translate-y-9 lg:grid lg:grid-cols-3 lg:px-36">
        {sortedCertifications.map((certification) => (
          <Certifications
            key={certification.id}
            certificationData={certification}
            openModal={openModal}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedCertifications && (
          <ModalDetailedCertification
            certificationData={selectedCertifications}
            closeModal={closeModal}
          />
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default CertificationsPage;

const Certifications = ({
  certificationData,
  openModal,
}: {
  certificationData: Certifications;
  openModal: (certificationData: Certifications) => void;
}) => {
  return (
    <div>
      <a
        className="certification-container flex flex-row gap-3 lg:flex-col lg:items-start"
        onClick={() => openModal(certificationData)}
      >
        <Image
          src={certificationData.imgsrc}
          alt={certificationData.name}
          className="object-contain w-max h-auto max-w-28 lg:max-w-full"
          width={1381}
          height={780}
        />
        <div className="certification-text-cover flex flex-col gap-1">
          <h2 className="font-bold text-base text-foreground">
            {certificationData.name}
          </h2>
          <p className="font-normal text-xs text-foreground opacity-50">
            {certificationData.organization}
          </p>
        </div>
      </a>
    </div>
  );
};

const ModalDetailedCertification = ({
  certificationData,
  closeModal,
}: {
  certificationData: Certifications;
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
          <MdClose className=" opacity-0 hover:opacity-50" size={14} />
        </button>
        <div className="detailed-certification-container flex flex-col gap-6">
          <div className="header-container flex flex-col gap-6 justify-between lg:flex-row">
            <Image
              src={certificationData.imgsrc}
              alt={certificationData.name}
              width={1381}
              height={780}
              className="object-contain w-max h-auto lg:max-w-80 "
            />
            <div className="subheader-container flex flex-col gap-4">
              <h2 className="font-bold text-2xl text-foreground">
                {certificationData.name}
              </h2>
              <p className="font-normal text-sm text-foreground opacity-50">
                {certificationData.organization}
              </p>
              <p className="font-normal text-base text-foreground">
                {certificationData.descriptionTitle}
              </p>
              <Link
                href={certificationData.url}
                className="flex flex-row gap-2 px-3 py-1 bg-background items-center shadow-lg w-fit rounded-md border-[0.5px] border-bordercolor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdInsertLink size={16} />
                <p className="font-normal text-sm">View credential</p>
              </Link>
            </div>
          </div>
          <div className="list-materi-container flex flex-col gap-2 bg-background pt-4">
            <p className="font-normal text-sm text-foreground opacity-50">
              Materi yang dipelajari
            </p>
            <ul className="flex flex-col gap-2 pl-4">
              {certificationData.descriptions.map((description) => (
                <li key={description} className="font-normal text-sm text-foreground list-disc list-outside">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
