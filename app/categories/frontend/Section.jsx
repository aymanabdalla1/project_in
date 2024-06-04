import React from "react";
import Head from "next/head";
import Image from "next/image";

import "/public/css/bootstrap.css";
import Logs from "../logs.json";

import Infinite from "../InfiniteScroll1";
import PreviousPosts from "./PreviousPosts";


export const metadata = {
    title: 'Frontend | Project In',
    description: 'Frontend Software Project Ideas',
    keywords: ['project', 'software', 'software project ideas', 'frontend'],
    authors: [{ name: 'aymanabdalla' }, { name: 'aymanabdalla', url: 'https://aymanabdalla.me' }],
    creator: 'aymanabdalla.me',
    publisher: 'aymanabdalla.me',
    icons: {
      icon: '/small_logo.png',
    },
};
export function Section() {
    const pages = Logs.cat1;

    return (
        <React.Fragment>
            {/* [Corpus; HEADER] */}
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content="ProjectIn: the central hub for sharing software project ideas. From apps to algorithms, ProjectIn fosters collaboration and sparks inspiration. Pitch your ideas, receive feedback, and connect with like-minded tech enthusiasts. Turn your imagination into reality with ProjectIn ." />
                <meta name="keywords" content="projectin, software projects, swe projects, project ideas, software ideas, software engineering, swe, swe ideas" />
                <meta name="author" content="projectin" />
                <link rel="canonical" href="https://projectin.com/" />
            </Head>


            {/* [Corpus; Section 1] */}
            <div className='container mt-5 w-75'>
                <div>
                    <h2 className="text-center">Frontend Project Ideas</h2>
                    <p className="text-center">
                    Welcome to our Frontend Development Project Ideas page! Here, you'll find a curated collection of innovative and exciting project ideas to help you enhance your frontend development skills. Whether you're a beginner looking for simple projects or an experienced developer seeking advanced challenges, our diverse range of ideas will inspire you to create dynamic and engaging user interfaces. Dive in and start building today
                    </p>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <Image src={'/about/about10.svg'} width={250} height={250} alt='Barlow | La Hora Libre' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>¿A qué se refiere?</h3>
                        <p>
                            A que encontrarás una selección de artículos destacados que abarcan diversas áreas científicas, como la física, la biología, la química, la astronomía, la tecnología y más. Si te apasiona la ciencia, te invitamos a sumergirte en nuestro contenido, que está respaldado por investigaciones rigurosas y fuentes confiables.
                        </p>
                    </div>
                </div>
            </div>


            {/* [Corpus; Section 2] */}
            <div className="container-fluid mt-5">
                <PreviousPosts />
            </div>


            {/* [Corpus; Section 3] */}
            <div className="mt-5">
                <Infinite pages={pages} />
            </div>
        </React.Fragment>
    );
};
