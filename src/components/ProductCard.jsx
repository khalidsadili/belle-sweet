import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="card-image">
                <img src={product.image} alt={product.name} />
                <div className="card-overlay">
                    <span className="card-price">{product.price} ريال</span>
                </div>
            </div>
            <div className="card-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
