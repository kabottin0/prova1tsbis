import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import VilleIndex from '../location/ville/VilleIndex';
import SaleIndex from '../location/sale/SaleIndex';
import DimoreIndex from '../location/dimore/DimoreIndex';
import CateringIndex from '../location/catering/CateringIndex';
import Location1 from '../location/Location1';
import Menu from '../Menu';



const RoutesIndex = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='ville' element={<VilleIndex />}></Route>
        <Route path='ville/:villeid' element={<Location1 />}></Route>
        <Route path='sale' element={<SaleIndex />}></Route>
        <Route path='sale/:saleid' element={<Location1 />}></Route>
        <Route path='dimore' element={<DimoreIndex />}></Route>
        <Route path='dimore/:dimoreid' element={<Location1 />}></Route>
        <Route path='/catering' element={<CateringIndex />}></Route>
        <Route path='catering/:cateringid' element={<Location1 />}></Route>
        <Route path='/menu' element={<Menu />}></Route>

      </Routes>
    </>
  )
}

export default RoutesIndex
