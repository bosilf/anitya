import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type SidebarAvatarProps = {
  isExpanded: boolean;
  avatar: StaticImageData;
};

export default function Avatar({ isExpanded, avatar }: SidebarAvatarProps) {
  return (
    <Link
      href="/profile"
      aria-label="username"
      title={isExpanded ? undefined : "Bosilf · My Stuff"}
      className="flex min-h-14 items-center gap-3 rounded-xl p-2 hover:bg-app-lobby-border focus:bg-app-lobby-border focus-visible:outline-2 focus-visible:outline-app-fc-06"
    >
      <Image
        src={avatar}
        alt=""
        width={40}
        height={40}
        className="size-10 shrink-0 rounded-full object-cover"
      />
      {isExpanded && (
        <span className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium">Bosilf</span>
          <span className="text-xs text-app-color-white-65-percent">
            My Stuff
          </span>
        </span>
      )}
    </Link>
  );
}
