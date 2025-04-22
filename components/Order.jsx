import React , {useContext} from 'react'
import { MyContext } from './ContextApi'
import { useRouter } from 'next/navigation';



function Order() {



  let router = useRouter();
  const {setPage , checkout , color , counts , state , setCheckout , setState} = useContext(MyContext);
  
  
  async function orderPassed() {
    console.log("counts : " , counts);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...checkout,
          products :  state ,
          quantity : counts ,
          colors : color 
        }),
      });
      const data = await res.json(); 
      if (res.ok) {
        alert("Order Passed Successfully!");
        setPage('shipping')
        setState([]);
        setCheckout({Fname: "",email: "",Lname: "",country: "",city: "",pin: "",address: "",phone: "",message: "",
        });
        router.push("/"); 
      } else {
        alert(`Failed to pass order: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }
  


  return (
    <div id='check-order'>
      <h2>Shoping Order</h2>
      <div className="filled-data">
        <div className="warning">
          <p>Filled Data</p>
          <p id='edith' onClick={()=> setPage("shipping")}>Edith</p>
        </div>
        <div className="show">
          <div className="show-group">
          <strong>Shipping Data</strong>
          <div className="show-data">
            <p>Name : <span>{checkout.Fname} {checkout.Lname}</span></p>
            <p>City : <span>{checkout.city}</span></p>
            <p>Phone Number : <span>{checkout.phone}</span></p>
            <p>Email Address : <span>{checkout.email}</span></p>
            <p>Country : <span>{checkout.country}</span></p>
            <p>PIN Code : <span>{checkout.pin}</span></p>
            <p>Address : <span>{checkout.address}</span></p>
          </div>
          </div>
          <div className="show-group second-group">
            <strong>Delivery Note</strong>
            <div className="show-data noted-data">
              <p>{checkout.message.slice(0, 170) + '...'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="order-button">
      <button id='order-now' onClick={orderPassed}>Order Now </button>
      </div>
    </div>
  )
}

export default Order