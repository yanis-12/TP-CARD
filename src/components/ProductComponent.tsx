import React, { useState } from 'react';
import { addProductToCart } from '../services/CartService';

export const ProductComponent: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || price <= 0) {
            setError('Veuillez entrer un nom de produit valide et un prix supérieur à 0.');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            await addProductToCart(name, price);
            setMessage('Produit ajouté au panier avec succès !');
            setName('');
            setPrice(0);
        } catch (error) {
            setError('Erreur lors de l’ajout du produit au panier. Veuillez réessayer.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="product-form-container">
            <form onSubmit={handleSubmit} className="product-form">
                <input
                    type="text"
                    placeholder="Nom du produit"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="product-input"
                    disabled={isSubmitting}
                />
                <input
                    type="number"
                    placeholder="Prix"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="product-input"
                    disabled={isSubmitting}
                />
                <button type="submit" className="product-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Ajout en cours...' : 'Ajouter au panier'}
                </button>
            </form>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};
