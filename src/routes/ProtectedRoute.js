import React, { useEffect } from "react";

import { useNavigate, Navigate, Link } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    else {
      navigate('/product');
    }
  }, []);
  return children;
};
export default ProtectedRoute;
