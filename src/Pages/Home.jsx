import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  "men's clothing",
  "women's clothing",
  "electronics",
  "jewelery"
];

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  const handleAddToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product is already in cart
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.title} added to cart!`);
};


  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section
        className="relative h-[75vh] flex flex-col justify-center items-center text-center px-4 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1609010697446-36fef2c106e3?auto=format&fit=crop&w=1470&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black backdrop-blur-sm"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-xl">
            <span className="text-green-800">F1</span> Streetwear Co.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
            Performance gear redefined. Built for adrenaline and attitude.
          </p>
          <Link
            to="/category/men's clothing"
            className="mt-6 inline-block bg-white text-black px-8 py-3 rounded-full text-lg hover:bg-gray-200 transition"
          >
            Explore Collection
          </Link>
        </motion.div>
      </section>

      {/* Category Cards */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <motion.div
              key={cat}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg p-4 rounded-xl shadow hover:shadow-2xl text-center"
            >
              <Link to={`/category/${cat}`} className="block">
                <img
                  src={`https://source.unsplash.com/random/150x150/?${cat}`}
                  alt={cat}
                  className="mx-auto mb-3 rounded-lg"
                />
                <span className="font-semibold text-black capitalize">
                  {cat.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4 shadow hover:shadow-2xl backdrop-blur-lg transition"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-base font-semibold line-clamp-1">{product.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">{product.description}</p>
                <p className="mt-2 font-bold text-white">${product.price}</p>
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full bg-green-800 hover:bg-green-500 text-white py-2 rounded-lg transition"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
