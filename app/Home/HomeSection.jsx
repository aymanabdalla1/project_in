import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import "/public/css/bootstrap.css";
import "./Home.css"

const Home = () => {
    return (
        <React.Fragment>
            {/* [Corpus; HEADER] */}
            <Head>
                <title>Home | La Hora Libre</title>
                <meta name="description" content="An impartial and quality source of articles in the digital era, aiming to provide complete, balanced, and summarized journalistic coverage, committed to the ethical and professional principles of modern digital journalism." />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, la hora libre, la hora libre home, la hora libre contact, la hora libre support, la, hora, libre" />
                <meta name="author" content="lahoralibre" />
                <link rel="canonical" href="https://lahoralibre.com/" />
                <link rel="icon" href="/LOGO_noBackground.png" sizes="any" />
            </Head>


            <div className='containter-fluid mt-4'>
                
                {/* [Corpus; Logotype] */}
                <div className='container-fluid d-flex justify-content-center w-75'>
                    <Image src={'/project_logo.png'} height={120} width={400} alt='La Hora Libre' />
                </div>


                {/* [Corpus; Introduction] */}
                <div className='container mt-1 w-75'>
                    <div>
                        <h1 className="text-center">FIND IDEAS TO HELP START YOUR SIDE PROJECT!</h1>
                        <p className="text-center">
                            Explore a captivating digital destination with articles on science, entertainment, finance, health, and technology. Discover updated knowledge and fascinating advances of humanity, guided by Artificial Intelligence.
                        </p>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <Image src={'/about/about5.svg'} width={250} height={250} alt='Barlow | La Hora Libre' />
                        </div>
                        <div className='col-md-6 mt-4'>
                            <h3>How does it work?</h3>
                            <p>
                                The site uses Barlow, an Artificial Intelligence engine recently developed in El Salvador. The engine uses automated reasoning techniques to analyze available information and apply predefined or learned rules from data. It can work with rule sets defined by human experts or learn new rules through machine learning techniques.
                            </p>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6 order-md-2 d-flex justify-content-center'>
                            <Image src={'/about/about2.svg'} width={250} height={250} alt='Barlow | La Hora Libre' />
                        </div>
                        <div className='col-md-6 mt-4 order-md-1'>
                            <h3>Is it free?</h3>
                            <p>
                                In a digital era where information flows at an unprecedented speed, it is argued that restricting access to information can limit learning, innovation, and equal opportunities. By making information free, the aim is to eliminate economic barriers and ensure that anyone, regardless of their background or resources, can access knowledge and educational resources.
                            </p>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <Image src={'/about/about15.svg'} width={250} height={250} alt='Barlow | La Hora Libre' />
                        </div>
                        <div className='col-md-6 mt-4'>
                            <h3>Just enjoy it</h3>
                            <p>
                                Our articles are an invaluable source of information backed by reliable sources, designed to both entertain and enrich your projects. With a rigorous focus on accuracy and truthfulness, we offer you a treasure trove of reliable knowledge to satisfy your interests and informational needs.
                            </p>
                        </div>
                    </div>

                </div>


            </div>
        </React.Fragment>
    );
};

export default Home;