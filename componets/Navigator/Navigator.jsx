import Link from "next/link"
import styles from './navigator.module.css'


export default function Navigator({pathNames}) {
  return (
    <nav className={styles.nav}>
        {pathNames.map((pathName) => (
            <Link  className={styles.route} href={pathName.path}>{pathName.name}</Link>
        ))}
    </nav>
  )
}
