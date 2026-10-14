import type { SVGProps } from "react"

export default function FrameIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7 3H3V7M13 3H17V7M7 17H3V13M13 17H17V13" stroke="white" strokeOpacity="0.95" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
