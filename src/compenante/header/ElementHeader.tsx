import ButtonViolet from "../ui/Buttonviolet"
import { Rocket } from 'lucide-react';



const ElementHeader = () => {
    return (
        <div className="w-5xl h-66.25 flex flex-col gap-4 items-center justify-center text-center">
            <h1 className="font-bold text-4xl text-white">Écoulez votre stock. Sans laisser de traces.</h1>
            <p className="text-white">Décrivez votre cargaison, fixez votre prix et attendez que les acheteurs mordent à l'hameçon.</p>
            <ButtonViolet class='px-4 gap-2 h-12.25 text-sm items-center justify-center' href="#" icon={<Rocket />} texte="Lancer la transaction"  />
        </div>
    )
}

export default ElementHeader