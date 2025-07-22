// src/pages/Product.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p className="text-center text-white mt-10">Loading...</p>;

  return (
    <div className="min-h-screen text-white bg-black p-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-contain"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <button className="bg-green-700 hover:bg-green-600 text-white py-2 px-6 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

