import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useResolvedPath } from 'react-router-dom'

const Location1 = () => {
  const { dimoreid, villeid, saleid, cateringid } = useParams()
  const [statusParams, setStatusParams] = useState('')
  const [nameParams, setNameParams] = useState('')

  const location = useLocation()
  const path = location.pathname;
  useEffect(() => {
    if (dimoreid) {
      setStatusParams(dimoreid)
      setNameParams('Dimora')
    } else if (villeid) {
      setStatusParams(villeid)
      setNameParams('Villa')
    } else if (saleid) {
      setStatusParams(saleid)
      setNameParams('Sale')
    } else if (cateringid) {
      setStatusParams(cateringid)
      setNameParams('Catering')
    }
  }, [dimoreid, villeid, saleid, cateringid])


  return (
    <>
      <div>
        <h1>{nameParams} {statusParams}</h1>
      </div>
      <div>
        <a href='/menu'>
          <h3>Personalizza il tuo menù</h3>
        </a>
      </div>

    </>
  )
}

export default Location1
