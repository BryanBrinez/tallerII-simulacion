"use client";
import Navigator from "@/componets/Navigator/Navigator";
import styles from "./lineal-congruente.module.css";
import { Routes } from "@/app/models/route.model";

import { useState } from "react";
import { useRouter } from "next/navigation";

const initState = {
  x0: "",
  a: "",
  c: "",
  m: "",
};

export default function LinealCongruente() {
  const [data, setData] = useState(initState);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    const { x0, a, c, m } = data;
    console.log(x0)
 
    // Send data to API route
    const res = await fetch("http://localhost:3000/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        x0,
        a,
        c,
        m,
      }),
    });

    const result = await res.json();
    console.log(result);

    // Navigate to thank you
    
  };

  const handleChange = (e) => {
    const name = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const canSave = [...Object.values(data)].every(Boolean);
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
    </>
  );
}
