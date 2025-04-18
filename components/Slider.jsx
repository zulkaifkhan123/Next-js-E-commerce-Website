'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function Slider() {
  let router = useRouter()
  return (
    <div id="slider" className="slider">
      <h1>Everything You Need <br /> All in One Place</h1>
      <p>Discover a wide range of quality products at unbeatable prices. From daily essentials to the latest trends, we’ve got everything you need for a seamless shopping experience — all in one convenient place</p>
      <button onClick={()=> router.push("/Products")}>Explore Our Products</button>
    </div>
  )
}

export default Slider