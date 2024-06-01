import axios from "axios";
import swal from "sweetalert"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export const productAction = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DATA_REQUEST" });
    const response = await axios.get(`https://dummyjson.com/products`);
     
    dispatch({
      type: "PRODUCT_DATA_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_DATA_FAIL",
      payload: error,
    });
  }
};

export const productDetailAction = (id) => async (dispatch) => {
  console.log("🚀 ~ file: Action.js:33 ~ productDetailAction ~ id:", id);

  try {
    dispatch({ type: "PRODUCT_DATA_DETAIL_REQUEST" });
    const response = await axios.get(`https://dummyjson.com/products/${id}`);

    console.log("🚀 ~ file: Action.js:30 ~ productDetailAction ~ response:", response)
    // console.log("🚀 ~ file: Action.js:39 ~ productDetailAction ~ response:", response.data)

    dispatch({
      type: "PRODUCT_DATA_DETAIL_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_DATA_DETAIL_FAIL",
      payload: error,
    });
  }
};

export const getApiData = (username, password,navigate) => async (dispatch) => {
 
    dispatch({ type: "GET_DATA_API" });
    const response = await axios.post("https://dummyjson.com/auth/login", {
      
      username: username,
      password: password,
     
     }).then((response) =>{ 
      dispatch({
        type: "GET_DATA_SUCCESS",
        payload: response.data,
      });
      localStorage.setItem("token", response?.data?.token);
    toast("login successful") 
   
    setTimeout(() => {
     navigate('/product')
    }, 1000);
  })
  .catch((error) =>{ 
      
      toast("login fail",error)
      dispatch({
        type: "GET_DATA_FAIL",
        payload: error.message,
          
        });
  })
     
      
   
};

export const productAddCart = (product) => {
  product.quantity = 1;
  product.total = product.price;

  return {
    type: "CART_ADDED",
    payload: product,
  };
};

export const increment = (item) => {
  console.log("🚀 ~ file: Action.js:84 ~ increment ~ item:", item)
  return {
    type: "INCREMENT",
    payload: item,
  };
};
export const decrement = (item) => {
  console.log("🚀 ~ file: Action.js:90 ~ decrement ~ item:", item)
  if (item.quantity > 1) {
    return {
      type: "DECREMENT",
      payload: item,
    };
  }
else{
  item.quantity=2;
  return {
    type: "DECREMENT",
    payload: item,
  };
}
};

export const deleteItem = (item)  => (dispatch) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch({
        type: "DELETE",
        payload: item,
      });
    } else {
      swal("Your item is safe!");
    }
  })
}

<ToastContainer/>
