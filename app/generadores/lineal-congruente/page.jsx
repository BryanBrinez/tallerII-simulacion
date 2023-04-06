"use client";
import Navigator from "@/componets/Navigator/Navigator";
import styles from "./lineal-congruente.module.css";
import { Routes } from "@/app/models/route.model";
//import { numRandom } from "./services/generadorLinealCongruente";

import Form from "@/componets/Form/Form";

export default function LinealCongruente() {
  
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
      <Form props={{id:"1",name:"Lineal Congruente"}}/>
    </>
  );
}
