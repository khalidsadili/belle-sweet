import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';
import logo from '../assets/logo.png';

const Home = () => {
    // Show only first 2 or 4 products as featured
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="home-page">
            <header className="hero">
                <div className="hero-content container">
                    <div className="hero-text">
                        <h1>مرحباً بكم في <span className="highlight">بيلا سويتس</span></h1>
                        <p>حيث تجتمع النكهات الرائعة مع الذكريات الجميلة. نقدم لكم أشهى الحلويات المصنوعة بكل حب.</p>
                        <Link to="/menu" className="cta-button">تصفح المنيو</Link>
                    </div>
                    <div className="hero-image">
                        <img src={logo} alt="Belle Sweets" />
                    </div>
                </div>
            </header>

            <section className="featured-section container">
                <h2 className="section-title">منتجاتنا المميزة</h2>
                <div className="products-grid">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
