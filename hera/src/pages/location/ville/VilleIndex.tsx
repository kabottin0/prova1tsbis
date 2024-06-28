import { Outlet } from "react-router-dom"


const VilleIndex = () => {


  return (
    <>
    <div>
      <h1>Ville in lista by mi piace</h1>
      <a href='/ville/1'>
        <h3>Clicca sulla villa scelta</h3>
      </a>
      <Outlet />
    </div>
    </>
  )
}


export default VilleIndex