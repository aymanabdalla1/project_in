"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleLinkClick = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const searchUrl = `https://www.google.com/search?q=${searchQuery}+site:lahoralibre.com`;
        window.open(searchUrl, '_blank');
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <React.Fragment>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">
                            <Image src={'/small_logo.png'} height={70} width={70} alt="La Hora Libre" />
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarColor03">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/" onClick={handleLinkClick}>
                                        <p>Home</p>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        About us
                                    </a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="/info" onClick={handleLinkClick}>
                                            About us
                                        </Link>
                                        <Link className="dropdown-item" href="/politicas/cookies" onClick={handleLinkClick}>
                                            Cookie Policy
                                        </Link>
                                        <Link className="dropdown-item" href="/politicas/privacidad" onClick={handleLinkClick}>
                                            Privacy Policy
                                        </Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        Categories
                                    </a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="/categorias/ciencias" onClick={handleLinkClick}>
                                            Science
                                        </Link>
                                        <Link className="dropdown-item" href="/categorias/entretenimiento" onClick={handleLinkClick}>
                                            Entertainment
                                        </Link>
                                        <Link className="dropdown-item" href="/categorias/finanzas" onClick={handleLinkClick}>
                                            Finance
                                        </Link>
                                        <Link className="dropdown-item" href="/categorias/salud" onClick={handleLinkClick}>
                                            Health
                                        </Link>
                                        <Link className="dropdown-item" href="/categorias/tecnologia" onClick={handleLinkClick}>
                                            Technology
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                            <form className="d-flex" onSubmit={handleFormSubmit}>
                                <input
                                    className="form-control me-sm-2"
                                    type="search"
                                    placeholder="Search Projects"
                                    value={searchQuery}
                                    onChange={handleInputChange}
                                />
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                                    Find
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};
