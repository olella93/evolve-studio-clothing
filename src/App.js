import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-primary">Welcome to Evolve Studio</h1>
        <p className="mt-2 text-charcoal">Your curated clothing boutique in Nairobi.</p>
      </main>
    </div>
  );
}

export default App;
