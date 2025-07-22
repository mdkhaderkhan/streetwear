import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);

        // Fetch related products
        fetch(`https://fakestoreapi.com/products/category/${data.category}`)
          .then(res => res.json())
          .then(setRelated);
      });
  }, [id]);

  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.title} added to cart`);
  };

  if (!product) return <div className="p-10 text-center text-white">Loading...</div>;

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen p-6">
      {/* Product Detail Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center border-b border-gray-700 pb-10">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <p className="text-xl font-semibold">${product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {related
            .filter(p => p.id !== product.id)
            .map(p => (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 p-4 rounded-xl backdrop-blur-lg"
              >
                <Link to={`/product/${p.id}`}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-40 object-contain mb-2"
                  />
                  <h3 className="text-base font-semibold line-clamp-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-300 line-clamp-2">
                    {p.description}
                  </p>
                  <p className="mt-1 font-bold text-white">${p.price}</p>
                </Link>
                
                <button
                  onClick={() => handleAddToCart(p)}
                  className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-1 rounded"
                >
                  Add to Cart
                </button>
                
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
