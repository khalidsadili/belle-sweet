import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Belle Logo" />
                </Link>

                {/* Desktop Menu */}
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className={`nav-link ${isActive('/')}`}>
                            الرئيسية
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu" className={`nav-link ${isActive('/menu')}`}>
                            المنيو
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className={`nav-link ${isActive('/about')}`}>
                            من نحن
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Icon */}
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X color="var(--color-primary)" /> : <Menu color="var(--color-primary)" />}
                </div>

                {/* Mobile Sidebar */}
                <div className={`sidebar ${isOpen ? 'active' : ''}`}>
                    <ul className="sidebar-menu">
                        <li onClick={toggleMenu}>
                            <Link to="/" className={`nav-link ${isActive('/')}`}>الرئيسية</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link to="/menu" className={`nav-link ${isActive('/menu')}`}>المنيو</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link to="/about" className={`nav-link ${isActive('/about')}`}>من نحن</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
