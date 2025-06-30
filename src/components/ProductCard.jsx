import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-charcoal">{product.name}</h3>
        <p className="text-primary font-bold mt-1">KES {product.price}</p>
        <button className="mt-2 w-full bg-primary text-white py-2 rounded hover:bg-pink-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
