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
        const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
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
                <Image
                  src={"/small_logo.png"}
                  height={70}
                  width={70}
                  alt="La Hora Libre"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMenu}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
                id="navbarColor03"
              >
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="/"
                      onClick={handleLinkClick}
                    >
                      <p>Home</p>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      About us
                    </a>
                    <div className="dropdown-menu">
                      <Link
                        className="dropdown-item"
                        href="/info"
                        onClick={handleLinkClick}
                      >
                        About us
                      </Link>
                      <Link
                        className="dropdown-item"
                        href="/politicas/cookies"
                        onClick={handleLinkClick}
                      >
                        Cookie Policy
                      </Link>
                      <Link
                        className="dropdown-item"
                        href="/politicas/privacidad"
                        onClick={handleLinkClick}
                      >
                        Privacy Policy
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Categories
                    </a>
                    <div className="dropdown-menu">
                      <Link
                        className="dropdown-item"
                        href="/categories/frontend"
                        onClick={handleLinkClick}
                      >
                        Front End
                      </Link>
                      <Link
                        className="dropdown-item"
                        href="/categories/backend"
                        onClick={handleLinkClick}
                      >
                        Back End
                      </Link>
                      <Link
                        className="dropdown-item"
                        href="/categories/fullstack"
                        onClick={handleLinkClick}
                      >
                        Full Stack
                      </Link>
                      <Link
                        className="dropdown-item"
                        href="/categories/machinelearning"
                        onClick={handleLinkClick}
                      >
                        Machine Learning
                      </Link>
                      <Link
                        className="dropdown-item"
                        href="/categories/computervision"
                        onClick={handleLinkClick}
                      >
                        Computer Vision
                      </Link>
                    </div>
                  </li>
                </ul>

                <form className="d-flex" onSubmit={handleFormSubmit}>
                  <div class="group">
                    <svg
                      class="icon"
                      aria-hidden="false"
                      viewBox="0 0 24 24"
                      color="black"
                    >
                      <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                      </g>
                    </svg>
                    <input
                      placeholder="Search Projects"
                      type="search"
                      class="input"
                      value={searchQuery}
                      onChange={handleInputChange}
                    ></input>


                  </div>                    <button class="Btn">
                      <div class="sign">
                        <svg viewBox="0 0 512 512">
                          <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                        </svg>
                      </div>

                      <div class="text">Login</div>
                    </button>
                  {/* <input
                                    className="form-control me-sm-2"
                                    type="search"
                                    placeholder="Search Projects"
                                    value={searchQuery}
                                    onChange={handleInputChange}
                                /> */}
                  {/* <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                                    Find
                                </button> */}
                </form>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
};
