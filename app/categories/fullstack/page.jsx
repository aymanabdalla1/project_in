import React from 'react'
import Head from 'next/head';
import { Section } from "./Section";

export const metadata = {
    title: 'fullstack | La Hora Libre',
    description: 'Artículos interesantes relacionados al ámbito financiero',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre fullstack', 'la hora libre economia'],
    authors: [{ name: 'Barlow' }, { name: 'Barlow', url: 'https://lahoralibre.com/categories/fullstack' }],
    creator: 'lahoralibre.com/categories/fullstack',
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
                <meta name="keywords" content="lahoralibre, lahoralibre.com, fullstack, la hora libre fullstack, la hora libre categoria fullstack" />
                <meta name="author" content={metadata.creator} />
                <link rel="canonical" href="https://lahoralibre.com/" />
            </Head>


            {/* [Corpus; SECTIONS] */}
            <Section />
        </React.Fragment>
    );
};