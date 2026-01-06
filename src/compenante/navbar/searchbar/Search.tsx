import { Telescope } from 'lucide-react';
import ButtonViolet from '../../ui/Buttonviolet';
import { ArrowBigRight } from 'lucide-react';
import Buttonbleu from '../../ui/Buttonbleu';


const Search = () => {
    return (
        <div className="bg-slate-800  text-white flex p-2 gap-2 rounded-lg  justify-between items-center">
            <Buttonbleu class='w-9 h-9 border-none' href="#" icon={<Telescope />} texte=""  />
            <input type="search" placeholder="Fouiller dans les archives des contrebandiers" className="text-white placeholder-white w-full text-sm" />
            <ButtonViolet class='w-9 h-9 items-center justify-center' href="#" icon={<ArrowBigRight />} texte=""  />
        </div>
    )
}
export default Search