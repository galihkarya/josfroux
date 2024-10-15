import ThemeSwitcher from "@/components/themeSwitcher";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <div>
        <Hero />
      </div>
    </div>
  );
}

const Hero = () => {
  return(
    <div className="hero-container flex flex-col w-screen items-center p-24">
      <div className="greeting-container flex flex-col gap-8">
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-gradientl1 to-gradientr1 bg-clip-text text-transparent">Hello!</h1>
        <div className="flex flex-row items-center gap-4">
          <h2 className="text-3xl font-bold">I am</h2>
          <div>
            <h2>UI/UX Designer</h2>
            <h2>Frontend Developer</h2>
            <h2>Galih Karya</h2>
          </div>
        </div>
      </div>
    </div>
  )
}