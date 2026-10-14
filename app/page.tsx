import Image from "next/image";
import iridescentDancer from "@/public/images/Iridescent dancer on glowing islands.png";
import LogoLight from "@/components/icons/LogoLight";

export default function Home() {
  return (
    <div className="p-2 flex-1 h-full flex flex-col">

      <main className="flex-1 bg-linear-to-bl from-70% from-[#0F1C21] to-app-anitya-blue/10 outline outline-app-anitya-blue/50 rounded-2xl grid grid-cols-1 lg:grid-cols-6 sm:grid-cols-2 sm:grid-rows-[1fr_auto_auto_1fr] gap-y-6 gap-x-9 lg:gap-x-19 m-auto w-full p-10">
        <div className="mb-9 lg:col-span-6 sm:col-span-2 flex flex-col items-center gap-6">
          <h1 className="text-5xl drop-shadow-2xl drop-shadow-app-bt-green-10 lg:text-8xl font-anton font-black uppercase text-center text-shadow/70 text-shadow-lg ">
            Build anything, anywhere
          </h1>
          <p className="text-sm font-app-f-b-l-font-family font-app-f-bt-m-font-weight regular drop-shadow-xl drop-shadow-app-anitya-blue/30">
            Powered by Anitya 
          </p>
        </div>
        <div className="mt-auto lg:col-span-2 lg:row-span-2 sm:row-span-2 drop-shadow-2xl drop-shadow-app-lobby-page-bg">
          <h2 className="font-anton text-3xl lg:text-5xl uppercase font-black">
            Make it.
            <br className="hidden lg:block" />{" "}
            <span className="text-app-lobby-teal">own it.</span>
          </h2>
          <p>
            Build a 3D world by hand, bring in your own models, or start from a
            rough draft. Every part of it is yours to shape. Opens from a link
            on any phone or laptop. Nothing to install. No engine to learn.
          </p>
        </div>
        <div className="drop-shadow-2xl lg:items-center lg:col-span-2 lg:row-start-4 lg:col-start-3 sm:col-start-1 drop-shadow-app-lobby-ring-glow-color/20 w-full justify-center sm:items-start sm:justify-start items-center mt-3 sm:mt-0 flex flex-col gap-2">
          <div className="flex flex-col w-full pb-1.5 justify-center items-center bg-app-lobby-teal hover:bg-app-lobby-teal/90 font-inter text-black pt-3.5 px-15 lg:px-20 lg:text-xl sm:w-fit outline outline-app-lobby-ring-color drop-shadow-xl drop-shadow-app-lobby-ring-glow-color/10 hover:drop-shadow-app-lobby-ring-glow-color transition-all duration-300 cursor-pointer rounded-full ">
            <div className="font-semibold">Start Creating</div>
            <p className="text-xs">Account required</p>
          </div>
          <div className="transition-all hover:cursor-pointer duration-100 w-full sm:w-fit pt-2 pb-1 px-12 lg:px-15 bg-app-color-grey-5-45-percent hover:bg-app-lobby-border focus:bg-app-lobby-border rounded-full outline outline-app-lobby-border backdrop-blur-[6px] inline-flex flex-col justify-center items-center gap-0.5">
            <div className="font-bold text-sm">Explore Worlds</div>
            <p className="text-xs">No account required</p>
          </div>
        </div>
        <Image
          src={iridescentDancer}
          alt=""
          preload
          className="z-10 w-full lg:col-span-2 lg:row-span-2 lg:col-start-3 aspect-5/4 sm:row-start-2 sm:row-span-2 sm:col-start-2 outline drop-shadow-2xl drop-shadow-app-lobby-pink/20 outline-app-lobby-border rounded-2xl object-cover pointer-events-none"
        />
        <div className="min-w-0 lg:col-span-2 lg:row-span-2 lg:m-auto lg:col-start-5 lg:row-start-2 sm:col-start-2">
          <h3 className="font-anton text-pretty text-xl lg:text-2xl uppercase  font-black">
            THE FIRST CREATOR TOOL FOR THE NEXT MEDIUM
          </h3>
          <p className="text-pretty">
            Build a world. Share it as a link. Keep your name on it.
          </p>
        </div>
      </main>
      <footer>
        <ul className="flex text-xs gap-2 text-white/60 pt-2 justify-center">
          <li>About</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>Covenant</li>
          <li>Discord</li>
          <li>X</li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>© anitya 2026</li>
        </ul>
      </footer>
    </div>
  );
}
