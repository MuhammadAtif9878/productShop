import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";


import {
  BsStar,
  BsGoogle,
  BsFacebook,
  BsApple,
  BsStarHalf,
  BsBack,
  BsBackspace,
  BsBank2,
  BsArrowBarRight,
  BsArrowBarLeft,
  BsUpload,
  
} from "react-icons/bs";

 
  // console.log("🚀 ~ file: CartDetails.js:7 ~ CartDetails ~ product:", product);


import productReducer from "../../redux/reducer/ProductReducer";
import ProductDetailReducer from "../../redux/reducer/ProductDetailReducer"
import {productAction} from "../../redux/actions/Action";
import { productDetailAction } from "../../redux/actions/Action";
import { productAddCart } from "../../redux/actions/Action";
import StarRatings from "../../components/StarRatings/StarRatings";

export default function Product() {
  const productList = useSelector((state) => state?.productReducer?.productList?.data);
   console.log("🚀 ~ file: Index.js:62 ~ Weather ~ productListwwww:", productList);
   const loading = useSelector((state) => state?.productReducer?.loading);
   console.log("🚀 ~ file: Product.js:33 ~ Product ~ loding:", loading)
  const dispatch = useDispatch();
 
 
  useEffect(()=>{
 
    dispatch(productAction())
   
  },[])


  return (
    <div className="container">
      
{loading ? (
  <h1 className="text-center"><i className="fas fa-spinner fa-pulse"></i>loading...</h1>
) : (
  <div className="row">
        
  {productList?.products.map((item, key) => {
    return (
    
      <div className="col-md-4 card rounded-5 text-center p-1  "
     
        key={key}
        style={{ width: "340px", margin: " 33px auto"}}>
                <button
    className=" btn btn-light  rounded-5"
 
   onClick={() => dispatch(productDetailAction(item.id))}>
       <Link to={`/product/detail/${item.id}`} className="text-decoration-none text-start ">
        <div className="cart-header" >
          <img
            src={item.thumbnail}
            alt="..."
            style={{
              width: "100%",
              height: "180px",
              borderRadius: "15px",
            }}
          />
        </div>
        <div className="card-body  " style={{
              width: "100%",
              height: "400px",
              borderRadius: "15px",
            }}>
        <h4 className="card-title mt-5">{item.title}</h4>
        <p className="card-text mt-3"><StarRatings ratings= {item?.rating}/></p>
        <p className="card-text ">Brand : {item?.brand}</p>
        <h5 className="card-text">price : <span className=" mx-2">{item?.price}</span> </h5>
        <h6 className="card-text mt-4">discount : <span className=" mx-2">{item?.discountPercentage
         }</span> </h6>
        <p className="card-text mt-3  ">{item?.description}</p>
        </div>
        </Link>
      
        </button>
        <div className="d-flex p-4  ">
          <div className="col-md-6">
        <button type="button" className="btn btn-primary "  onClick={() => dispatch(productAddCart(item))}>Add To Cart</button>
        </div>
        <div className="col-md-6">
        <Link to={`/product/detail/${item.id}`}> <button type="button" className="btn btn-primary mx-3 "  onClick={() => dispatch(productDetailAction(item.id))}>Details </button></Link>
        </div>
       
        </div>
      </div>
    );
  })}
       <div className="col-md-4"></div>     
  <div className="col-md-4 "></div>
</div>
)}
    </div>
  );
}





// {!productList ? (
//   <h1 className=" text-center p-2" >Search city and press</h1>
// ) : loading ? (
//   <h1 className="text-center">loading...</h1>
// ) : productList.message ? (
//   <h1 className="text-center p-2 ">{productList.message}</h1>
// ) : (
//   <div className="row">
        
//   {productList?.products.map((item, key) => {
//     return (
    
//       <div className="col-md-4 card rounded-5 text-center p-1  "
     
//         key={key}
//         style={{ width: "340px", margin: " 33px auto"}}>
//                 <button
//     className=" btn btn-light ms-2"
 
//    onClick={() => dispatch(productDetailAction(item.id))}>
//        <Link to={`/product/detail/${item.id}`} className="text-decoration-none text-start">
//         <div className="cart-header" >
//           <img
//             src={item.thumbnail}
//             alt="..."
//             style={{
//               width: "100%",
//               height: "180px",
//               borderRadius: "15px",
//             }}
//           />
//         </div>
//         <div className="card-body  " style={{
//               width: "100%",
//               height: "400px",
//               borderRadius: "15px",
//             }}  >
//         <h4 className="card-title mt-5">{item.title}</h4>
//         <p className="card-text mt-3"><StarRatings ratings= {item?.rating}/></p>
//         <p className="card-text ">Brand : {item?.brand}</p>
//         <h5 className="card-text">price : <span className=" mx-2">{item?.price}</span> </h5>
//         <h6 className="card-text mt-4">discount : <span className=" mx-2">{item?.discountPercentage
//          }</span> </h6>
//         <p className="card-text mt-3  ">{item?.description}</p>
//         </div>
//         </Link>
      
//         </button>
//         <div className="d-flex p-4  ">
//           <div className="col-md-6">
//         <button type="button" className="btn btn-primary "  onClick={() => dispatch(productAddCart(item))}>Add To Cart</button>
//         </div>
//         <div className="col-md-6">
//         <Link to={`/product/detail/${item.id}`}> <button type="button" className="btn btn-primary mx-3 "  onClick={() => dispatch(productDetailAction(item.id))}>Details </button></Link>
//         </div>
       
//         </div>
//       </div>
//     );
//   })}
//        <div className="col-md-4"></div>     
//   <div className="col-md-4 "></div>
// </div>
// )}