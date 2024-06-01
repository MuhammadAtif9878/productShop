import React from 'react';



const Logout = () => {


    
  
    const handleLogout = () => {  
      localStorage.removeItem('token');
   
    };
  
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };
  
  export default Logout;
