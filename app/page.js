'use client'
import Image from "next/image";
import Slider from "@/components/Slider";
import { useRouter } from "next/navigation";
import InfiniteProductCarousel from "@/components/Loop";

export const products = [
  { cat: "shirts", id: 9, name: "T-Shirt", price: 16.99, description: "Simple black t-shirt with soft stretchable cotton, great for daily wear and layering.", image: "/t-shirt-color-black.avif" },
  { cat: "shirts", id: 10, name: "T-shirt", price: 14.99, description: "Basic white t-shirt offering comfort, flexibility, and a lightweight feel for all seasons.", image: "/t-shirt-1.avif" },
  { cat: "hoodies", id: 11, name: "Hoodie", price: 34.99, description: "Warm fleece-lined hoodie with front pocket and adjustable hood for cold weather comfort.", image: "/hoodie-1.avif" },
  { cat: "footware", id: 12, name: "Shoes", price: 59.99, description: "Comfortable running shoes with breathable mesh and cushioned sole for long walks and jogs.", image: "/shoes-1.avif" },
  { cat: "hoodies", id: 13, name: "Bomber Army-jacket", price: 44.99, description: "Stylish bomber jacket with army print, warm interior, and windproof material for winter.", image: "/bomber-jacket-army.avif" },
  { cat: "cap", id: 14, name: "Head-cap", price: 9.99, description: "Lightweight head-cap with breathable fabric and stretchable band for a comfortable all-day fit.", image: "/cap.avif" },
  ];

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Slider />

      <div className="featuredSection">
        <h2 id="featuredSection-title">Featured Products</h2>
        <div className="Products">
          {products.map((item) => (
            <div
              className="product"
              key={item.id}
              onClick={() => router.push(`/nested/${item.name}`)}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={300}
                className="product-image"
              />
              <div id="product-detail">
                <p>
                  {item.name} <span>${item.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <InfiniteProductCarousel />

    </div>
  );
}
