import Conteneurnav from "../../Conteneur"

import Logo from "./Logo"
import Search from "./searchbar/Search"


const Navbar = () => {
    return (
        <div className=" flex py-3 gap-12 items-center">
            <Logo />
            <div className="flex-1">

            <Search  />
            </div>
            <Conteneurnav />
            
        </div>
    )
}

export default Navbar