import { Routes } from "./models/route.model";
import Navigator from "@/componets/Navigator/Navigator";
import styles from "./page.module.css";

export default function Home({ pathNames }) {
  return (
    <div className={styles.main}>
      <div className={styles.routes}>
        <Navigator 
          pathNames={[Routes.HOME, Routes.GENERADORES]}
        />
      </div>
    </div>
  );
}
//className={styles.routes}
