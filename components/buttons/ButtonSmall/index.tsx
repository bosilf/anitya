import AvatarDefault from "@/components/icons/AvatarDefault"
import CogIcon from "@/components/icons/CogIcon"
import CreateIcon from "@/components/icons/CreateIcon"
import FrameIcon from "@/components/icons/FrameIcon"
import HeartIcon from "@/components/icons/HeartIcon"
import HomeIcon from "@/components/icons/HomeIcon"
import LogoLight from "@/components/icons/LogoLight"
import OpenMenuIcon from "@/components/icons/OpenMenuIcon"
import PlayScreenIcon from "@/components/icons/PlayScreenIcon"
import UploadIcon from "@/components/icons/UploadIcon"
import UserIcon from "@/components/icons/UserIcon"

export const iconList = {
  avatarDefault: AvatarDefault,
  cog: CogIcon,
  createIcon: CreateIcon,
  frame: FrameIcon,
  heart: HeartIcon,
  home: HomeIcon,
  logo: LogoLight,
  openMenu: OpenMenuIcon,
  playScreen: PlayScreenIcon,
  upload: UploadIcon,
  user: UserIcon,
} as const

type ButtonProps = {
  icon: keyof typeof iconList,
  content?: {
    count?: number,
    label?: string,
  }
}

export default function ButtonSmall({ icon, content }: ButtonProps) {
  const Icon = iconList[icon]
  const hasCount = content?.count !== undefined
  const hasLabel = Boolean(content?.label)
  const hasContent = hasCount || hasLabel

  return (
    <button className="transition-all hover:cursor-pointer duration-100 size-16 shrink-0 p-2 bg-app-color-grey-5-45-percent hover:bg-app-lobby-border focus:bg-app-lobby-border rounded-2xl outline outline-1 outline-offset-[-1px] outline-app-color-white-15-percent backdrop-blur-[6px] inline-flex flex-col justify-center items-center gap-0.5 self-center">
      <span className="size-4 relative overflow-hidden shrink-0">
        <Icon className="size-full" />
      </span>
      {hasContent && (
        <span className="flex flex-col justify-start items-center text-center text-app-color-white-75-percent text-xs font-medium font-sans leading-5">
          {hasCount && <span>{content?.count}</span>}
          {hasLabel && <span>{content?.label}</span>}
        </span>
      )}
    </button>
  )
}