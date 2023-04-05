import { Routes } from '@/app/models/route.model'
import React from 'react'
import Navigator from '../Navigator/Navigator'

export const Layout = ({children}) => {
  return (
      <>
        <Navigator
          pathNames={[
            Routes.HOME,
            Routes.LINEAL_CONGRUENTE,
            Routes.ESTANDAR_MINIMO,
            Routes.ESTANDAR_MINIMO_FACT,
          ]}
        />
        {children}
      </>
  )
}
