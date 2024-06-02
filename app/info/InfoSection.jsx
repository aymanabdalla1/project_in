import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Donation from "./PayPalDonation";

import "/public/css/bootstrap.css";


export const metadata = {
    title: 'About us | La Hora Libre',
    description: 'What is lahoralibre.com?',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre info', 'la hora libre about'],
    authors: [{ name: 'Barlow' }, { name: 'Barlow', url: 'https://lahoralibre.com/info' }],
    creator: 'lahoralibre.com/info',
    publisher: 'Barlow',
    icons: {
        icon: '/LOGO_noBackground.png',
    },
}
export default function InfoSection() {
    const helps = [
        "Disabling the Ad-Block of your browser, this way you allow us to generate income through ads.",
        "Sharing the site with your friends and across the network.",
        "Making a modest donation (you will find the link at the end of the page)."
    ];

    return (
        <React.Fragment>
            {/* [Corpus; HEADER] */}
            <Head>
                <title>About us | La Hora Libre</title>
                <meta name="description" content="A source of unbiased and quality articles in the digital age with the aim of providing comprehensive, balanced, and summarized journalistic coverage, committed to the ethical and professional principles of modern digital journalism." />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, la hora libre, la hora libre info, la hora libre contact, la hora libre support, la, hour, free" />
                <meta name="author" content="lahoralibre" />
                <link rel="canonical" href="https://lahoralibre.com/" />
                <link rel="icon" href="/LOGO_noBackground.png" sizes="any" />
            </Head>


            {/* [Corpus; Logotype] */}
            <div className='container-fluid mt-3 d-flex justify-content-center w-75 p-1'>
                <Image src={'/project_logo.png'} width={550} height={220} alt='La Hora Libre' />
            </div>


            {/* [Corpus; Title] */}
            <div className='container-fluid mt-5 w-75 p-1'>
                <h2 className='text-center'>
                    What is Project In?
                </h2>
                <p className='text-center'>
                    It is a media outlet that is playing a prominent role as a reliable source of online information. Founded in 2023, it aims to be a reference in the world of communication thanks to its extensive writing and comprehensive and objective coverage powered by a recently developed Artificial Intelligence engine in El Salvador, BARLOW Engine.
                </p>
                <p className='text-center mt-5'>
                    Conceived as a response to the need for an unbiased and quality source of articles in the digital age. With the aim of providing comprehensive, balanced, and summarized journalistic coverage, committed to the ethical and professional principles of modern digital journalism.
                </p>
            </div>


            {/* [Corpus; Section 1] */}
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Image src={'/about/about17.svg'} width={250} height={250} alt='Barlow | La Hora Libre' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>What is Barlow Engine?</h3>
                        <p>
                            It is the name of the AI Engine used by lahoralibre.com to generate each published article and those to be published on the site. Developed in El Salvador, it is a powerful and advanced software designed to generate coherent and relevant responses as it uses trained models using a huge amount of information from various sources on the Internet, which gives it extensive knowledge on a wide range of topics.
                        </p>
                    </div>
                </div>
            </div>




            {/* [Corpus; Section 2] */}
            <div className='container-fluid mt-5 w-75'>
                <h2 className='mt-4'>Why?</h2>
                <p>
                    Modern artificial intelligence is a revolution that challenges the limits of knowledge and opens up new opportunities in all aspects of our lives. From machines that learn and make autonomous decisions to intelligent virtual assistants, it is transforming the way we interact and solve problems. It is a path to a future full of exciting possibilities and ethical challenges.
                </p>
            </div>


            {/* [Corpus; Section 3] */}
            <div className='container-fluid mt-5 w-75'>
                <h3>But...</h3>
                <p>
                    It is important to note that the use of artificial intelligence consumes a little more electrical energy due to the necessary computing power, intensive model training in calculations, specialized hardware infrastructure, and the need to maintain service availability.
                </p>

                <div className='container-fluid mt-5 d-flex justify-content-center'>
                    <Image src={'/about/about1.svg'} width={260} height={260} alt='Barlow | La Hora Libre' />
                </div>
                {/* {subCorpus; DONATION} */}
                <div className='mt-3 d-flex justify-content-center'>
                    <Donation />
                </div>
                <p className='mt-3 text-center text-muted'>Help us keep the project afloat</p>
            </div>


            {/* [Corpus; Section 4] */}
            <div className='container-fluid mt-5'>
                <h2 className='text-center'>
                    How can I help?
                </h2>
                <p className='text-center'>
                    There are currently three ways you can help us:
                </p>

                <div className='d-flex justify-content-center'>
                    <ul>
                        {
                            helps.map((helper, index) => (
                                <li className={index} key={index} ><p>{helper}</p></li>
                            ))
                        }
                    </ul>
                </div>
            </div>


            {/* [Corpus; Section 5] */}
            <div className='container-fluid mt-5 w-75'>
                <div className='container-fluid mt-5 d-flex justify-content-center'>
                    <Image src={'/about/about3.svg'} width={100} height={100} alt='Barlow | La Hora Libre' />
                </div>


                <h2 className='text-center mt-3'>
                    This is a media outlet:
                </h2>
                <p className='text-center'>
                    All the information displayed on this site is reliable, free, and accessible to any user.
                </p>
            </div>
        </React.Fragment>
    );
};
