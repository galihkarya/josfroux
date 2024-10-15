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
    <div>
      <div>
        <h1>Hello!</h1>
        <div>
          <h2>
            I am
          </h2>
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