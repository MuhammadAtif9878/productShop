
import { useState } from "react";
import CartReducer from "../../redux/reducer/CartReducer";
import styles from "../product/Cart.module.css"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cross from "../../assets/cross.png";
import emptyCart from "../../assets/IconEmptyCart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { decrement, deleteItem, increment } from "../../redux/actions/Action";

export default function Cart() {
  const cartItems = useSelector((state) => state.CartReducer.cart);
  const dispatch = useDispatch();
  let grandTotal = 0;

  return (
    <>
      {!cartItems.length ? (
        <div fluid="sm" className={styles.container}>
        
        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 px-5">
          <img src={emptyCart} />
          <h3 className="pt-5">Your Cart is empty</h3>
          <h4 className="pt-3">Add Something To Make Me Happy</h4>
        
          <Row>
            <Col className="pt-5 pb-5">
              <Link to="/product">
                <Button>Contonue to Shopping</Button>
              </Link>
            </Col>
          </Row>
          </div>
          <div className="col-md-4"></div>
          </div>
        </div>
      ) : (
        <Container fluid="sm" className={styles.container}>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody style={{ verticalAlign: "middle" }}>
              {cartItems.map((item, index) => {
                return (
                  <tr key={index}>
                    <td >
                      <img src={item.thumbnail} className={styles.img} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <FontAwesomeIcon
                        onClick={() => dispatch(decrement(item))}
                        icon={faAngleLeft}
                        className={styles.check}
                      />
                      <input
                        disabled
                        className={styles.input}
                        value={item.quantity}
                      />
                      <FontAwesomeIcon
                        onClick={() => dispatch(increment(item))}
                        icon={faAngleRight}
                        className={styles.check}
                      />
                    </td>
                    <td>
                      <img
                        src={cross}
                        onClick={() => dispatch(deleteItem(item))}
                        className={styles.icon}
                      />
                    </td>
                    <td>{item.total}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {cartItems.forEach((amount) => {
            grandTotal = grandTotal + amount.total;
          })}
          <p className={styles.p}>Total Price is: ${grandTotal}</p>

          <Row>
            <Col>
            
            </Col>
            <Col>
              <Link to="/product">
                <Button>Continue Shopping</Button>
              </Link>
            </Col>

            {/* <Col>
              <Link to="/checkout">
                <Button>Check Out</Button>
              </Link>
            </Col> */}
          </Row>
        </Container>
      )}
    </>
  );
}