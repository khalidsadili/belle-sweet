import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Menu.css';

const Menu = () => {
    return (
        <div className="menu-page container">
            <header className="menu-header">
                <h1 className="section-title">قائمة الحلويات</h1>
                <p>نقدم لكم تشكيلة فاخرة من الكيك والحلويات</p>
            </header>

            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Menu;
