import { useContext, useState } from 'react';
import Link from 'next/link'
import styles from '../styles/components/Navbar.module.css';
import { NavbarContext } from '../contexts/NavbarContext';


export default function Navbar() {

    const {openMenu, isMenuOpen} = useContext(NavbarContext);
    




    return (
        <div className={styles.navbarContainer}>


            <div className={styles.navbarLinks} style={{ transform: isMenuOpen ? "translateX(0px)" : "" }}>
                <div className={styles.navbarLogo}><img src="/images/logo.svg" alt="" /></div>
                <li><Link href=""><a target="_blank">Página inicial</a></Link></li>
                <li><a href="">Sobre Nós</a></li>
                <li><a href="">Trabalhe Conosco</a></li>
                <li><a href="">Equipe</a></li>
                <li><a href="">Contato</a></li>

                {isMenuOpen ?
                    <div className={styles.socialMediaNavbar}>
                        <a href=""><img src="/images/icons/instagram.svg" alt="Instagram" /></a>
                        <a href=""><img src="/images/icons/facebook.svg" alt="Facebook" /></a>
                        <a href=""><img src="/images/icons/twitter.svg" alt="Twitter" /></a>
                        <a href=""><img src="/images/icons/linkedin.svg" alt="Linkedin" /></a>
                        

                    </div> : " "
                }

            </div>



            <i
                onClick={() => {
                    openMenu()
                }}
                className="fas fa-bars burger">

            </i>



        </div>

    );
}

