import Link from "next/link";

export const variants = {
  primary: "bt-pill-primary",
  secondary: "bt-pill-sc"
} as const

type PillBtnProps = {
  variant?: keyof typeof variants;
  label: string;
  src: string;
};

export default function PillBtn({ 
  variant = "primary", 
  label = "Label", 
  src = "#"
}: PillBtnProps) {
  
  return (

      <Link href={src} className={`btn-pill ${variants[variant]}`}>
        {label}
      </Link>
  );
}