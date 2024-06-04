import React from 'react'
import Head from 'next/head';
import { Section } from "./Section";

export const metadata = {
    title: 'Machine Learning',
    description: 'Artículos interesantes relacionados al ámbito de la machinelearning humana',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre machinelearning', 'la hora libre categoria machinelearning'],
    authors: [{ name: 'Barlow' }, { name: 'Barlow', url: 'https://lahoralibre.com/categories/machinelearning' }],
    creator: 'lahoralibre.com/categories/machinelearning',
    publisher: 'Barlow',
    icons: {
        icon: '/LOGO_noBackground.png',
    },
};
export default function page() {
    return (
        <React.Fragment>
            {/* [Corpus: HEADER] */}
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, machinelearning, la hora libre machinelearning, la hora libre categoria machinelearning" />
                <meta name="author" content={metadata.creator} />
                <link rel="canonical" href="https://lahoralibre.com/" />
            </Head>


            {/* [Corpus; SECTIONS] */}
            <Section />
        </React.Fragment>
    );
};