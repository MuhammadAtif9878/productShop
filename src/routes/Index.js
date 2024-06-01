import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import Product from "../pages/product/Product";
import ProductDetails from "../pages/product/ProductDetails";
import Cart from "../pages/product/Cart";
import Logout from "../pages/Logout";

const Index = () => {
 
  return (
    <Routes>
      <Route path="/home" element={ 
        <ProtectedRoute>
      <Home/>
      </ProtectedRoute>
      } 
      />
      <Route path={`/product/detail/:id`} element={
      <ProtectedRoute>
      <ProductDetails />
      </ProtectedRoute>
      }/>
      <Route
        path="/product"
        element={
          <ProtectedRoute>
           <Product/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        }
      />

      <Route path="/signup" element={
       <ProtectedRoute>
      <SignUp />
      </ProtectedRoute>
      } />
      <Route path="/cart" element={
    <ProtectedRoute>
    <Cart/>
    </ProtectedRoute>
      
      }/>
     {/* <Route path="/logout" element={
        <ProtectedRoute>
      <Logout/>
      </ProtectedRoute>
      }/> */}
     </Routes>
  );
};

export default Index;
