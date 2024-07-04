import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import VilleIndex from '../location/ville/VilleIndex';
import SaleIndex from '../location/sale/SaleIndex';
import DimoreIndex from '../location/dimore/DimoreIndex';
import CateringIndex from '../location/catering/CateringIndex';
import Location1 from '../location/Location1';
import Menu from '../Menu';
import Villa from '../location/ville/Villa';
import MenuVille from '../location/ville/MenuVille';
import Sala from '../location/sale/Sala';
import SalaMenu from '../location/sale/SalaMenu';
import DimoraMenu from '../location/dimore/DimoraMenu';
import CateringMenu from '../location/catering/CateringMenu';
import Dimora from '../location/dimore/Dimora';
import Catering from '../location/catering/Catering';



const RoutesIndex = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='ville' element={<VilleIndex />}></Route>
        <Route path='ville/:villeid' element={<Villa />}></Route>
        <Route path='sale' element={<SaleIndex />}></Route>
        <Route path='sale/:saleid' element={<Sala />}></Route>
        <Route path='dimore' element={<DimoreIndex />}></Route>
        <Route path='dimore/:dimoreid' element={<Dimora />}></Route>
        <Route path='/catering' element={<CateringIndex />}></Route>
        <Route path='catering/:cateringid' element={<Catering />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/menu/villa/:locationId' element={<MenuVille />}></Route>
        <Route path='/menu/sala/:locationId' element={<SalaMenu />}></Route>
        <Route path='/menu/dimora/:locationId' element={<DimoraMenu />}></Route>
        <Route path='/menu/catering/:locationId' element={<CateringMenu />}></Route>



      </Routes>
    </>
  )
}

export default RoutesIndex
