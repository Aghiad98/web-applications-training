import { Routes, Route } from "react-router-dom";

import Welcome from "./Welcome";
import Signup from "./Signup";
import DashboardLayout from "./DashboardLayout";

import Home from "./dashboard/Home";
import Products from "./dashboard/products";
import Services from "./dashboard/services";
import Contact from "./dashboard/contact";
import Settings from "./dashboard/settings";
import UserProfile from "./dashboard/UserProfile";

function App() {
  return (
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
  );
}

export default App;