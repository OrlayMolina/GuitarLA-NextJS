import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';

export default function Header() {

    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Image src="/img/logo.svg" width={300} height={40} alt='imagen logotipo' />

                <nav className={styles.navegacion}>

                    <Link className={router.pathname  === '/' ? styles.active : ''} href='/'>Home</Link>
                    <Link className={router.pathname  === '/about' ? styles.active : ''} href='/about'>About Us</Link>
                    <Link className={router.pathname  === '/blog' ? styles.active : ''} href='/blog'>Blog</Link>
                    <Link className={router.pathname  === '/store' ? styles.active : ''} href='/store'>Store</Link>
                    
                </nav>
            </div>
        </header>
    )
}
