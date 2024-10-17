interface ExperienceProps {
  id: number;
  title: string;
  company: string;
  yearStart: number;
  yearEnd?: number | null;
  type: string | "experience" | "education";
  description?: string | null;
  image1?: string | null;
  image2?: string | null;
  image3?: string | null;
  image4?: string | null;
}

const ExperiencesCard = (experience: ExperienceProps) => {
  return (
    <div className="experiences-card p-[0.5px] rounded-2xl bg-gradient-to-r bg-clip-border from-[#64EDAE] to-[#088395] shadow-lg">
      <div className="bg-bgcontainerspecial p-4 rounded-2xl">
        <h4 className="text-sm font-semibold">
          {" "}
          {experience.yearEnd
            ? experience.yearEnd - experience.yearStart === 0
              ? experience.yearStart
              : `${experience.yearStart} - ${experience.yearEnd}`
            : `${experience.yearStart} - now`}
        </h4>
        <h3 className="text-base font-bold">{experience.title}</h3>
        <p className="opacity-50 text-xs font-semibold">{experience.company}</p>
      </div>
    </div>
  );
};

export default ExperiencesCard;
