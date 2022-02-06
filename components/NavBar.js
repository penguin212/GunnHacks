import Link from 'next/link';
import styles from '../styles/NavBar.module.css';


export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/documents"><a>Documents</a></Link>
            <Link href="/todos"><a>Todos</a></Link>
            <Link href="/counter"><a>Counter</a></Link>
        </nav>
    )
}
