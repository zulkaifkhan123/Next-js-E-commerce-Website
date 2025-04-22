'use client';
import React, { useContext, useEffect, useState } from 'react';
import '@/app/globals2.css';
import { useRouter } from 'next/navigation';
import Shipping from '@/components/Shipping';
import Payment from '@/components/Payment';
import Order from '@/components/Order';
import { MyContext } from '@/components/ContextApi';
import Image from 'next/image';

export const Products = [
  { cat: "cap", id: 1, name: "Cowboy Hat", price: 25.99, description: "Classic cowboy hat with strong stitching and premium quality material for everyday wear.", image: "/cowboy-hat-black-1.avif", role: "latest" },
  { cat: "drinkware", id: 2, name: "Special Mug", price: 12.49, description: "Ceramic mug designed for coffee lovers with a sturdy grip and elegant printed design.", image: "/mug-1.avif", role: "relevance" },
  { cat: "bags", id: 3, name: "Bag", price: 39.99, description: "Spacious and durable travel bag with modern style, perfect for everyday or office use.", image: "/bag-1-dark.avif", role: "latest" },
  { cat: "cap", id: 4, name: "Baby Cap", price: 8.99, description: "Soft cotton baby cap offering gentle protection and comfort for sensitive baby skin daily.", image: "/baby-cap-black.avif", role: "old" },
  { cat: "shirts", id: 5, name: "Spiral T-Shirt", price: 18.99, description: "Trendy spiral-pattern t-shirt made with breathable cotton, perfect for casual summer outings.", image: "/t-shirt-spiral-1.avif", role: "latest" },
  { cat: "drinkware", id: 6, name: "Black Cup", price: 10.99, description: "Stylish black cup with heat-resistant surface, ideal for tea, coffee, or hot chocolate.", image: "/cup-black.avif", role: "old" },
  { cat: "electronics", id: 7, name: "Keyboard", price: 49.99, description: "Compact wireless keyboard with smooth keys and long battery life for fast typing sessions.", image: "/keyboard.avif", role: "relevance" },
  { cat: "shirts", id: 8, name: "Baby Onesie-beige", price: 15.49, description: "Comfortable baby onesie made from soft organic fabric, designed for everyday infant wear.", image: "/baby-onesie-beige-1.avif", role: "latest" },
  { cat: "shirts", id: 9, name: "T-Shirt", price: 16.99, description: "Simple black t-shirt with soft stretchable cotton, great for daily wear and layering.", image: "/t-shirt-color-black.avif", role: "old" },
  { cat: "shirts", id: 10, name: "T-shirt", price: 14.99, description: "Basic white t-shirt offering comfort, flexibility, and a lightweight feel for all seasons.", image: "/t-shirt-1.avif", role: "relevance" },
  { cat: "hoodies", id: 11, name: "Hoodie", price: 34.99, description: "Warm fleece-lined hoodie with front pocket and adjustable hood for cold weather comfort.", image: "/hoodie-1.avif", role: "old" },
  { cat: "footware", id: 12, name: "Shoes", price: 59.99, description: "Comfortable running shoes with breathable mesh and cushioned sole for long walks and jogs.", image: "/shoes-1.avif", role: "latest" },
  { cat: "hoodies", id: 13, name: "Bomber Army-jacket", price: 44.99, description: "Stylish bomber jacket with army print, warm interior, and windproof material for winter.", image: "/bomber-jacket-army.avif", role: "relevance" },
  { cat: "cap", id: 14, name: "Head-cap", price: 9.99, description: "Lightweight head-cap with breathable fabric and stretchable band for a comfortable all-day fit.", image: "/cap.avif", role: "old" },
  { cat: "hoodies", id: 15, name: "Dog-Sweater", price: 19.99, description: "Cute dog sweater with warm fleece lining to keep your pet cozy during colder days.", image: "/dog-sweater-1.avif", role: "latest" },
  { cat: "stickers", id: 16, name: "Aceme Pacifier-Sticker", price: 2.49, description: "Colorful sticker featuring pacifier design, perfect for decorating notebooks, bottles, and laptops.", image: "/pacifier-1.avif", role: "old" },
  { cat: "stickers", id: 17, name: "Aceme Rainbow", price: 2.49, description: "Vibrant rainbow-themed sticker ideal for kids’ scrapbooks, gifts, and decorative collections.", image: "/sticker-rainbow.avif", role: "relevance" },
  { cat: "stickers", id: 18, name: "Aceme Sticker", price: 2.49, description: "High-quality vinyl sticker with strong adhesive, great for customizing accessories or gift boxes.", image: "/sticker.avif", role: "latest" },
  { cat: "drinkware", id: 19, name: "Acema New-Mug", price: 222.49, description: "Ceramic mug designed for coffee lovers with a sturdy grip and elegant printed design.", image: "/cup-blue.webp", role: "relevance" },
  { cat: "footware", id: 20, name: "Acema Shoes", price: 99.90, description: "Comfortable running shoes with breathable mesh and cushioned sole for long walks and jogs.", image: "/shoes-2.webp", role: "latest" },
  { cat: "hoodies", id: 21, name: "Bomber Acmea Jacket", price: 34.99, description: "Stylish bomber jacket with army print, warm interior, and windproof material for winter.", image: "/hoodie-2.webp", role: "latest" },
  { cat: "footware", id: 22, name: "Acema Bata-Shoes", price: 929.90, description: "Comfortable running shoes with breathable mesh and cushioned sole for long walks and jogs.", image: "/shoes-3.webp", role: "oldest" },
  { cat: "shirts", id: 23, name: "Acema T-Shirt", price: 124.99, description: "Basic white t-shirt offering comfort, flexibility, and a lightweight feel for all seasons.", image: "/t-shirt-2.webp", role: "relevance" },
  { cat: "bags", id: 24, name: "Bengamin Acemas Bag", price: 36.99, description: "Spacious and durable travel bag with modern style, perfect for everyday or office use.", image: "/bag-2.webp", role: "oldest" },
];

