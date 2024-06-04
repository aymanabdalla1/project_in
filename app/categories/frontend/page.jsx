import React from 'react'
import Head from 'next/head';
import { Section } from "./Section";

export const metadata = {
    title: 'frontend | La Hora Libre',
    description: 'Artículos interesantes relacionados al ámbito de la ciencia',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre ciencia', 'la hora libre frontend'],
    authors: [{ name: 'Barlow' }, { name: 'Barlow', url: 'https://lahoralibre.com/categories/frontend' }],
    creator: 'lahoralibre.com/categories/frontend',
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
                <meta name="keywords" content="lahoralibre, lahoralibre.com, ciencia, la hora libre ciencia, la hora libre categoria ciencia" />
                <meta name="author" content={metadata.creator} />
                <link rel="canonical" href="https://lahoralibre.com/" />
            </Head>


            {/* [Corpus; SECTIONS] */}
            <Section />
        </React.Fragment>
    );
};