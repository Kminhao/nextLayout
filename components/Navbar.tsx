import { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/components/Navbar.module.css';


export default function Navbar() {

    const [open, setOpen] = useState(false);




    return (
        <div className={styles.navbarContainer}>


            <div className={styles.navbarLinks} style={{ transform: open ? "translateX(0px)" : "" }}>
                <div className={styles.navbarLogo}><img src="/images/logo.svg" alt="" /></div>
                <li><Link href=""><a target="_blank">Página inicial</a></Link></li>
                <li><a href="">Sobre Nós</a></li>
                <li><a href="">Trabalhe Conosco</a></li>
                <li><a href="">Equipe</a></li>
                <li><a href="">Contato</a></li>
            </div>
            <i
                onClick={() => {
                    setOpen(!open)
                }}
                className="fas fa-bars burger">

            </i>



        </div>

    );
}

