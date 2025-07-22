import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Category = () => {
  const { id } = useParams(); // category ID from URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${id}`)
      .then(res => res.json())
      .then(setProducts)
      .catch(err => console.error("Failed to fetch category:", err));
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 capitalize">{id} Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white/10 p-4 rounded-xl backdrop-blur-md hover:bg-white/20 transition-all"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 object-contain mx-auto mb-3"
                />
                <h3 className="font-semibold line-clamp-1 text-lg">{product.title}</h3>
                <p className="text-sm text-gray-300 line-clamp-2">{product.description}</p>
                <p className="mt-2 text-white font-bold">${product.price}</p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
