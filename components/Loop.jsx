'use client';
import { useRouter } from "next/navigation";

const InfiniteProductCarousel = () => {
    let router = useRouter();
  const products = [
    { cat: "footware", id: 1, name: "Shoes", price: 59.99, description: "Comfortable running shoes with breathable mesh and cushioned sole for long walks and jogs.", image: "/shoes-1.avif", role: "latest" },
    { cat: "stickers", id: 2, name: "Aceme Pacifier-Sticker", price: 2.49, description: "Colorful sticker featuring pacifier design, perfect for decorating notebooks, bottles, and laptops.", image: "/pacifier-1.avif", role: "old" },
    { cat: "cap", id: 3, name: "Cowboy Hat", price: 25.99, description: "Classic cowboy hat with strong stitching and premium quality material for everyday wear.", image: "/cowboy-hat-black-1.avif", role: "latest" },
    { cat: "drinkware", id: 4, name: "Special Mug", price: 12.49, description: "Ceramic mug designed for coffee lovers with a sturdy grip and elegant printed design.", image: "/mug-1.avif", role: "relevance" },
    { cat: "bags", id: 5, name: "Bag", price: 39.99, description: "Spacious and durable travel bag with modern style, perfect for everyday or office use.", image: "/bag-1-dark.avif", role: "latest" },
    { cat: "shirts", id: 6, name: "Spiral T-Shirt", price: 18.99, description: "Trendy spiral-pattern t-shirt made with breathable cotton, perfect for casual summer outings.", image: "/t-shirt-spiral-1.avif", role: "latest" },
    { cat: "electronics", id: 7, name: "Keyboard", price: 49.99, description: "Compact wireless keyboard with smooth keys and long battery life for fast typing sessions.", image: "/keyboard.avif", role: "relevance" },
    { cat: "hoodies", id: 8, name: "Hoodie", price: 34.99, description: "Warm fleece-lined hoodie with front pocket and adjustable hood for cold weather comfort.", image: "/hoodie-1.avif", role: "old" },
];

  const duplicatedProducts = [...products, ...products, ...products];

  const handleProductClick = (productName) => {
    router.push(`/nested/${productName}`);
  };

  return (
    <div className="carousel-container">
        <h2>Explore by Category</h2>
        
      <div className="carousel-track">
        {duplicatedProducts.map((item, index) => (
          <div className="product" key={`${item.id}-${index}`} onClick={() => handleProductClick(item.name)}>
            <img src={item.image} alt={item.name} className="product-image" />
            <div id="product-detail">
              <p><p>{item.name}</p> <span>${item.price}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteProductCarousel;
