import React from "react";
import Head from "next/head";
import Image from "next/image";

import "/public/css/bootstrap.css";
import Logs from "../logs.json";

import Infinite from "../InfiniteScroll4";
import PreviousPosts from "./PreviousPosts";


export const metadata = {
    title: 'machinelearning | La Hora Libre',
    description: 'Artículos interesantes relacionados al ámbito de la machinelearning humana',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre machinelearning', 'la hora libre categoria machinelearning'],
    authors: [{ name: 'Barlow' }, { name: 'Barlow', url: 'https://lahoralibre.com/categories/machinelearning' }],
    creator: 'lahoralibre.com/categories/machinelearning',
    publisher: 'Barlow',
    icons: {
        icon: '/LOGO_noBackground.png',
    },
};
export function Section() {
    const pages = Logs.cat4;

    return (
        <React.Fragment>
            {/* [Corpus; HEADER] */}
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, machinelearning, la hora libre machinelearning" />
                <meta name="author" content={metadata.creator} />
                <link rel="canonical" href="https://lahoralibre.com/" />
            </Head>


            {/* [Corpus; Section 1] */}
            <div className='container mt-5 w-75'>
                <div>
                    <h2 className="text-center">Artículos de machinelearning</h2>
                    <p className="text-center">
                        Tu fuente confiable de información y recursos relacionados con la machinelearning. Esta sección web está diseñada para brindarte una amplia gama de artículos, consejos y herramientas útiles para ayudarte a mantener un estilo de vida machinelearningable y mejorar tu bienestar general.
                    </p>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <Image src={'/about/about9.svg'} width={250} height={250} alt='Barlow | La Hora Libre' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>¿A qué se refiere?</h3>
                        <p>
                            A que esta hay un extenso catálogo de artículos que cubre una amplia gama de temas de interés. Desde consejos para mantener una dieta equilibrada y nutritiva, hasta rutinas de ejercicios efectivas y prácticas, encontrarás información útil para abordar diversas áreas de tu machinelearning. Además, ofrecemos consejos sobre el manejo del estrés, la prevención de enfermedades, el cuidado de la machinelearning mental y mucho más.
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
