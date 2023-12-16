import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/header.module.css';

export default function Header() {

    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Image src="/img/logo.svg" width={300} height={40} alt='imagen logotipo' />

                <nav className={styles.navegacion}>

                    <Link className={styles.enlace} href='/'>Home</Link>
                    <Link className={styles.enlace} href='/about'>About Us</Link>
                    <Link className={styles.enlace} href='/blog'>Blog</Link>
                    <Link className={styles.enlace} href='/store'>Store</Link>
                    
                </nav>
            </div>
        </header>
    )
}
