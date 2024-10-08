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
import Img from '../Img';
import SignUp from '../Login/Signup';
import Login from '../Login/Login';
import SignUpLocation from '../Login/SignUpLocation';
import SignUpUsers from '../Login/SignUpUsers';
import LoginLocation from '../Login/LoginLocation';
import LoginUsers from '../Login/LoginUsers';





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
        <Route path='/upload' element={<Img />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup/location' element={<SignUpLocation />}></Route>
        <Route path='/signup/users' element={<SignUpUsers />}></Route>
        <Route path='/login/location' element={<LoginLocation />}></Route>
        <Route path='/login/user' element={<LoginUsers />}></Route>








      </Routes>
    </>
  )
}

export default RoutesIndex
