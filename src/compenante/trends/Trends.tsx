import CategorieT from "./CategorieT"
import { Flame } from 'lucide-react';
const Trends = () => {
    return (
        <div className="gap-6 h-80 flex">
            
            <CategorieT href="" texte="Cargaisons chaudes" showIcon={false} icon={<Flame/>}/>
            <CategorieT href="" bgImage="vaisseaux_de_fuite.png" texte="Vaisseaux de Fuite"showIcon={true}/>
            <CategorieT href="" bgImage="arsenal_clandesdin.png" texte="Arsenal Clandestin" showIcon={true}/>
            <CategorieT href="" bgImage="composants_ia.png" texte="Composants & IA" showIcon={true}/>
            <CategorieT href="" bgImage="reliques_perdues.png" texte="Reliques Perdues" showIcon={true}/>

            
        </div>
    )
}

export default Trends