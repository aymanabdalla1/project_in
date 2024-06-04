import React from 'react'
import Head from 'next/head';
import { Section } from "./Section";

export const metadata = {
    title: 'Computer Vision',
    description: 'Artículos interesantes relacionados al ámbito de la tecnología',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre computervision', 'la hora libre categoria computervision'],
    authors: [{ name: 'Barlow' }, { name: 'Barlow', url: 'https://lahoralibre.com/categories/computervision' }],
    creator: 'lahoralibre.com/categories/computervision',
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
                <meta name="keywords" content="lahoralibre, lahoralibre.com, computervision, la hora libre computervision, la hora libre categoria computervision" />
                <meta name="author" content={metadata.creator} />
                <link rel="canonical" href="https://lahoralibre.com/" />
            </Head>


            {/* [Corpus; SECTIONS] */}
            <Section />
        </React.Fragment>
    );
};