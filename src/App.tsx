import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import Nav from './components/nav/NavComponent';
import Login from './pages/Login';
import DashboardComponent from './components/dashboard/DashboardComponent';
import Users from './pages/Users';
import SingleUser from './pages/SingleUser';
import MainLayout from './components/layout/MainLayout';

function App() {
 
  return (
   <div className="main">
    <BrowserRouter>
  
  <Nav/>
  <Routes>
   
   <Route path='/login' element={<Login />} />
   <Route path='/dashboard' element={<DashboardComponent/> } />
   <Route path='/users' element={<Users/>} />
   <Route path='/' element={<Users/>} />
   
   <Route path='/personal' element={<SingleUser/>} />
   {/* <Route path='/layout' element={<MainLayout />} /> */}
  </Routes>

  </BrowserRouter>
   </div>
  );
}

export default App;
