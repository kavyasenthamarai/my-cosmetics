import React from 'react';
import ProductCard from './components/ProductCard';
import './styles/App.css';

const products = [
  {
    title: 'Cosmetic Product 1',
    description: 'Description for cosmetic product 1',
    modelPath: '/models/cosmetic1.glb',
  },
  {
    title: 'Cosmetic Product 2',
    description: 'Description for cosmetic product 2',
    modelPath: '/models/cosmetic2.glb',
  },
  {
    title: 'Cosmetic Product 3',
    description: 'Description for cosmetic product 3',
    modelPath: '/models/cosmetic3.glb',
  },
];

const App = () => {
  return (
    <div className="app">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          description={product.description}
          modelPath={product.modelPath}
        />
      ))}
    </div>
  );
};

export default App;
