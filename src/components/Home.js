import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Data from "./Data";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import Badge from "react-bootstrap/Badge";
import { addToCart } from "../state/counterSlice";
import { addITemToCart } from "../state/cartSlice";

const Home = () => {
  const [show,setshow] = useState(false);
  const name = useSelector((state) => state.counter);
  const [counter, setCounter] = useState(name.value);
  const dispatch = useDispatch();
  const buttonClickedHandler = (itemId) => {
    dispatch(addToCart());
    dispatch(addITemToCart({cartItem: itemId}));
  };

  useEffect(() => {
   setCounter(name.value)
  },[name.value])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark p-x-10">
        <div className="container d-flex">
          <img
            src="./images/amazon.png"
            alt=""
            height="40px"
            width="70px"
            style={{ paddingTop: "10px" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setshow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? 'show' : ""}`} >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Menswear
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kidswear
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Macbook</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Womenswear</a>
              </li>
            </ul>
            <form className="d-flex">
              <li className="nav-item">
                <Link to="/cart">
                  <button>
                    <TiShoppingCart className="cart-icon" />
                    <Badge bg="secondary">{counter}</Badge>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Signup" className="sign">
                  Signup
                </Link>
              </li>
            </form>
          </div>
        </div>
      </nav>

      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12 col-sm-12 ">
              <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="1000">
                    <img
                      src="./images/product.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <img
                      src="./images/product.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <img
                      src="./images/product.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="container">
          <div className="row ">
            {Data.map((item) => (
              <div className="col-xs-12 col-md-3" key={item.id}>
                <div className="card">
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <strong> {item.price}</strong> <br />
                    <button
                      className="btn btn-warning mt-3"
                      onClick={() => buttonClickedHandler(item.id)}
                    >
                      AddToCart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-3">
              <ul>
                <li>
                  {" "}
                  <strong>Get to Know Us </strong>
                </li>
                <li>
                  {" "}
                  <a href="#">About Us</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Careers</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Press Releases</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Amazon Careers</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Gift a smile</a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-md-3">
              <ul>
                <li>
                  {" "}
                  <strong>Contact With Us</strong>
                </li>
                <li>
                  {" "}
                  <a href="#">Facebook</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Twitter</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-md-3">
              <ul>
                <li>
                  {" "}
                  <strong>Make Money With Us</strong>
                </li>
                <li>
                  {" "}
                  <a href="#">Sell on Amazon</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Sell under Amazon Accelerator</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Amazon GLobal Selling</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Become An Affliate</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Fulfilment by Amazon</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Advertiese your products</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Amazon pay on Merchants</a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-md-3">
              <ul>
                <li>
                  {" "}
                  <strong>Let Us Help You</strong>
                </li>
                <li>
                  {" "}
                  <a href="#">Covid 19 amd Amazon</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Your Account</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Return Centre</a>
                </li>
                <li>
                  {" "}
                  <a href="#">100% purchase Protection</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Amazon App Download</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Amazon Assistant Download</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Help</a>{" "}
                </li>
              </ul>
            </div>
            <hr style={{ color: "white" }} />
            <strong style={{ textAlign: "center" }}>
              2021 &copy; All rights reserved Designed And Developed by{" "}
              <span> Venkat Kosuri </span>{" "}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;