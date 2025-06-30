import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Summer Dress',
    price: '3,500',
    image: 'https://source.unsplash.com/random/400x400?fashion',
  },
  {
    id: 2,
    name: 'Elegant Blazer',
    price: '6,200',
    image: 'https://source.unsplash.com/random/400x400?blazer',
  },
];

function Shop() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-primary mb-4 text-center">Shop Evolve Studio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
