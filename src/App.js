import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/homePage/Home';
import Login from './pages/loginPage/Login';
import Dashboard from './pages/dashboardPage/Dashboard';
import MasterEntery from './pages/masterEntery/MasterEntry';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/Login' element={<Login />} /> */}
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/MasterEntery' element={<MasterEntery/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