function Checkout() {
  const { page, setPage, state, removeFromCart, color, counts } = useContext(MyContext);
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (state.length === 0) {
      router.push("/");
    }
    const items = Products.filter((item) => state.includes(item.name));
    setCartItems(items);
    console.log("cartItems for checkout:", items);
  }, [state]);

  const handlePath = (e) => {
    const getId = e.target.id;
    if ((page === "payment" || page === "order") && getId === "Pinformation") {
      setPage("shipping");
    } else if ((page === "payment" || page === "order") && getId === "Ppayment") {
      setPage("payment");
    }
  };

  return (
    <div className="checkout">
      <div className="checkout-one">
        <h1 onClick={() => router.push("/")} className="checkout-title">VogueBay</h1>
        <div className="path-name">
          <p id="Pinformation" onClick={handlePath}>Information</p>
          <i className="ri-arrow-right-s-line"></i>
          <p id="Ppayment" onClick={handlePath}>Payment</p>
          <i className="ri-arrow-right-s-line"></i>
          <p id="Porder" onClick={handlePath}>Order</p>
        </div>

        {page === "shipping" ? <Shipping /> : page === "payment" ? <Payment /> : <Order />}
      </div>

      <div className="checkout-two">
        <div className="checkout-product">
          {cartItems.map((e) => (
            <div className="check-pro-one" key={e.id}>
              <Image alt="product image" priority src={e.image} height={300} width={300} />
              <div className="checkout-product-details">
                <div className="rape-check">
                  <h2>{e.name}</h2>
                  <p>$ {e.price} USD</p>
                </div>
                <p id="check-quantity">{counts[e.name]}</p>
                <i onClick={() => removeFromCart(e.name)} className="trash ri-delete-bin-7-line"></i>
                <p id="check-color">Color / {color[e.name]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rape-last-checkout">
          <div className="subtotal">
            <p id='p-one'>Subtotal</p>
            <p>
              ${cartItems.reduce((acc, item) => acc + item.price * (counts[item.name] || 1), 0).toFixed(2)} USD
            </p>
          </div>
          <div className="subtotal">
            <p id='p-one'>Payment Method</p>
            <p id='p-one'>Payment on delivery</p>
          </div>
          <div className="subtotal">
            <p className='check-total-pay'>Total</p>
            <p className='check-total-pay'>$ {cartItems.reduce((acc, item) => acc + item.price * (counts[item.name] || 1), 0).toFixed(2)} USD</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Checkout