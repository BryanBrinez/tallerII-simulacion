import { Route } from "@/app/models/route.model"
import Link from "next/link"
import styles from './navigator.module.css'


const pathNames = [
    Route
]

export default function Navigator({pathNames}) {
  return (
    <>
        {pathNames.map((pathName) => (
            <Link  className={styles.route} href={pathName.path}>{pathName.name}</Link>
        ))}
    </>
  )
}
