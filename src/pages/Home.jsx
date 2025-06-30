import React from 'react';
import ProductCard from '../components/ProductCard';

// Temporary mock data (to be replaced with WooCommerce API later)
const products = [
  {
    id: 1,
    name: 'Floral Summer Dress',
    price: '3,500',
    image: 'https://source.unsplash.com/random/400x400?dress',
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: '5,200',
    image: 'https://source.unsplash.com/random/400x400?jacket',
  },
  {
    id: 3,
    name: 'Casual Sneakers',
    price: '4,800',
    image: 'https://source.unsplash.com/random/400x400?sneakers',
  },
  {
    id: 4,
    name: 'Linen Shirt',
    price: '3,000',
    image: 'https://source.unsplash.com/random/400x400?shirt',
  },
];

function Home() {
  return (
    <div className="p-4">
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold text-primary">Welcome to Evolve Studio</h1>
        <p className="text-charcoal mt-2">Discover curated fashion pieces from Nairobi's top boutique.</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}

export default Home;
