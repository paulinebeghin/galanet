import { Links } from "./Links";

export const Nav = () => {
  const links = [
    {
      text: "Vaisseaux & Engins",
      href: "/",
    },
    {
      text: "Armurie",
      href: "/",
    },
    {
      text: "Apparence",
      href: "/",
    },
    {
      text: "Ferraille & Droïdes",
      href: "/",
    },
    {
      text: "Ravitaillement & Médic-packs",
      href: "/",
    },
    {
      text: "Cyber-matériel & Cryptage",
      href: "/",
    },
    {
      text: "Reliques & Trésors Interdits",
      href: "/",
    },
    {
      text: "Kits de Survie & Exploration",
      href: "/",
    },
];
  return (
        <ul className="flex items-center text-white text-sm justify-between py-2">
            {
                links.map((link, index) => (
                    <Links key={index} text={link.text} href={link.href}/>
                ))
            }
        </ul>
    )
};
