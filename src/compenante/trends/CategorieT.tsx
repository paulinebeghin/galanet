import type { ReactNode } from "react"

interface Props {
    bgImage?: string;
    texte?: string;
    href?: string;
    showIcon?: boolean;
    icon?: ReactNode;
}
//  w-[268.8px]
const CategorieT = ({bgImage,texte,href,showIcon,icon}:Props) => {
    return (
        <>
        {
            showIcon?
         <a
            href={href}
            className="flex justify-start items-end p-4 bg-cover bg-center h-full rounded-lg w-1/5"

            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h5 className="font-bold text-lg text-white">
                {texte}
            </h5>
        </a>
        :
        <a
           href={href}
           className=" p-6 bg-cover bg-center h-full w-1/5 rounded-lg  bg-violet-600 flex flex-col gap-5"

           
       >
           <h5 className="font-bold text-2xl text-white">
               {icon}{texte} 
           </h5>
       </a>
        }
        </>
    )
}

// const CategorieT = ({bgImage,texte,href}:Props) => {
//     return (
//          <a
//             href={href}
//             className="flex justify-start items-end p-4 bg-cover bg-center h-full w-[268.8px] rounded-lg"

//             style={{ backgroundImage: `url(${bgImage})` }}
//         >
//             <h5 className="font-bold text-lg text-white">
//                 {texte}
//             </h5>
//         </a>
//     )
// }

export default CategorieT