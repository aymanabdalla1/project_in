import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-transparent text-white d-flex justify-content-center py-4 mt-5">
            <div className="container">
                <div className="row">
                    <hr />
                    <div className="container-fluid d-flex justify-content-center w-75">
                        <Image src="/small_logo.png" height={60} width={60} alt="Project In Logo" />
                    </div>

                    <h5 className="text-center mt-4">Project In</h5>
                    <p className="text-center">All rights reserved</p>

                    <div className="col-md-6 text-md-left mb-3 mb-md-0 mt-4 text-white">
                        <h5 className='text-center'>Contact Information</h5>
                        <p className='text-center'>Email: support@projectin.com</p>
                    </div>
                    
                    <div className="col-md-6 text-md-right mt-4 text-white">
                        <h5 className='text-center'>Social Media Links</h5>
                        <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="https://www.twitter.com/lahoralibreok" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter color="white"/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/lahoralibreok" target="_blank" rel="noopener noreferrer" color='white'>
                                    <FaInstagram color="white"/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/aymanabdalla1/project_in" target="_blank" rel="noopener noreferrer" color='white'>
                                    <FaGithub color="white"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
