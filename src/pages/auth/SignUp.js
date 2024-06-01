import { ErrorMessage, Field,Form, Formik } from "formik";

import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import {
  BsGoogle,
  BsFacebook,
  BsApple,  
} from "react-icons/bs";

import { ToastContainer } from "react-toastify";
import "react-toastify";

// const schema = Yup.object().shape({
//    firstName: Yup.string()
//   .required("Name is a required "),
 
//   lastName: Yup.string()
//   .required("Name is a required "),

//   email: Yup.string()
//     .required("Email is a required ")
//     .email("Invalid email format"),
//   password: Yup.string()
//     .required("Password is a required ")
//     .min(8, "Password must be at least 8 characters"),
// });

const SignUp = () => {
 





  const initialValues ={
    firstName:'',
    lastName:"",
    email:'',
    password:''
  }
  


  const validate=(values)=>{
    const errors={}
    if (!values.firstName) {
     errors.firstName="name requird"
    }
    if(!values.lastName){
      errors.lastName="name is requird" 
     }
     if (!values.email) {
      errors.email = 'email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
     if(!values.password){
      errors.password="password is requird" 
     }
     return errors;
  }

  const haddleSubmit =(values,{setSubmitting}) => {
    console.log("🚀 ~ file: SignUp.js:55 ~ haddleSubmit ~ values:", values)
   
    
    setSubmitting(false)
     
  }

 

  return (
    <div className="container-fluid">
      <div className="row p-3">
        <div className="col-md-4"></div>
        <div className="col-md-4 mt-4">
          <Formik
           initialValues={initialValues}
           onSubmit={haddleSubmit}
           validate={validate}
          
           
          >
            {({ isSubmitting }) => (
          <Form
         
            className="bg-white p-4 rounded-5 shadow-lg"
           
          >
            <div className="pt-2 ">
              <h1 className=" text-center">Sign up</h1>

              <p className=" px-5 pt-3 text-center">
                {" "}
                Hy, Enter you details to get sign up to your acount{" "}
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <Field
                type="firstName"
                name="firstName"
                className="form-control"
                id="exampleInputname"
                aria-describedby="nameHelp"
                placeholder="Enter name"
              
              />
              <ErrorMessage
                      name="firstName"
                      component="div"
                      className="errors text-danger"
                    />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <Field
                type="lastName"
                name="lastName"
                className="form-control"
                id="exampleInputname"
                aria-describedby="nameHelp"
                placeholder="Enter name"
               
              />
                <ErrorMessage
                      name="lastName"
                      component="div"
                      className="errors text-danger"
                    />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <Field
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
               
              />
                <ErrorMessage
                      name="email"
                      component="div"
                      className="errors text-danger"
                    />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <Field
                type="password"

                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter password"
               
              />
                   <ErrorMessage
                      name="password"
                      component="div"
                      className="errors text-danger "
                    />
            </div>
            <div className="row bg-white px-3 mt-5 ">
              <button
                type="submit"
                className="btn btn-warning"
                disabled={  isSubmitting}
              >
                Sign up
              </button>
            </div>

            <p className="p-2 pt-5 text-center"> -- Or Sign in with --</p>

            <div className="container">
              <div className="row  bg-white pb-4">
                <div className="col-lg-2"></div>
                <div className="col-lg-9 text-center ">
                  <div className=" d-flex ">
                    <a
                      className=" btn-floating  mx-1   "
                      style={{ textDecoration: "none" }}
                      href="#!"
                      role="button"
                    >
                      <BsGoogle /> Google
                    </a>

                    <a
                      className=" btn-floating  mx-1"
                      style={{ textDecoration: "none" }}
                      href="#!"
                      role="button"
                    >
                      <BsFacebook /> Facebook
                    </a>

                    <a
                      className=" btn-floating  mx-1"
                      style={{ textDecoration: "none" }}
                      href="#!"
                      role="button"
                    >
                      <BsApple /> Apple
                    </a>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </Form>
          )}
          </Formik>
        </div>
      </div>
      <div className="col-md-4"></div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default SignUp;

{
  /* <div className="row ">
<div className="mb-2 ">
  <span
    className=" btn-floating  bg-light  p-2 ">
      
  
      
      Google
   
  </span>

  <span
    className=" btn-floating   bg-light  p-2" >
  
    AppleID
  </span>

  <span
    className="  btn-floating  bg-light  p-2">
  
    Facebook
  </span>
  <div className="row"></div>
</div>
</div> */
}
