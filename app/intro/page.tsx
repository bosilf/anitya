"use client";

import Link from "next/link";
import { useState } from "react";

type LevelVariants = {
  level: string;
  content: string;
};
const levels: LevelVariants[] = [
  {
    level: "beginner",
    content:
      "New to building games? Start with Beginner mode for step-by-step guidance. No game development experience needed.",
  },
  {
    level: "expert",
    content:
      "You are familiar with game development and would like to get right into it. Tutorials are still available",
  },
];

export default function Intro() {
  const [selectedLevel, setSelectedLevel] = useState(levels[0].level);
  const currentLevel = levels.find(({ level }) => level === selectedLevel)!;

  return (
    <main className="flex-1 flex p-3 py-12 gap-10 lg:gap-20 flex-col justify-center items-center">
      <div className="flex flex-col gap-4 drop-shadow-2xl drop-shadow-app-lobby-ring-glow-color/50">
        <h1 className="text-center font-anton text-4xl text-pretty">
          Start your creative journey with anitya
        </h1>
        <p className="lg:max-w-150 px-6 text-center text-sm">
          Anitya is your space to build, play, and share worlds of your own. Start from an idea, bring it to life in 3D, and invite others to explore.
        </p>
      </div>
      <div className="w-[90%] min-h-20 grid grid-cols-1 lg:grid-cols-3 gap-7">
        <div className="col-span-1 lg:col-start-2">
          <p className="text-xs text-white/70 mb-2 max-w-80">
            Choose your experience level in game creation. You can switch level
            at anytime in your <u className="cursor-pointer">user settings</u>.
          </p>
          <span
            className={`mr-2 text-sm ${selectedLevel === "beginner" ? "opacity-100" : "opacity-40"}`}
          >
            beginner
          </span>
          <button
            type="button"
            role="switch"
            aria-label="Expert mode"
            aria-checked={selectedLevel === "expert"}
            aria-describedby="level-description"
            onClick={() =>
              setSelectedLevel(
                selectedLevel === "beginner" ? "expert" : "beginner",
              )
            }
            className="relative scale-0.5 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full bg-app-lobby-border p-1 hover:bg-app-bt-secondary-20 focus:bg-app-bt-secondary-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-app-anitya-blue"
          >
            <span
              className={`size-3 rounded-full transition-transform motion-reduce:transition-none ${selectedLevel === "expert" ? "translate-x-4 bg-app-lobby-orange/80" : "translate-x-0 bg-app-anitya-blue"}`}
            />
          </button>
          <span
            className={`ml-2 text-sm ${selectedLevel === "beginner" ? "opacity-40" : "opacity-100"}`}
          >
            expert
          </span>
        </div>
        <Link
          href="/create"
          className={`
          glass lg:col-start-2 items-center drop-shadow-2xl group lg:w-90 h-45 justify-center grid grid-rows-[1fr_1fr_3fr] gap-2 p-4 lg:px-10 text-3xl font-bold aspect-4/3
            ${selectedLevel === "beginner" ? "drop-shadow-app-lobby-ring-glow-color/10 outline-app-anitya-blue/40 hover:outline-app-anitya-blue/70 hover:drop-shadow-app-lobby-ring-glow-color/90" : "drop-shadow-app-lobby-orange/10 hover:drop-shadow-app-lobby-orange/30 hover:outline-app-lobby-orange/70 outline-app-lobby-orange/40"}
          `}
        >
          <span
            className={`
              flex items-center gap-1 w-fit m-auto
              ${selectedLevel === "beginner" ? "tag group-hover:outline-app-anitya-blue" : "tag-red group-hover:outline-app-lobby-orange"}
            `}
          >
            {selectedLevel === "beginner" ? "beginner" : "expert"} mode
            <div
              className={`size-1.5 animate-pulse rounded-full ${selectedLevel === "beginner" ? " bg-app-anitya-blue" : "bg-app-lobby-yellow"}`}
            >
              
            </div>
          </span>
          <h2 className="m-auto">Create</h2>
          <p
            id="level-description"
            aria-live="polite"
            className="mb-auto text-xs text-center font-normal text-balance"
          >
            {currentLevel.content}
          </p>
        </Link>
        <Link href="/explore" className="col-start-1 row-start-3 glass items-center hover:outline-app-color-white-46-percent  lg:w-90 h-45 justify-center grid grid-rows-[1fr_1fr_3fr] gap-2 p-4 px-10 text-3xl font-bold aspect-4/3">
          <h2 className="row-start-2 m-auto">Explore</h2>
          <p className="mb-auto row-start-3 text-xs text-center font-normal">
            Explore worlds built by the Anitya community. Jump in, play, and
            find inspiration for your next creation.
          </p>
        </Link>
        <Link href="/profile" className="glass items-center hover:outline-app-color-white-46-percent  lg:w-90 h-45 justify-center grid grid-rows-[1fr_1fr_3fr] gap-2 p-4 px-10 text-3xl font-bold aspect-4/3">
          <h2 className="row-start-2 m-auto">Profile</h2>
          <p className="mb-auto row-start-3 text-xs text-center font-normal">
            Your future creations, collections, and profile, all in one place. Show the
            community who you are and make this space your own.
          </p>
        </Link>
      </div>
    </main>
  );
}