import React, { useEffect, useState } from "react";
import { BsCart, BsCart4, BsSafe, BsSave2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import CartReducer from "../redux/reducer/CartReducer";
import { Link, useLocation, useNavigate,} from "react-router-dom";

const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const token = localStorage.getItem("token");
  const location = useLocation();

  useEffect(() => {
    if (token) {
      setAuth(true);
      
    }
  }, [token]);

  const count = useSelector((state) => state?.CartReducer?.cart);
   console.log("count", count);


   const navigate =useNavigate()



   const handleLogout = () => {  
    localStorage.removeItem('token');
  };

  useEffect(()=>{
    if(!token){
    
      navigate("/login")
      setAuth(false);
    }
  },[token])



  return (
    <div className="container-fluid sticky-sm-top shadow-lg">
      <div className="row ">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
  <div className="container-fluid ">
  <h1 className="navbar-brand  text-white   " href="#" style={{marginLeft:'100px'}} >Navbar</h1>  
    <button className="navbar-toggler bg-white  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
        <li>
       
        </li>
      
      </ul>
      <form className="d-flex">  <ul className="navbar-nav">
      <li className="nav-item">
       
      </li>
      {!auth && (
        <ul className="navbar-nav "style={{marginRight:"300px"}}>
          <li className="nav-item ">
            <Link to="/login" className="text-decoration-none ">
              <a
                className="nav-link active text-white text-decoration-none mx-3"
                aria-current="page"
                href="#"
              >
                Login
              </a>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/signUp" className="text-decoration-none">
              <a
                className="nav-link active text-white text-decoration-none mx-3"
                aria-current="page"
                href="#"
              >
                SingUp
              </a>
            </Link>
          </li>
        </ul>
      )}

      {auth && (
        <ul className="navbar-nav "style={{marginRight:"300px"}}>

        
        <li className="nav-item mx-2">
        <Link to="/product" className='text-decoration-none '>
          <a className="nav-link active text-white text-decoration-none  " aria-current="page" href="#">
            Product
          </a>
        </Link>
      </li>
      <li className="nav-item " style={{width:"30px"}}>
     
            
          
     </li>     
     
       
        <li className="nav-item  ">
        
        <a
        className="nav-link active text-white text-decoration-none "
        aria-current="page"
        href="#"
        onClick={handleLogout}
      >
          Logout
      </a>
         
        </li>
        <li className="nav-item " style={{width:"30px"}}>
     
            
          
      </li>
     
     
        <Link to="/cart" className="text-decoration-none mx-3">
        <li className="nav-item ">
        
        <BsCart style={{ width: "20px", marginTop: "28px",color:"white" }} />
            <span
              className="bg-primary rounded-2 text-white "
              style={{ marginBottom: "11px", padding: "3px" }}
            >
              {count?.length}
            </span>
         
        </li>
        </Link>
        <li className="nav-item " style={{width:"60px"}}>        
      </li>    
      </ul>
        
      )}
    </ul>
      </form>
    </div>
  </div>
</nav>
      </div>
    </div>
  );
};

export default Navbar;


