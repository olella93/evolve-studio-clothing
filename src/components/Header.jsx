import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import logo from '../assets/evolve.png'; 

function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Evolve Studio Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold text-primary"></span>
      </div>
      <nav className="hidden md:flex space-x-6 text-charcoal">
        <a href="/" className="hover:text-primary">Home</a>
        <a href="/shop" className="hover:text-primary">Shop</a>
        <a href="/about" className="hover:text-primary">About</a>
        <a href="/contact" className="hover:text-primary">Contact</a>
      </nav>
      <div className="flex items-center space-x-4">
        <button>
          <ShoppingCartIcon className="h-6 w-6 text-charcoal hover:text-primary" />
        </button>
      </div>
    </header>
  );
}

export default Header;
