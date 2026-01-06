
import type { ReactNode } from "react"

interface Props {
  href: string;
  icon: ReactNode;
  texte: string;
  class: string;
}
const Buttonbleu = ({ href, icon, texte, class: className }: Props) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center bg-none text-white border  rounded-lg ${className}`}
    >
      {icon}
      <span className="text-white ">{texte}</span>
    </a>
  );
};

export default Buttonbleu;