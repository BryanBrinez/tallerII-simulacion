import Navigator from "@/componets/Navigator/Navigator";
import { Routes } from "../models/route.model";
import styles from "./generadores.module.css";

export default function page() {
  return (
    <>
      <div className={styles.nav}>
        <Navigator
          pathNames={[
            Routes.HOME,
            Routes.LINEAL_CONGRUENTE,
            Routes.ESTANDAR_MINIMO,
            Routes.ESTANDAR_MINIMO_FACT,
          ]}
        />
      </div>
    </>
  );
}
