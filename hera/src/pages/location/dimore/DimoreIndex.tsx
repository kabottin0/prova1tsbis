import React from 'react'
import { Outlet } from 'react-router-dom'

const DimoreIndex = () => {

  return (
    <>
    <div>
      <h1>Dimore in lista by mi piace</h1>
      <a href='/dimore/1'>
        <h3>Clicca sulla villa scelta</h3>
      </a>
      <Outlet />
    </div>
    </>
  )
}

export default DimoreIndex
