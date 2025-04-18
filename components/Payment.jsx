'use client'
import React,{useContext} from 'react'
import { MyContext } from './ContextApi';

function Payment() {
  const {setPage , checkout , setCheckout} = useContext(MyContext);

  const handleChange = (e) =>{
    setCheckout((prev)=>({
      ...prev , 
      [e.target.name] :  e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(checkout);
    setPage("order")
  }
  const handleBack = (e) => {
    e.preventDefault();
    setPage("shipping")
  }

  return (
    <div id='payment'>
        <h2>Payment</h2>
        <form onSubmit={handleSubmit} id='payment-form'>
          <textarea onChange={handleChange} value={checkout.message} placeholder='Special Delivery Instruction or any other information' name="message" id="delivery-note"></textarea>
        <div className="pay-delivery">
        <i class="ri-bus-fill"></i>
        <div>
            <h4>Payment on Delivery</h4>
            <p>Pay with cash when your order is delivered</p>
        </div>
        <i class="ri-check-fill"></i>
        </div>
        <div className="check-buttons">
          <button onClick={handleBack}>Back to Shipping</button>
          <button type='submit'>Continue to Order</button>
        </div>
        </form>
    </div>
  )
}

export default Payment