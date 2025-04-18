'use client'
import React , {useContext} from 'react'
import { MyContext } from './ContextApi'

function Shipping() {
    const {setPage , checkout , setCheckout} = useContext(MyContext);

    function handleChange (e) {
        let inputName = e.target.name ;
        let inputValue = e.target.value ;
        setCheckout((prev)=>({
            ...prev ,
            [inputName] : inputValue
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(checkout);
        setPage("payment");
    }

  return (
    <div className="shippingAddress">
        <h2>Shipping Address</h2>
        <form onSubmit={handleSubmit}>
          <div className="ship-form-group">
          <input onChange={handleChange} value={checkout.Fname} required placeholder='First-Name' className="ship-input name-input" type="text" name="Fname" id="Fname" />
          <input onChange={handleChange} value={checkout.Lname} required placeholder='Last-Name' className="ship-input name-input" type="text" name="Lname" id="Lname" />
          </div>
          <div className="ship-form-group">
          <input onChange={handleChange} value={checkout.country} autoComplete="off" required placeholder='Country Name' className="ship-input country-input" type="text" name="country" id="country" />
          <input onChange={handleChange} value={checkout.city} autoComplete="off" required placeholder='City Name' className="ship-input city-input" type="text" name="city" id="city" />
          <input onChange={handleChange} value={checkout.pin} autoComplete="off" required placeholder='PIN Code' className="ship-input city-input" type="number" name="pin" id="pin" />
          </div>
          <div className="ship-form-group">
          <input onChange={handleChange} value={checkout.address} autoComplete="off" required placeholder='Shipping Address' className="ship-input address-input" type="text" name="address" id="address" />
          </div>
          <div className="ship-form-group">
          <input onChange={handleChange} value={checkout.email} autoComplete="off" required placeholder='Email Address' className="ship-input email-input" type="email" name="email" id="email" />
          <input onChange={handleChange} value={checkout.phone} autoComplete="off" required placeholder='Phone Number' className="ship-input phone-input" type="number" name="phone" id="phone" />
          </div>
          <div className="ship-form-btn">
          <button id='ship-btn' className='ship-btn' type='submit'>Continue to shipping</button>
          </div>
        </form>
      </div>
  )
}

export default Shipping