"use client";
import Navigator from "@/componets/Navigator/Navigator";
import styles from "./lineal-congruente.module.css";

<<<<<<< HEAD
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Layout } from "@/componets/Layouts/Layout";

const initState = {
  x0: "",
  a: "",
  c: "",
  m: "",
};
=======
import Form from "@/componets/Form/Form";
>>>>>>> upstream/main

export default function LinealCongruente() {
  return (
<<<<<<< HEAD
    <Layout>
      <div className={styles.main}>
        <div className={styles.fondo}>
          <div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                placeholder="Ingrese x0:"
                type="text"
                id="x0"
                name="x0"
                value={data.x0}
                onChange={handleChange}
              />
              <input
                className={styles.input}
                placeholder="Ingrese a:"
                type="text"
                id="a"
                name="a"
                value={data.a}
                onChange={handleChange}
              />
              <input
                className={styles.input}
                placeholder="Ingrese c:"
                type="text"
                id="c"
                name="c"
                value={data.c}
                onChange={handleChange}
              />
              <input
                className={styles.input}
                placeholder="Ingrese m:"
                type="text"
                id="m"
                name="m"
                value={data.m}
                onChange={handleChange}
              />

              <button className={styles.boton} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
=======
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
      <Form />
    </>
>>>>>>> upstream/main
  );
}
