import type { ReactNode } from "react"

interface Props {
  href: string;
  icon: ReactNode;
  texte: string;
  class: string;
}

const ButtonViolet = ({ href, icon, texte, class: className }: Props) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center bg-violet-600 text-white rounded-lg ${className}`}
    >
      {icon}
      <span className="text-white">{texte}</span>
    </a>
  );
};

export default ButtonViolet;

