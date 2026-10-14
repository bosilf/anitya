import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonNavProps = {
  href: string;
  label: string;
  children?: ReactNode;
  className?: string;
}

export default function ButtonNav({ href, label, children, className = "" }: ButtonNavProps) {
  return (
      <Link
        href={href}
        className="bt-nav"
        >
        {children ?? label}
      </Link>
  )
}
