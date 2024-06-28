import React from 'react'
import { Outlet } from 'react-router-dom'

const CateringIndex = () => {
  return (
    <>
    <div>
      <h1>Catering in lista by mi piace</h1>
      <a href='/catering/1'>
        <h3>Clicca sulla villa scelta</h3>
      </a>
      <Outlet />
    </div>
    </>
  )
}

export default CateringIndex
