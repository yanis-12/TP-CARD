// frontend/src/App.tsx
import React from 'react';
import { CartComponent } from './components/CartComponent';
import { ProductComponent } from './components/ProductComponent';

const App: React.FC = () => {
    return (
        <div>
            <h1>Gestion de Cartes de Produits</h1>
            <ProductComponent />
            <CartComponent />
        </div>
    );
};

export default App;
