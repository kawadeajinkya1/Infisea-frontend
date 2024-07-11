import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from "axios";
import Cookies from "js-cookie";
import ProtectedRoute from './AdminRoutes';


// Your components
import Bpp from "./Pages/Bpp";
import Abt from "./Pages/About";
import Cnt from "./Pages/Contact";



import Lg from "./Components/Admin/Login";
import Uap from "./Components/Admin/Orders";
import Uapp from "./Components/Admin/Updateproduct";  
import Dashboard from "./Components/Admin/Dashboard"

import Suc from "./Components/Customer/Signup";
import Lgc from "./Components/Customer/Login";
import Ucp from "./Components/Customer/Updateprofile";
import Cd from "./Components/Customer/Card";
import Cart from "./Components/Customer/Cart";
import Wishlist from "./Components/Customer/Wishlist";
import Buy from "./Components/Customer/Buy"
import Codf from "./Components/Customer/Order"
import Print from "./Components/Customer/Print"

import Mul from "./Components/Othertp/Multiimg";
import Btnselect from "./Components/Othertp/btnselect";
import Cer from "./Components/Othertp/Create";
import Dyna from "./Components/Othertp/Dyna";
import Dyna1 from "./Components/Othertp/Dyna1";
import Nf from "./Pages/Nf";

axios.defaults.withCredentials=true;

function App() {
  const userPrimaryKey = Cookies.get('userPrimaryKey');
  const custPrimaryKey = Cookies.get('custPrimaryKey');

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<Abt />} />
          <Route path="/contact" element={<Cnt />} />
          <Route path="/" element={<Cd />} />

          <Route path="/login" element={<Lg />} />
          <Route path="/customersignup" element={<Suc />} />
              <Route path="/customerlogin" element={<Lgc />} />

          {/* Routes requiring userPrimaryKey */}
 <Route element={<ProtectedRoute />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Orders" element={<Uap />} />
        <Route path="/Updateproduct/:CategoryID" element={<Uapp />} />
 </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;








/*


{userPrimaryKey ? (
      <>
       
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Orders" element={<Uap />} />
        <Route path="/Updateproduct/:CategoryID" element={<Uapp />} />
      </>
    ) : (
          <Route path="*" element={<Navigate to="/Nf" />} />
    )}

       
          {custPrimaryKey ? (
            <>
              <Route path="/Home" element={<Cd />} />
              <Route path="/Updatecustprofile" element={<Ucp />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Wishlist" element={<Wishlist />} />
              <Route path="/Buy" element={<Buy />} />
               <Route path="/OrderHistory" element={<Codf />} />
               <Route path="/Printorder/:OrderID" element ={<Print />} />
             </>
          ) : (
                 <Route path="*" element={<Navigate to="/Nf" />} />
          )}

          <Route path="/Mul" element={<Mul />} />
          <Route path="/Cer" element={<Cer />} />
          <Route path="/btnselect" element={<Btnselect />} />
          <Route path="/Dyna" element={<Dyna />} />
          <Route path="/Dyna1" element={<Dyna1 />} />

          <Route path="/Nf" element={<Nf />} />


          */