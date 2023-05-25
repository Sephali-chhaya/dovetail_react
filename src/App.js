import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/homePage/Home';
import Login from './pages/loginPage/Login';
import Dashboard from './pages/dashboardPage/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
=======
//import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { styled, useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import MiniDrawer from './Components/sidebar/SideBar2';

import Home from './pages/homePage/Home';
import Login from './pages/loginPage/Login';
import Dashboard from './pages/dashboardPage/Dashboard';
import MasterEntery from './pages/masterEntery/MasterEntry';
import Dashboard2 from './pages/dashboardPage/Dashboard2';
import Loader from './Components/Loader/Loader';
import Profile from './pages/Profile/Profile';
import ChangePassword from './pages/ChangePassword/ChangePassword';
function App() {

    // const [isLoaderActive, setIsLoaderActive] = useState(false)

    const isLoaderActive = useSelector((state)=>state.loader.isLoaderActive)

  return (
    <>
        {isLoaderActive && <Loader/>}
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/Login' element={<Login />} /> */}
            <Route path='/Dashboard' element={<Dashboard2 />} />
            <Route path='/MasterEntery' element={<MasterEntery/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/change-password' element={<ChangePassword/>} />
        </Routes>

    </>
>>>>>>> master
  );
}

export default App;
