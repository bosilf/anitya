"use client";

import { useState, type SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CreateIcon from "@/components/icons/CreateIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import LogoLight from "@/components/icons/LogoLight";
import OpenMenuIcon from "@/components/icons/OpenMenuIcon";
import PlayScreenIcon from "@/components/icons/PlayScreenIcon";
import avatar from "@/public/images/sidebar-avatar.png";
import Avatar from "./Avatar";

function CommunityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  );
}

function RecentsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 12a9 9 0 1 0 2.6-6.4L3 8M3 3v5h5M12 7v5l3 2" />
    </svg>
  );
}

const navItems = [
  // { label: "Feed", href: "/feed", Icon: HomeIcon },
  // { label: "Tutorials", href: "/tutorials", Icon: PlayScreenIcon },
  // { label: "Community", href: "/community", Icon: CommunityIcon },
  { label: "Recents", href: "/recents", Icon: RecentsIcon },
];

const itemStyles = "flex h-12 w-full items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors hover:bg-app-lobby-border focus:bg-app-lobby-border focus-visible:outline-2 focus-visible:outline-app-fc-06";
const iconStyles = "size-5 shrink-0 [&_path]:stroke-current [&_rect]:stroke-current";

export default function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <aside aria-label="Sidebar" className={`absolute flex h-dvh shrink-0 flex-col px-3 py-5 font-sans text-app-color-white-90-percent transition-[width] duration-200 motion-reduce:transition-none ${expanded ? "w-64" : "w-20"}`}>
      <div className="flex min-h-0 flex-1 flex-col gap-5">
        <Avatar avatar={avatar} isExpanded={expanded} />
        <div className="relative" onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setCreateOpen(false);
        }} onKeyDown={(event) => {
          if (event.key === "Escape") {
            setCreateOpen(false);
            event.currentTarget.querySelector("button")?.focus();
          }
        }}>
          <button type="button" aria-label="Create" aria-expanded={createOpen} aria-controls="sidebar-create-options" title={expanded ? undefined : "Create"} onClick={() => setCreateOpen(!createOpen)} className={`${itemStyles} bg-app-bt-green-10 text-app-fc-06 ${expanded ? "" : "justify-center"}`}>
            <CreateIcon aria-hidden="true" />
            {expanded && <span>Create</span>}
          </button>
          {createOpen && (
            <div id="sidebar-create-options" className="absolute left-full top-0 z-20 ml-4 w-48 rounded-2xl border border-app-lobby-border bg-app-bg-01 p-2 shadow-xl">
              <Link href="/create" className={itemStyles} onClick={() => setCreateOpen(false)}>New experience</Link>
              <Link href="/upload" className={itemStyles} onClick={() => setCreateOpen(false)}>Upload</Link>
            </div>
          )}
        </div>

        <nav aria-label="Main navigation" className="min-h-0 overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {navItems.map(({ label, href, Icon }) => {
              const active = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <li key={href}>
                  <Link href={href} aria-label={label} aria-current={active ? "page" : undefined} title={expanded ? undefined : label} className={`${itemStyles} ${expanded ? "" : "justify-center"} ${active ? "bg-app-bt-green-10 text-app-fc-06" : ""}`}>
                    <Icon className={iconStyles} aria-hidden="true" />
                    {expanded && <span>{label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-5 flex w-full flex-col items-center gap-3">
        <button type="button" aria-expanded={expanded} aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"} title={expanded ? "Collapse sidebar" : "Expand sidebar"} onClick={() => setExpanded(!expanded)} className="flex size-11 items-center justify-center rounded-xl hover:bg-app-lobby-border focus:bg-app-lobby-border focus-visible:outline-2 focus-visible:outline-app-fc-06">
          <OpenMenuIcon className={expanded ? "rotate-180" : undefined} aria-hidden="true" />
        </button>
        <span className="relative shrink-0">
          <LogoLight aria-hidden="true" />
          {!expanded && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded bg-app-bg-01 px-1 text-[8px] leading-3 text-app-color-white-65-percent">Beta</span>}
        </span>
        {expanded && <span className="text-xs text-app-color-white-65-percent">Beta</span>}
      </div>
    </aside>
  );
}
