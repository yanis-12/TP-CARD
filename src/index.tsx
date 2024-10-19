// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { CartComponent } from './components/CartComponent';
import { ProductComponent } from './components/ProductComponent';

const App = () => (
    <div>
        <h1>Gestion de Panier</h1>
        <ProductComponent />
        <CartComponent />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
