import React from 'react';
import ProductCard from '../components/ProductCard';

// Temporary mock data (to be replaced with WooCommerce API later)
const products = [
  {
    id: 1,
    name: 'Floral Summer Dress',
    price: '3,500',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: '5,200',
    image: 'https://images.unsplash.com/photo-1709672262859-68cb9b39ae4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGRlbmltJTIwamFja2V0JTIwbGFkaWVzfGVufDB8fDB8fHww',
  },
  {
    id: 3,
    name: 'Zenith Crop Top',
    price: '4,800',
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNyb3AlMjB0b3B8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 4,
    name: 'Linen Shirt',
    price: '3,000',
    image: 'https://images.unsplash.com/photo-1738651875559-692dfb77b185?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGxpbmVuJTIwc2hpcnQlMjBsYWRpZXN8ZW58MHx8MHx8fDA%3D',
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
