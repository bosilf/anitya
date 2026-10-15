import Image from "next/image";
import iridescentDancer from "@/public/images/Iridescent dancer on glowing islands.png";
import IconLogo from "@/components/icons/IconLogo";
import Link from "next/link";
import AnityaGif from "@/public/images/gifs/Anitya-Seamless-Loop.gif"

export default function Home() {
  return (
    <div className="p-2 flex-1 h-full flex flex-col">
      <main className="flex-1 bg-linear-to-bl from-70% from-[#0F1C21] to-app-anitya-blue/10 outline outline-app-anitya-blue/50 rounded-2xl grid grid-cols-1 lg:grid-cols-6 sm:grid-cols-2 sm:grid-rows-[auto_auto_auto_1fr] gap-y-6 gap-x-9 lg:gap-x-19 m-auto w-full p-10">
        <div className="mb-9 lg:col-span-6 sm:col-span-2 flex flex-col items-center gap-6">
          <h1 className="text-5xl drop-shadow-2xl drop-shadow-app-bt-green-10 lg:text-8xl font-anton font-black uppercase text-center text-shadow/70 text-shadow-lg ">
            Build anything, anywhere
          </h1>
          <div className="flex w-full justify-center items-center gap-2 drop-shadow-2xl drop-shadow-app-lobby-orange/70">
            <IconLogo className="size-15" />
            <div className="text-xs px-1 border border-app-lobby-ring-color drop-shadow-lg drop-shadow-app-lobby-ring-glow-color bg-app-anitya-blue/25 backdrop-blur-lg rounded-full">
              beta
            </div>
          </div>
        </div>
        <div className="mt-auto lg:col-span-2 lg:row-span-2 sm:row-span-2 drop-shadow-2xl drop-shadow-app-lobby-page-bg">
          <h2 className="font-anton mb-3 text-3xl lg:text-5xl uppercase font-black">
            Make it.
            <br className="hidden lg:block" />{" "}
            <span className="text-app-lobby-teal">own it.</span>
          </h2>
          <p className="font-sans text-sm">
            Build a 3D world by hand, bring in your own models, or start from a
            rough draft. <b>Every part of it is yours to shape.</b> Opens from a
            link on any phone or laptop. 
            <b>Nothing to install. No engine to learn.</b>
          </p>
        </div>
        <div className="drop-shadow-2xl lg:items-center lg:col-span-2 lg:row-start-4 lg:col-start-3 sm:col-start-1 drop-shadow-app-lobby-ring-glow-color/20 w-full justify-center sm:items-start sm:justify-start items-center mt-3 sm:mt-0 flex flex-col gap-3">
          
          <Link href="/intro" className="flex flex-col w-full pb-1.5 justify-center items-center bg-app-lobby-teal hover:bg-app-lobby-teal/90 font-inter text-black pt-3.5 px-15 lg:px-20 lg:text-xl sm:w-fit outline outline-app-lobby-ring-color drop-shadow-xl drop-shadow-app-lobby-ring-glow-color/10 hover:drop-shadow-app-lobby-ring-glow-color transition-all duration-300 cursor-pointer rounded-full ">
            <div className="font-semibold">Start Creating</div>
            <p className="text-xs">Account required</p>
          </Link>
          <div className="transition-all hover:cursor-pointer duration-100 w-full sm:w-fit pt-2 pb-1 px-12 lg:px-15 bg-app-color-grey-5-45-percent hover:bg-app-lobby-border focus:bg-app-lobby-border rounded-full outline outline-app-lobby-border backdrop-blur-[6px] inline-flex flex-col justify-center items-center gap-0.5">
            <div className="font-bold text-sm">Explore Worlds</div>
            <p className="text-xs">No account required</p>
          </div>
          <p className="text-xs">
            <span>Download on </span> 
            <Link className="font-semibold hover:underline" href="https://apps.apple.com/us/app/anitya-space/id6787891029">App Store</Link>
            <span> and </span>
            <Link className="font-semibold hover:underline" href="https://play.google.com/store/apps/details?id=space.anitya.app&hl=en-US&referrer=utm_source%3Danitya_site%26utm_medium%3Dwebsite%26utm_campaign%3Dwww_home_badge"> Google Play</Link>
          </p>
          {/* <div className="md:hidden grid grid-cols-2 w-full gap-3">
            <div className="transition-all hover:cursor-pointer duration-100 w-full p-2 bg-app-color-grey-5-45-percent hover:bg-app-lobby-border focus:bg-app-lobby-border rounded-xl outline outline-app-lobby-border backdrop-blur-[6px] inline-flex flex-col justify-center items-center gap-0.5">
              <h3 className="flex flex-col font-semibold">
                <span className="font-thin text-xs">Download on the</span>
                App Store
              </h3>
            </div>
            <div className="transition-all hover:cursor-pointer duration-100 w-full p-2 bg-app-color-grey-5-45-percent hover:bg-app-lobby-border focus:bg-app-lobby-border rounded-xl outline outline-app-lobby-border backdrop-blur-[6px] inline-flex flex-col justify-center items-center gap-0.5">
              <h3 className="flex flex-col font-semibold">
                <span className="font-thin text-xs">Get it on</span>
                Google Play
              </h3>
            </div>
          </div> */}
        </div>
        <Image
          src={AnityaGif}
          unoptimized
          alt=""
          preload
          className="z-10 w-full lg:col-span-2 lg:row-span-2 lg:col-start-3 aspect-5/4 sm:row-start-2 sm:row-span-2 sm:col-start-2 outline drop-shadow-2xl drop-shadow-app-lobby-pink/20 outline-app-lobby-border rounded-2xl object-cover pointer-events-none"
        />
        <div className="min-w-0 lg:col-span-2 lg:row-span-2 lg:m-auto lg:col-start-5 lg:row-start-2 sm:col-start-2">
          <h3 className="font-anton mb-2 text-pretty text-xl lg:text-2xl uppercase  font-black">
            THE FIRST CREATOR TOOL FOR THE NEXT MEDIUM
          </h3>
          <p className="text-pretty font-sans text-sm">
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
