import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import "/public/css/bootstrap.css";


export const metadata = {
    title: 'About us',
    description: 'Start your project with us!',
    keywords: ['software', 'project', 'software project', 'software engineering projects', 'swe'],
    authors: [{ name: 'aymanabdalla' }, { name: 'aymanabdalla', url: 'https://aymanabdalla.me' }],
    creator: 'aymanabdalla.me',
    publisher: 'aymanabdalla.me',
    icons: {
      icon: '/small_logo.png',
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
                <title>About Us</title>
                <meta name="description" content="ProjectIn: the central hub for sharing software project ideas. From apps to algorithms, ProjectIn fosters collaboration and sparks inspiration. Pitch your ideas, receive feedback, and connect with like-minded tech enthusiasts. Turn your imagination into reality with ProjectIn " />
                <meta name="keywords" content="projectin, software projects, swe projects, project ideas, software ideas, software engineering, swe, swe ideas" />
                <meta name="author" content="prject in" />
                <link rel="canonical" href="https://projectin.com/" />
                <link rel="icon" href="/project_logo.png" sizes="any" />
            </Head>


            {/* [Corpus; Logotype] */}
            <div className='container-fluid mt-5 d-flex justify-content-center w-75'>
                <Image src={'/project_logo.png'} width={400} height={120} alt='Project In' />
            </div>


            {/* [Corpus; Title] */}
            <div className='container-fluid mt-5 w-75 p-1'>
                <h2 className='text-center'>
                    What is Project In?
                </h2>
                <p className='text-center'>
                    Project In is a dynamic platform designed to empower creators like you to showcase your software projects to a wider audience. It serves as a collaborative hub where you can not only share your innovations but also connect with fellow developers, enthusiasts, and potential collaborators. Whether you're unveiling a groundbreaking app, a sleek website, or a complex software solution, Project In provides the perfect stage to exhibit your work and gather valuable feedback. It's more than just a platform; it's a community-driven space where ideas flourish and connections thrive.
                </p>
                <p className='text-center mt-5'>
                    From Python to JavaScript, Java to Ruby, and everything in between, your projects are welcome here. Whether you're into web development, mobile apps, data science, or game design, our platform embraces diversity and innovation. So, unleash your creativity and share your projects with the world on Project In today!
                </p>
            </div>

            {/* [Corpus; Section 2] */}
            <div className='container-fluid mt-5 w-75'>
                <h2 className='mt-4'>Why?</h2>
                <p>
                    As a side project itself, it emerged from a desire to create a space where developers could easily share their work and collaborate with others. The founders recognized the challenges many creators face in showcasing their projects and connecting with like-minded individuals. Thus, Project In was conceived as a solution—a platform that addresses these needs and fosters a vibrant community of innovation. So, why? Because every great endeavor begins with a question and a passion to make a difference
                </p>
            </div>


            {/* [Corpus; Section 3] */}
            <div className='container-fluid mt-5 w-75'>
                <h3>But...</h3>
                <p>
                    Whether you're a seasoned developer or just starting out, Project In invites you to break free from constraints and share your projects with the world. So, why hold back when you can unleash your potential and inspire others? With Project In, there are no excuses—only opportunities to shine.
                </p>


                {/* {subCorpus; DONATION} */}

            </div>


            
        </React.Fragment>
    );
};
