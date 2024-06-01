import React from "react";
import Navbar from "../../pages/Navbar";
import Sidebar from "../../pages/Sidebar";
import Footer from "../../pages/Footer";

function Layout(props) {
  const token = localStorage.getItem("token");
  return (
    <div>
      
      {/* {!token &&
       <Navbar/>
       } */}
         <Navbar/>
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
