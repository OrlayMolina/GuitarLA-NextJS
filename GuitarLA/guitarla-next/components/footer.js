import Link from 'next/link';
import styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`contenido ${styles.contenido}`}>
                <nav className={styles.navegacion}>

                    <Link href='/'>Home</Link>
                    <Link href='/about'>About Us</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/store'>Store</Link>

                </nav>

                <p className={styles.copyright}>
                    Todos los derechos reservados {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}
