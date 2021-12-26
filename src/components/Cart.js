import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Data from "./Data";
import {removefromcart} from  '../state/cartSlice' ;

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState(cartData);
  const dispatch = useDispatch();
  const buttonClickedHandler = (itemId) => {
    dispatch(removefromcart({cartItem: itemId}));
  };


  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row ">
            {cartItems.map((item) => (
              <div className="col-xs-12 col-md-3" key={item.id}>
                <div className="card">
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <strong> {item.price}</strong> <br />
                    <button className="btn btn-warning" onClick={() =>{buttonClickedHandler (item.id) }}>removeItem</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
