import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer-container bg-[#222227] flex flex-col p-8 gap-3">
      <p className="font-normal text-sm text-center text-[#f8fcfb] opacity-50">
        handcrafted from the ground with &#x1F499;{" "}
      </p>
      <div className="icons-container flex flex-row gap-6 justify-center">
        <Image
          src={"/assets/figma-icon.png"}
          className="text-foreground"
          width={16}
          height={16}
          alt="figma-icon"
        />
        <Image
          src={"/assets/next-icon.png"}
          width={16}
          height={16}
          alt="next-icon"
        />
        <Image
          src={"/assets/html-icon.png"}
          width={16}
          height={16}
          alt="html-icon"
        />
        <Image
          src={"/assets/css-icon.png"}
          width={16}
          height={16}
          alt="css-icon"
        />
        <Image
          src={"/assets/js-icon.png"}
          width={16}
          height={16}
          alt="js-icon"
        />
        <Image
          src={"/assets/tailwindcss-icon.png"}
          width={20}
          height={16}
          alt="tailwindcss-icon"
        />
      </div>
      <p className="font-normal text-sm text-center text-[#f8fcfb] opacity-50">
        2024
      </p>
    </div>
  );
};

export default Footer;
