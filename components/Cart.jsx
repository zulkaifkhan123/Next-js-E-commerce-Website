import React, { useContext, useState, useTransition } from "react";
import Image from "next/image";
import { products } from "@/app/Products/page";
import { MyContext } from "./ContextApi";
import { useRouter } from "next/navigation";

function Cart() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const { state, removeFromCart, cartOpen, setCartOpen, color , counts, setCounts } = useContext(MyContext);
  const added = products.filter((e) => state.includes(e.name));

  function checkoutPage() {
    startTransition(() => {
      router.push("/Checkout");
    });
  }


  const increase = (name) => {
    setCounts((prev) => ({
      ...prev,
      [name]: (prev[name] || 1) + 1,
    }));
  };

  const descrease = (name) => {
    if ((counts[name] || 1) > 1) {
      setCounts((prev) => ({
        ...prev,
        [name]: prev[name] - 1,
      }));
    }
  };

  return (
    <div className={`cart ${cartOpen ? "opened" : ""}`}>
      <div className="rapeCart">
        <h2>My Cart</h2>
        <i
          onClick={() => setCartOpen((prev) => !prev)}
          id="close"
          className="ri-close-line"
        ></i>
      </div>
      <div className="cartProducts">
        {added.map((e) => (
          <div className="cartProduct" key={e.id}>
            <i
              onClick={() => removeFromCart(e.name)}
              className="cartProductClose ri-close-line"
            ></i>
            <div className="leftCart">
              <Image alt="image" priority={true} src={e.image} height={100} width={100} />
              <div className="leftDetails">
                <p id="cart-product-name">{e.name}</p>
                <p id="cart-product-color">Color / {color[e.name]}</p>
              </div>
            </div>
            <div className="rightCart">
              <p id="cart-product-price">
                ${(e.price * (counts[e.name] || 1)).toFixed(2)}
              </p>
              <div className="cartButtons">
                <button onClick={() => increase(e.name)}>+</button>
                <p>{counts[e.name] || 1}</p>
                <button onClick={() => descrease(e.name)}>-</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-details-part">
        <div className="rape-details">
          <p id="p">Taxes</p>
          <p id="imp">$ 0.00 USD</p>
        </div>
        <div className="rape-details">
          <p id="p">Sipping</p>
          <p id="calculated">Calculated at checkout</p>
        </div>
        <div className="rape-details">
          <p id="p">Total</p>
          <p id="imp">
            $
            {added
              .reduce(
                (acc, item) => acc + item.price * (counts[item.name] || 1),
                0
              )
              .toFixed(2)}{" "}
            USD
          </p>
        </div>
      </div>
      <button id="checkout-btn" onClick={checkoutPage}>
        {isPending ? "Loading..." : "Proceed to checkout"}
      </button>
    </div>
  );
}

export default Cart;
