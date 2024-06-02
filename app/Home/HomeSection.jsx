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
                <div className='container mt-4 w-75'>
                    <div>
                        <h1 className="text-center">FIND IDEAS TO HELP START YOUR SIDE PROJECT!</h1>
                        <p className="text-center">
                            Explore software project ideas that will help you decide on your next side project.
                        </p>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <Image src={'/about/program_icon.png'} width={250} height={250} alt='Barlow | La Hora Libre' />
                        </div>
                        <div className='col-md-6 mt-4'>
                            <h3>Where to start?</h3>
                            <p>
                               Start exploring the different categories at the bottom of the page to find the perfect project idea for you. Choose from many different categories such as front-end, back-end, full-stack, and more.
                            </p>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6 order-md-2 d-flex justify-content-center'>
                            <Image src={'/about/goto_icon.png'} width={250} height={250} alt='Barlow | La Hora Libre' />
                        </div>
                        <div className='col-md-6 mt-4 order-md-1'>
                            <h3>Can I add my own idea?</h3>
                            <p>
                                Yes you can! If you have a project idea that you would like to share with the community, you can submit it using the "Add Idea" button at the bottom of the page once youre logged in.
                            </p>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <Image src={'/about/test_icon.png'} width={250} height={250} alt='Barlow | La Hora Libre' />
                        </div>
                        <div className='col-md-6 mt-4'>
                            <h3>See a problem?</h3>
                            <p>
                                Feel free to suggest any improvements or report any issues you may find using the "Report Issue" button at the bottom of the page. Project In started as a side project and is always looking to improve.
                            </p>
                        </div>
                    </div>

                </div>


            </div>
        </React.Fragment>
    );
};

export default Home;