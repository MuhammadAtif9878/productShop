import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getApiData } from '../../redux/actions/Action'
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import {

  BsGoogle,
  BsFacebook,
  BsApple,

} from "react-icons/bs";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const initialValues = {
    username: "",
    password: "",
  };



  const handleSubmit = (values, { setSubmitting }) => {
    console.log("🚀 ~ file: Login.js:20 ~ handleSubmit ~ values:", values)
    dispatch(getApiData(values.username, values.password, navigate));
    console.log(values.password)
    setSubmitting(false);

  };

  const validate = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row p-3">
          <div className="col-md-4"></div>
          <div className="col-md-4 mt-4">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validate={validate}
            >
              {({ isSubmitting }) => (
                <Form className="bg-white p-4 rounded-5 shadow-lg">
                  <div className="pt-2">
                    <h1 className="text-center">Login</h1>
                    <p className="px-5 pt-3 text-center">
                      Hy, Enter your details to sign in to your account
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Please enter username"
                      name="username"
                    />
                    <ErrorMessage
                      name="username"
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
                      placeholder="Please enter password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="errors text-danger"
                    />
                  </div>
                  <div className="row bg-white px-3 mt-5">
                    <button
                      type="submit"
                      className="btn btn-warning"
                      disabled={isSubmitting}
                    >
                      Sign in
                    </button>
                  </div>
                  <p className="p-2 pt-5 text-center">-- Or Sign in with --</p>
                  <div className="container">
                    <div className="row bg-white pb-4">
                      <div className="col-lg-2"></div>
                      <div className="col-lg-9 text-center">
                        <div className="d-flex">
                          <a
                            className="btn-floating mx-1"
                            style={{ textDecoration: "none" }}
                            href="#!"
                            role="button"
                          >
                            <BsGoogle /> Google
                          </a>
                          <a
                            className="btn-floating mx-1"
                            style={{ textDecoration: "none" }}
                            href="#!"
                            role="button"
                          >
                            <BsFacebook /> Facebook
                          </a>
                          <a
                            className="btn-floating mx-1"
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
        <div className="col-lg-4"></div>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
};

export default Login;

































// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { getApiData } from "../../redux/actions/Action";
// import LoginReducer from "../../redux/reducer/LoginReducer";
// import Navbar from "../Navbar";
// import {
//   BsStar,
//   BsGoogle,
//   BsFacebook,
//   BsApple,
//   BsStarHalf,
// } from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { Formik, Form, Field } from "formik";
// import { useFormik } from "formik";

// const validation = (values) => {
//   let errors = {};
//   if (!values.username) {
//     errors.username = "name is required";
//   } else {
//     errors.username = null;
//   }
//   if (!values.password) {
//     errors.password = "name is required";
//   } else {
//     errors.password = null;
//   }
//   return errors;
// };

// const Login = () => {
//   const dispatch = useDispatch("");
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//   });
//   const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     });
//   };
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrors(validation(values));
//     dispatch(getApiData(username, password, navigate));
//   };
//   const token = localStorage.getItem("token");

//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row p-3">
//           <div className="col-md-4"></div>
//           <div className="col-md-4 mt-4">
//             <Form
//               onSubmit={handleSubmit}
//               className="bg-white p-4 rounded-5 shadow-lg"
//             >
//               <div className="pt-2 ">
//                 <h1 className=" text-center">Login </h1>

//                 <p className=" px-5 pt-3 text-center">
//                   {" "}
//                   Hy, Enter you details to get sign in to your acount{" "}
//                 </p>
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Email address</label>
//                 <Field
//                   type="text"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   Placeholder="please Enter username"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                 />
//                 {errors.username && <p className="errors">{errors.username}</p>}
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Password</label>
//                 <Field
//                   type="password"
//                   name="password"
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   Placeholder=" please Enter password"
//                   value={values.password}
//                   onChange={handleChange}
//                 />
//                 {errors.password && <p className="errors">{errors.password}</p>}
//               </div>
//               <div className="row bg-white px-3 mt-5 ">
//                 <button type="submit" className="btn btn-warning">
//                   Sign in
//                 </button>
//               </div>

//               <p className="p-2 pt-5 text-center"> -- Or Sign in with --</p>
//               <div className="container">
//                 <div className="row  bg-white pb-4 ">
//                   <div className="col-lg-2"></div>
//                   <div className="col-lg-9 text-center ">
//                     <div className=" d-flex ">
//                       <a
//                         className=" btn-floating  mx-1   "
//                         style={{ textDecoration: "none" }}
//                         href="#!"
//                         role="button"
//                       >
//                         <BsGoogle /> Google
//                       </a>

//                       <a
//                         className=" btn-floating  mx-1"
//                         style={{ textDecoration: "none" }}
//                         href="#!"
//                         role="button"
//                       >
//                         <BsFacebook /> Facebook
//                       </a>

//                       <a
//                         className=" btn-floating  mx-1"
//                         style={{ textDecoration: "none" }}
//                         href="#!"
//                         role="button"
//                       >
//                         <BsApple /> Apple
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-2"></div>
//                 </div>
//               </div>
//             </Form>
//           </div>
//         </div>
//         <div className="col-lg-4"></div>
//       </div>
//       <ToastContainer position="top-center" />
//     </>
//   );
// };

// export default Login;
