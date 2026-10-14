import ButtonNav, { ButtonNavProps } from "../buttons/ButtonNav";


const navItems: ButtonNavProps[] = [
  {
    href: "#",
    label: "my stuff"
  },
  {
    href: "#",
    label: "Tutorials"
  },
  {
    href: "#",
    label: "Community"
  },
  // {
  //   href: "#",
  //   label: "About"
  // },
  // {
  //   href: "#",
  //   label: "Blog"
  // },
  // {
  //   href: "#",
  //   label: "pricing"
  // },
  // {
  //   href: "#",
  //   label: "Covenant"
  // },
]

export default function Header() {
  return (
    <header className="absolute  w-full z-10 top-5 flex gap-5 justify-center flex-wrap">
        {navItems && navItems.map((navItem, index) => (
            <ButtonNav key={index} label={navItem.label} href={navItem.href}>{navItem.label}</ButtonNav>
        ))}
    </header>
  )
}