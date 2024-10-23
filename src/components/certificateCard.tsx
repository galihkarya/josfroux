import Image from "next/image";
import Link from "next/link";
import { MdLink } from "react-icons/md";

interface CertificateProps {
  id: number;
  name: string;
  organization: string;
  descriptionTitle: string;
  descriptions: string[];
  url: string;
  pinIndex?: number | null;
  imgsrc: string;
}

const CertificateCard = (certificate: CertificateProps) => {
  return (
    <div className="certificate-card flex flex-col min-w-80 bg-bg-bgcontainersecondary rounded-2xl border-[0.5px] border-bordercolor backdrop-blur-lg shadow-lg">
      <Image
        className="flex min-h-1/2 rounded-t-2xl "
        src={certificate.imgsrc}
        width={1381}
        height={780}
        alt={certificate.name}
      />

      <div className="certificate-card-content flex flex-col gap-6 p-6">
        <h3 className="font-medium text-lg">{certificate.name}</h3>
        <Link
          className="flex flex-row gap-2 w-fit items-center bg-bg-bgcontainersecondary border-[0.5px] border-bordercolor rounded-lg px-2 py-1 shadow-sm"
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdLink className="opacity-70" size={24} />
          <p className="font-base text-sm">View credential</p>
        </Link>
      </div>
    </div>
  );
};

export default CertificateCard;
