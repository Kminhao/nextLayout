import Link from 'next/link';
import { Fragment, useContext } from 'react';
import { NavbarContext } from '../contexts/NavbarContext';
import styles from '../styles/components/Footer.module.css';




export default function Footer() {

    const { isMenuOpen } = useContext(NavbarContext);


    return (
        <Fragment>
            {!isMenuOpen ? <div className={styles.footerContainer} style={{transform: !isMenuOpen ?  "translateY(200px)" : " "}}>
                <div className={styles.mainFooter}>
                    <div className={styles.footerColunm}>
                        <li><a href=""><img src="/images/icons/instagram.svg" alt="Instagram" /> Instagram</a></li>
                        <li><a href=""><img src="/images/icons/facebook.svg" alt="Facebook" /> Facebook</a></li>
                        <li><a href=""><img src="/images/icons/twitter.svg" alt="Twitter" /> Twitter</a></li>
                        <li><a href=""><img src="/images/icons/linkedin.svg" alt="Linkedin" /> Linkedin</a></li>
                    </div>
                    <div className={styles.footerColunm}>
                        <li><a href=""><img src="/images/icons/instagram.svg" alt="Instagram" /> Instagram</a></li>
                        <li><a href=""><img src="/images/icons/facebook.svg" alt="Facebook" /> Facebook</a></li>
                        <li><a href=""><img src="/images/icons/twitter.svg" alt="Twitter" /> Twitter</a></li>
                        <li><a href=""><img src="/images/icons/linkedin.svg" alt="Linkedin" /> Linkedin</a></li>
                    </div>

                </div>

                <hr />

                <div className={styles.footerRow}>
                    <li><strong>© 2021 Gabruel Necessitas de emprego. É sério. </strong></li>
                </div>
            </div> : ""}
        </Fragment>
    );
}


