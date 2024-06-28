import React from 'react'
import { Outlet } from 'react-router-dom'

const SaleIndex = () => {
  return (
    <>
    <div>
      <h1>Sale in lista by mi piace</h1>
      <a href='/sale/1'>
        <h3>Clicca sulla sala scelta</h3>
      </a>
      <Outlet />
    </div>
    </>
  )
}

export default SaleIndex
