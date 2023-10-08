import React from "react";
import "./Cart.css";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartSlice";

import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import CloseIcon from "@mui/icons-material/Close";
import { FormHelperText, Input, OutlinedInput, TextField } from "@mui/material";

const Cart = ({products}) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handlePlaceOrder = (item) => {
    toast.success("Placed Order Successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setTimeout(() => {
      navigate("/orders", {
        state: {
          order: [...cart],
          totalPrice: formattedGrandTotal,
        },
      });
    }, 3500);

    setTimeout(() => {
      dispatch(cleanCart());
    }, 3000);
  };
  let charges = 30;

  // sum of total on the cart
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  // Final total to two decimal places
  const finalTotal = parseFloat(total.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let grandTotal = total + charges;

  const formattedGrandTotal = grandTotal.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const incrementItemQty = (item) => {
    dispatch(incrementQuantity(item));
  };

  const decrementItemQty = (item) => {
    dispatch(decrementQuantity(item));
  };

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
    toast.info("Remove Successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      {total === 0 ? (
        <div
          className="emptyCart"
          style={{ textAlign: "center", padding: "9%",fontSize: "35px",
          fontWeight:'bold',
          fontFamily: "Poppins", }}
        >
          <h1>Your cart is empty</h1>
          <button onClick={()=>navigate('/')} className='btnContinue'style={{fontSize:'12px',color:'white',backgroundColor:'#262626',padding:'10px',borderRadius:'10px'}}>Continue Shopping</button>
        </div>
      ) : (
        <div className="cart-container">
          {/* Right Content */}
          <div className="right-container">
            {/* Container for the checkout and Total Price */}

            <div className="Checkout-container">
              <div>
                <h5
                  style={{
                    fontSize: "35px",
                    fontWeight:'bold',
                    fontFamily: "Poppins",
                    textAlign: "center",
                    marginBottom: "10px",
                  }}
                >
                  Cart
                </h5>
                <table></table>
                <table>
                  <thead
                    style={{
                      backgroundColor: "#262626",
                      color: "white",
                      height: "60px",
                      fontSize: "16px",
                    }}
                  >
                    <tr>
                      <th style={{ textAlign: "center" }}>Product</th>
                      <th style={{ textAlign: "center" }}>Price</th>
                      <th style={{ textAlign: "center" }}>Qty</th>
                      <th style={{ textAlign: "center" }}>SubTotal</th>
                    </tr>
                  </thead>
                  <tbody style={{ borderRadius: "10px", height: "20px" }}>
                    {cart.map((item, index) => (
                      <tr
                        key={index}
                        style={{
                          border: "1px solid #9398a1",
                          borderRadius: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <td className="title">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "15px",
                              borderRadius: "10px",
                              overflow: "hidden",
                              padding: "10px",
                            }}
                          >
                            <CloseIcon
                              sx={{ color: "#262626", cursor: "pointer" }}
                              onClick={() => removeItemFromCart(item)}
                            />
                            <img src={item.image} style={{ width: "20%" }} />
                            {item.title}
                          </div>
                        </td>
                        <td className="qty">${item.price}</td>

                        <td className="qty" style={{ textAlign: "center" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              gap: "15px",
                            }}
                          >
                            <div
                              onClick={() => decrementItemQty(item)}
                              style={{ cursor: "pointer" }}
                            >
                              -
                            </div>
                            <div>{item.quantity}</div>
                            <div
                              onClick={() => incrementItemQty(item)}
                              style={{ cursor: "pointer" }}
                            >
                              +
                            </div>
                          </div>
                        </td>
                        <td className="pricee">
                          ${(item.quantity * item.price).toLocaleString(
                            undefined,
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }
                          )}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td
                        className="title"
                        style={{
                          textAlign: "right",
                          fontWeight: "bold",
                          border: "none",
                        }}
                      >
                        TOTAL
                      </td>

                      <td className="qty" style={{ fontWeight: "bold" }}>
                        {totalQuantity}
                      </td>
                      <td className="pricee" style={{ fontWeight: "bold" }}>
                        ${finalTotal}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <br />
                <hr />

                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <div style={{  width: "70%" }}> </div>
                  <div style={{flexGrow:1}}>
                    {/* Coupon Info and Desc */}
                    <div className="coupon-container">
                      <ConfirmationNumberIcon style={{ color: "#232F3E" }} />
                      <div style={{ marginLeft: "0px" }}>
                        <OutlinedInput
                          sx={{
                            fontSize: "12px",
                            height: "30px",
                            "&:focus": {
                              borderColor: "#262626",
                            },
                          }}
                          aria-describedby="outlined-coupon-helper-text"
                          inputProps={{
                            "aria-label": "coupon",
                          }}
                        />
                        <FormHelperText
                          id="outlined-coupon-helper-text"
                          sx={{ color: "#262626" }}
                        >
                          Apply Coupon
                        </FormHelperText>
                      </div>
                    </div>
                    <br />

                    {/* edittttttttttttttttt */}
                    <div
                      className="discount-containerr"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "60%",
                        padding:'20px',
                        fontSize:'16px'
                      }}
                    >
                      <div className="flex justify-between text-xl "style={{fontWeight:'800'}}>
                        <p>Discount</p>
                        <p>0.00</p>
                      </div>

                      <div className="flex justify-between text-xl" style={{fontWeight:'800'}}>
                        <p>Charges</p>
                        <p>${charges}.00</p>
                      </div>
                      <hr/>
                      <div className="flex justify-between text-xl" style={{fontWeight:'800'}}>
                        <p  >Grand Total</p> <p>${formattedGrandTotal}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="placeOrderBtn-container">
                  <button className="placeOrderBtn" onClick={handlePlaceOrder}>
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

  
    </>
  );
};

export default Cart;
