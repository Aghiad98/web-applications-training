import { Routes, Route } from "react-router-dom";

import Welcome from "./Welcome";
import Signup from "./Signup";
import DashboardLayout from "./Dashboardlayout";

import Home from "./dashboard/Home";
import Products from "./dashboard/products";
import Services from "./dashboard/services";
import Contact from "./dashboard/contact";
import Settings from "./dashboard/settings";
import UserProfile from "./dashboard/UserProfile";
import { useState } from "react";
import UserContext from "./UserContext";

function App() {
  const [user,setUser]=useState(null)
  return (
    <UserContext.Provider value={{user,setUser}}>
 <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="settings" element={<Settings />} />
        <Route path="UserProfile" element={<UserProfile/>}/>
      
      
       
      </Route>
    </Routes>

    </UserContext.Provider>
   
  );
}

export default App;