"use client";

import { useState, type SVGProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CreateIcon from "@/components/icons/CreateIcon";
import LogoLight from "@/components/icons/LogoLight";
import OpenMenuIcon from "@/components/icons/OpenMenuIcon";
import avatar from "@/public/images/sidebar-avatar.png";
import Avatar from "./Avatar";
import HelpIcon from "../icons/HelpIcon";

function CommunityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  );
}

function RecentsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 12a9 9 0 1 0 2.6-6.4L3 8M3 3v5h5M12 7v5l3 2" />
    </svg>
  );
}

const navItems = [{ label: "Recents", href: "/recents", Icon: RecentsIcon }];

const itemStyles =
  "flex h-12 w-full items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors hover:bg-app-lobby-border focus:bg-app-lobby-border focus-visible:outline-2 focus-visible:outline-app-fc-06";
const iconStyles =
  "size-5 shrink-0 [&_path]:stroke-current [&_rect]:stroke-current";

export default function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <aside
      aria-label="Sidebar"
      className={`absolute flex h-dvh shrink-0 flex-col px-3 py-5 font-sans text-app-color-white-90-percent transition-[width] duration-200 motion-reduce:transition-none ${expanded ? "w-64" : "w-20"}`}
    >
      <div className="flex min-h-0 flex-1 flex-col gap-2">
        <div>
          <Avatar avatar={avatar} />
          <p className="tag w-max">my stuff</p>
        </div>
        <div
          className="relative"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setCreateOpen(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setCreateOpen(false);
              event.currentTarget.querySelector("button")?.focus();
            }
          }}
        >
          <button
            type="button"
            aria-label="Create"
            aria-expanded={createOpen}
            aria-controls="sidebar-create-options"
            title={expanded ? undefined : "Create"}
            onClick={() => {
              setCreateOpen(!createOpen);
              setHelpOpen(false);
            }}
            className={`${itemStyles}  text-app-fc-06 ${expanded ? "" : "justify-center"}`}
          >
            <CreateIcon aria-hidden="true" />
            {expanded && <span>Create</span>}
          </button>
          {createOpen && (
            <div
              id="sidebar-create-options"
              className="absolute left-full flex flex-col gap-1 top-0 z-20 ml-4 w-48 rounded-2xl border border-app-lobby-border bg-app-bg-01 p-2 shadow-xl"
            >
              <Link
                href="/create"
                className="expand-menu-md"
                onClick={() => setCreateOpen(false)}
              >
                Create
              </Link>
              <Link
                href="/upload"
                className="expand-menu-md"
                onClick={() => setCreateOpen(false)}
              >
                My Playables
              </Link>
            </div>
          )}
        </div>

        <nav aria-label="Main navigation" className="min-h-0 overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {navItems.map(({ label, href, Icon }) => {
              const active =
                pathname === href || pathname.startsWith(`${href}/`);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-label={label}
                    aria-current={active ? "page" : undefined}
                    title={expanded ? undefined : label}
                    className={`${itemStyles} ${expanded ? "" : "justify-center"} ${active ? "bg-app-bt-green-10 text-app-fc-06" : ""}`}
                  >
                    <Icon
                      className={`text-black p-[2px] rounded-md bg-app-anitya-blue ${iconStyles}`}
                      aria-hidden="true"
                    />
                    {expanded && <span>{label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className="relative"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setHelpOpen(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setHelpOpen(false);
              event.currentTarget.querySelector("button")?.focus();
            }
          }}
        >
          <button
            type="button"
            aria-label="Help"
            aria-expanded={helpOpen}
            aria-controls="sidebar-help-options"
            title={expanded ? undefined : "Help"}
            onClick={() => {
              setHelpOpen(!helpOpen);
              setCreateOpen(false);
            }}
            className={`${itemStyles} text-app-fc-06 ${expanded ? "" : "justify-center"}`}
          >
            <HelpIcon className="size-5 shrink-0" aria-hidden="true" />
            {expanded && <span>Help</span>}
          </button>
          {helpOpen && (
            <div
              id="sidebar-help-options"
              className="absolute left-full top-0 z-20 ml-4 min-w-48 w-fit rounded-2xl border border-app-lobby-border bg-app-bg-01 shadow-xl"
            >
              <p className="cursor-default pl-3 pt-3 opacity-75 text-xs font-semibold">Tutorials:</p>
              <Link
                href="#"
                className="expand-menu-sm"
                onClick={() => setHelpOpen(false)}
              >
                Learn How to Build
              </Link>
              <Link
                href="#"
                className="expand-menu-sm"
                onClick={() => setHelpOpen(false)}
              >
                Learn How to Play
              </Link>
              <Link
                href="#"
                className="expand-menu-sm"
                onClick={() => setHelpOpen(false)}
              >
                Builder Controls
              </Link>
              <Link
                href="#"
                className="expand-menu-sm"
                onClick={() => setHelpOpen(false)}
              >
                Player Controls
              </Link>
              <Link
                href="#"
                className="expand-menu-sm"
                onClick={() => setHelpOpen(false)}
              >
                Video Tutorials
              </Link>
              <div className="w-full bg-app-lobby-border h-px my-1" />
              <Link
                href="#"
                className="expand-menu-sm"
                onClick={() => setHelpOpen(false)}
              >
                Release Notes
              </Link>
              <div className="w-full bg-app-lobby-border h-px my-1" />
              <Link
                href="#"
                className="expand-menu-sm"
                onClick={() => setHelpOpen(false)}
              >
                Ask the Community
              </Link>
              <Link
                href="#"
                className="expand-menu-sm"
                onClick={() => setHelpOpen(false)}
              >
                Support
              </Link>
              <div className="w-full bg-app-lobby-border h-px my-1" />
              <Link
                href="#"
                className="expand-menu-sm"
                onClick={() => setHelpOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="expand-menu-sm"
                onClick={() => setHelpOpen(false)}
              >
                Terms of Use
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 flex w-full flex-col items-center gap-3">
        <LogoLight aria-hidden="true" />
      </div>
    </aside>
  );
}