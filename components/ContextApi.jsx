'use client'
import React from 'react'
import { createContext , useState } from 'react'

export const MyContext = createContext();

function ContextApi({children}) {
  const [checkout , setCheckout] = useState({
      Fname : "" ,
      email : "" ,
      Lname : "" ,
      country : "",
      city : "",
      pin : "" , 
      address : "" , 
      phone : "" ,
      message : "" 
    })
    const [state , setState] = useState([]);
    const [cartOpen , setCartOpen] = useState(false)
    let [page , setPage] = useState("shipping")
    const [color, setColor] = useState({})
  const [counts, setCounts] = useState({});
    

    const addtoCart = (ProductName) => {
        if(!state.includes(ProductName)){
            setState((prev)=>([...prev , ProductName]))
        }
    }
    const removeFromCart = (ProductName) => {
      setState((prev) => prev.filter((item) => item !== ProductName));
    };

  return (
    <MyContext.Provider value={{state , setState , setCheckout , color , counts, setCounts, setColor, addtoCart, cartOpen , setCartOpen , removeFromCart ,page , setPage , checkout , setCheckout}}>
        {children}
    </MyContext.Provider>
  )
}

export default ContextApi