import { createContext, ReactNode, useState } from "react";


interface NavBarProviderProps {
    children?: ReactNode;


}


interface NavbarContextData {
    openMenu: () => void;
    isMenuOpen: boolean;
}

export const NavbarContext = createContext({} as NavbarContextData);



export function NavBarProvider({ children, ...rest }: NavBarProviderProps) {

    const [isMenuOpen, setisMenuOpen] = useState(false);

    function openMenu() { isMenuOpen ? setisMenuOpen(false) : setisMenuOpen(true)}

    


    return (
        <NavbarContext.Provider value={{ openMenu, isMenuOpen }}>
            {children}
        </NavbarContext.Provider>
    )
}