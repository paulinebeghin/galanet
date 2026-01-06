import Buttonbleu from "./compenante/ui/Buttonbleu";
import { DiamondPlus } from 'lucide-react';
import ButtonViolet from "./compenante/ui/Buttonviolet";




const Conteneurnav = () => {
    return (
            <div className="flex gap-5 p-0">
            <Buttonbleu class=' h-12.25 px-4 text-sm border-white' href="#" icon={""} texte="Établir la liaison"  />
            <ButtonViolet class=' px-4 gap-2 h-12.25 text-sm' href="#" icon={<DiamondPlus />} texte=" Vider sa soute"  />
            </div>
    )
}
export default Conteneurnav