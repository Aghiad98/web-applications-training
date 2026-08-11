import {Route, Routes } from "react-router-dom";
import './App.css';
// import './DashboardLayout.css'
import Home from './pages/Home';
import Products from './pages/Products';
import Settings from './pages/Settings';
import ProductDetails from './pages/ProductDetails';

import DashboardLayout from './DashboardLayout'
import UserProfile from "./pages/UserProfile";
import ThemeSettings from "./pages/ThemeSettings";
import CurrencySettings from "./pages/CurrencySettings";
function App(){
   return (
    <>
   
     <Routes>
        <Route path="/" element={<DashboardLayout/>}>
        <Route index  element = {<Home/>}/>
        <Route path ='Products' element = {<Products/>}/>
        <Route path ='ProductDetails/:id' element = {<ProductDetails/>}/>
        <Route path ='Settings' element = {<Settings/>}/>
        <Route path="Settings/UserProfile" element={<UserProfile/>}/>
        <Route path="Settings/ThemeSettings" element={<ThemeSettings/>}/>
        <Route path="Settings/CurrencySettings" element={<CurrencySettings/>}/>
        </Route>
      </Routes> 

    </>
  )
}
 

export default App
