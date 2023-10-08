import React from 'react';
import './Order.css';
import NavBar from '../components/NavBar';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const Orders = ({products}) => {
  const location = useLocation();
  console.log(location.state);

  // Check if location.state is defined
  if (!location.state || !location.state.order) {
    return (
      <>
      
        <div style={{ textAlign: "center", padding: "9%" }} className="emptyCart">
          <div>
            <h3>No order information found.</h3>
         
          </div>
        </div>
        <Footer />
      </>
    );
  }

 
  const { order } = location.state;

  return (
    <>

      <div className="orders-container">
        <div className='orders-card'>
          <h3 style={{fontWeight:'800', fontSize:'36px',fontFamily: "Poppins"}}>Your Orders</h3>
          {order.map((item, index) => (
            <div className='item-order' key={index} >
              
              <div className='order-container'style={{gap:'10px',padding:'25px'}}>
                <div style={{display:'flex',alignItems:'center',flexGrow:1}}>
                <img style={{ width: 100, height: 100, }} src={item.image} alt={item.title} />
                <div className='desc'>
                  <h3>{item.title}</h3>
                  <p>Total Price: ${item.price * item.quantity}</p>
                </div>
                </div>
               
               

                <div className='btn-container' style={{ display: 'flex', flexDirection: 'column'}}>
                  <button style={{ backgroundColor: '#262626' }} className='returnBtn'>Return Product</button>
                  <button style={{ backgroundColor: '#262626' }} className='downloadBtn'>Download Invoice</button>
                  <button style={{ backgroundColor: '#262626' }} className='rateBtn'>Rate Product</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Orders;
