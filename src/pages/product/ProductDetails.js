import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailReducer from "../../redux/reducer/ProductDetailReducer";
import { productDetailAction } from "../../redux/actions/Action";
import { productAddCart } from "../../redux/actions/Action";
import { increment } from "../../redux/actions/Action";
import { decrement } from "../../redux/actions/Action";
import CartReducer from "../../redux/reducer/CartReducer";
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
} from "react-icons/bs";
import StarRatings from "../../components/StarRatings/StarRatings";
const ProductDetails = () => {
  const product = useSelector(
    (state) => state?.ProductDetailReducer?.productDetailtList
  );
  console.log("🚀 ~ file: CartDetails.js:7 ~ CartDetails ~ product:", product);

  const count = useSelector((state) => state?.CartReducer?.cart);
  console.log("1count", count);
  const dispatch = useDispatch();

  return (
    <div className="container ">
      <div className="row text-end">
        <div className="col-md-6"></div>
        <div className="col-md-5 pt-3">
          <Link to="/product">
            <button className="btn btn-white bg-white mx-2 ">
              <BsArrowBarLeft />
              Back
            </button>
          </Link>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1">
          <div className="pt-5"></div>
        </div>

        <div className="col-md-10">
          <div className="row p-4">
            <div className="card">
              <div className="card-body">
                <div className="row d-flex ">
                  <div className="col-md-4 p-2">
                    {" "}
                    <img
                      src={product.thumbnail}
                      alt=""
                      style={{ width: "100%", height: "450px" }}
                    />
                  </div>

                  <div className="col-md-6 bg-white">
                    <div className="card-header">
                      <h2 className="card-title p-2">{product.title}</h2>
                      <p className=" text-primary">
                        {" "}
                        <StarRatings ratings={product.rating} />
                        {product.category}
                      </p>
                      <p className=" text-primary">
                        {" "}
                        brand : {product.brand} | stock : {product.stock}
                      </p>
                    </div>
                    <div className="">
                      <p className="card-text pt-4 px-4 text-dark">
                        {" "}
                        {product.description}
                      </p>
                      <h2
                        className="card-title p-2 px-4"
                        style={{ color: "#F96306" }}
                      >
                        {" "}
                        Rs : {product.price}
                      </h2>

                      <button
                        type="submit"
                        className="btn btn-primary mt-5 mx-4 px-4 "
                        onClick={() => dispatch(productAddCart(product))}
                      >
                        {" "}
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 ">
                    <div className="row bg-bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1 "></div>
      </div>
    </div>
  );
};

export default ProductDetails;

// <div className="card rounded-5  ">
// <div className="cart-header">
//   <img
//     src={product?.thumbnail}
//     alt="..."
//     style={{
//       borderRadius: "30px",
//       width: "100%",

//     }}
//   />
// </div>
// <div className="card-body px-5 ">
//   <h4 className="card-title mt-5">Card title {product.title}</h4>
//   <p className="card-text mt-3">rating : {product?.rating}</p>
//   <p className="card-text ">Brand : {product?.brand}</p>
//   <h5 className="card-text">
//     price : <span className=" mx-5">{product?.price}</span>{" "}
//   </h5>
//   <h6 className="card-text mt-4">
//     discountPercentage :{" "}
//     <span className=" mx-5">{product?.discountPercentage}</span>{" "}
//   </h6>
//   <p className="card-text mt-3  ">{product?.description}</p>

// <button
//   type="submit"
//   className="btn btn-primary mt-4 m-4 px-4 "
//   onClick={() => dispatch(productAddCart(product))}
// >
//   {" "}
//   Add To Cart
// </button>
// </div>
// </div>
