"use client";

import { useState } from "react";

type LevelVariants = {
  level: string;
  content: string;
};
const levels: LevelVariants[] = [
  {
    level: "beginner",
    content:
      "New to building games? Start with Beginner for step-by-step guidance",
  },
  {
    level: "expert",
    content:
      "You are familiar with game development and would like to get right into it.",
  },
];

export default function Dashboard() {
  const [selectedLevel, setSelectedLevel] = useState(levels[0].level);
  const currentLevel = levels.find(({ level }) => level === selectedLevel)!;

  return (
    <main className="flex-1 flex gap-20 flex-col justify-center items-center">
      <h1>Start your creative journey with Anitya</h1>
      <div className="w-[90%] min-h-20 grid grid-cols-3 gap-7">
        <div className="col-span-3">
          <p className="text-xs text-white/70 mb-2 max-w-80">
            Choose your experience level in game creation. You can switch level at anytime in your user setting.
          </p>
          <span className={`mr-2 text-sm ${selectedLevel === "beginner" ? "opacity-100" : "opacity-40"}`}>beginner</span>
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
          <span className={`ml-2 text-sm ${selectedLevel === "beginner" ? "opacity-40" : "opacity-100"}`}>expert</span>
        </div>
        <div 
        className={`
          glass items-center drop-shadow-2xl  lg:w-90 h-45 justify-center grid grid-rows-[1fr_1fr_3fr] gap-2 p-4 lg:px-10 text-3xl font-bold aspect-4/3
            ${selectedLevel === "beginner" ? "drop-shadow-app-lobby-ring-glow-color/10 outline-app-anitya-blue/40 hover:outline-app-anitya-blue/70 hover:drop-shadow-app-lobby-ring-glow-color/90" : "drop-shadow-app-lobby-orange/10 hover:drop-shadow-app-lobby-orange/30 hover:outline-app-lobby-orange/70 outline-app-lobby-orange/40"}
          `}>
          <span
            className={`
              flex items-center gap-1 w-fit m-auto
              ${selectedLevel === "beginner" ? "tag" : "tag-red"}
            `}
          >
            {selectedLevel === "beginner" ? "beginner" : "expert"} mode
            <div
              className={`size-1 animate-pulse rounded-full ${selectedLevel === "beginner" ? " bg-app-anitya-blue" : "bg-app-lobby-yellow"}`}
            />
          </span>
          <h2 className="m-auto">Create</h2>
          <p
            id="level-description"
            aria-live="polite"
            className="mb-auto text-xs text-center font-normal text-balance"
          >
            {currentLevel.content}
          </p>
        </div>
        <div className="glass items-center hover:outline-app-color-white-46-percent  lg:w-90 h-45 justify-center grid grid-rows-[1fr_1fr_3fr] gap-2 p-4 px-10 text-3xl font-bold aspect-4/3">
          <h2 className="row-start-2 m-auto">Explore</h2>
          <p className="mb-auto row-start-3 text-xs text-center font-normal">
            Explore worlds built by the Anitya community. Jump in, play, and find inspiration for your next creation.
          </p>
        </div>
        <div className="glass items-center hover:outline-app-color-white-46-percent  lg:w-90 h-45 justify-center grid grid-rows-[1fr_1fr_3fr] gap-2 p-4 px-10 text-3xl font-bold aspect-4/3">
          <h2 className="row-start-2 m-auto">Profile</h2>
          <p className="mb-auto row-start-3 text-xs text-center font-normal">
            Your creations, collections, and profile—all in one place. Show the community who you are and make this space your own.
          </p>
        </div>
      </div>
    </main>
  );
}